import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { OrderContext } from '../Context/OrderContext'


const AssetsList = () => {

  const [assetsArr, setAssetsArr] = useState([])
  const [fileContent, setFileContent] = useState([])
  const [tableContent, setTableContent] = useState([])
  const [devider, setDevider] = useState(15) // Devider określa po ile plików ma być w podkatalogach tworzonych w katalogu Orders
  const { orders, setOrders } = useContext(OrderContext)


  // Read input file content
  const fileInputChangeHandler = e => {

    const file = e.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = data => {
      const dataArray = data.target.result
        .split(/\n/)
        .filter(item => item !== '')
        .map(item => item.trim())

      setFileContent(dataArray)
    }

    fileReader.readAsText(file)
  }

  const makeOrders = (orderList) => {

    const payload = {
      orderList,
      devider
    }

    if (orderList.length > 0) {
      axios.post('/file/makeOrders', payload)
        .then(resp => setOrders(resp.data.ordersContent))
        .catch(err => console.log(err))
    }
  }

  // Set assets table content
  useEffect(() => {
    if (fileContent.length > 0) {
      const tempTableContent = []
      fileContent.forEach((orderItem, index) => {
        const matchingAsset = assetsArr.find((assetItem) => {
          return assetItem.fileName === `${orderItem}.tif`
        })
        if (orderItem !== '' && matchingAsset) {
          tempTableContent.push(
            {
              index: index + 1,
              orderItem,
              matchingAsset
            }
          )
        } else { // Nie pamiętam czemu ten else ma służyć.
          tempTableContent.push(
            {
              index: index + 1,
              orderItem,
              matchingAsset
            }
          )
        }
      })
      setTableContent([...tempTableContent])
    }
  }, [fileContent, assetsArr])

  // Make list of all assets available
  useEffect(() => {
    axios.get('/listassets')
      .then(res => setAssetsArr([...res.data.assetsList]))
  }, [])

  console.log(`Render`)
  return (
    <>
      <form className="form-inline d-flex justify-content-between my-4">
        <input type='file' className="" onChange={fileInputChangeHandler} />
        <div className="input-group mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Liczba plików w katalogu</div>
          </div>
          <input
            type="number"
            min="1"
            className="form-control"
            placeholder="Wpisz liczbę"
            value={devider}
            onChange={(e) => setDevider(Number(e.target.value))} />
        </div>
        <Button variant='success' disabled={orders.length > 0 || tableContent.length < 1} onClick={() => makeOrders(tableContent)}>Kopiuj do katalogów</Button>
      </form>

      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Szukana nazwa pliku</th>
            <th>Znaleziony plik</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.length > 0 && tableContent.map(item => {
            return (
              <tr key={item.index} >
                <td>{item.index}</td>
                <td>{item.orderItem}</td>
                <td>{item.matchingAsset !== undefined ? <span alt={item.matchingAsset.filePath}>{item.matchingAsset.filePath}</span> : <span className='text-danger'>Nie ma takiego pliku</span>}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default AssetsList
