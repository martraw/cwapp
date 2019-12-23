import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const OrderListDirectory = ({index, children}) => {
  return (
    <Card>
    <Card.Header className='d-flex justify-content-between'>
      <Accordion.Toggle as={Button} variant="link" eventKey={index}>
        Katalog 1
    </Accordion.Toggle>
      <Button variant='danger'>Usuń katalog</Button>
    </Card.Header>
    <Accordion.Collapse eventKey={index}>
      <Card.Body>
        {children}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  )
}

export default OrderListDirectory
