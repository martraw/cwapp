import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const OrderListItem = ({fileName}) => {
  return (
    <ListGroup>
      <ListGroup.Item className='d-flex justify-content-between'>
        {fileName}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default OrderListItem
