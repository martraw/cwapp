import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const OrderListItem = () => {
  return (
    <ListGroup>
      <ListGroup.Item className='d-flex justify-content-between'>
        SAMSUNG Gallaxy S10
        <Button variant='danger'>Usuń</Button>
      </ListGroup.Item>

    </ListGroup>
  )
}

export default OrderListItem
