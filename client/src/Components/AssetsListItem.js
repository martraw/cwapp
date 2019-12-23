import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const AssetsListItem = () => {
  return (
    <ListGroup.Item as='li'className='d-flex'>
      <div className='d-flex flex-grow-1 align-items-center'>
        <p className='mb-0'>SAMSUNG Gallaxy S10</p>
      </div>
      <div >
        <button className='btn btn-success'>Dodaj</button>
      </div>
    </ListGroup.Item>
  )
}

export default AssetsListItem
