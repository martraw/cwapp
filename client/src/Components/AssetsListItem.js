import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const AssetsListItem = ({ fileName, filePath }) => {
  const testFunc = (filePath) => {
    console.log(filePath)
  }
  return (
    <ListGroup.Item as='li' className='d-flex'>
      <div className='d-flex flex-grow-1 align-items-center'>
        <p className='mb-0'>{fileName}</p>
      </div>
      <div >
        <button className='btn btn-success' onClick={() => testFunc(filePath)}>Dodaj</button>
      </div>
    </ListGroup.Item>
  )
}

export default AssetsListItem
