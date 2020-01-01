import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { OrderContext } from '../Context/OrderContext'


const AssetsList = () => {

  const [assetsArr, setAssetsArr] = useState([])
  const [fileContent, setFileContent] = useState([])
  const [tableContent, setTableContent] = useState([])
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

    if (orderList.length > 0) {
      axios.post('/file/makeOrders', { orderList: orderList })
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
        } else {
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

  console.log(`Remder`)
  return (
    <>
      <div className='input-group d-flex justify-content-between my-4' >
        <input type='file' onChange={fileInputChangeHandler} />
        <Button variant='success' disabled={orders.length > 0 || tableContent.length < 1} onClick={() => makeOrders(tableContent)}>Kopiuj do katalogów</Button>
      </div>

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
