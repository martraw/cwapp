import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OrderListItem from './OrderListItem'

const OrderListDirectory = ({index, directory}) => {
  return (
    <Card>
    <Card.Header className='d-flex justify-content-between'>
      <Accordion.Toggle as={Button} variant="link" eventKey={index}>
        {`Katalog - ${directory.directoryName}`}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={index}>
      <Card.Body>
        {directory.directoryContent.map((item, index) => <OrderListItem fileName={item.fileName} key={index}/>)}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  )
}

export default OrderListDirectory
