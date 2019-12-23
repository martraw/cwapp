import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OrderListItem from './OrderListItem'
import OrderListDirectory from './OrderListDirectory'


const OrderList = () => {
  return (
    <>
      <h3 className='text-center my-4'>Zamówienia</h3>
      
      <Accordion defaultActiveKey="0">
        <OrderListDirectory index='0'>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderListDirectory>

        <OrderListDirectory index='1'>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderListDirectory>

        <OrderListDirectory index='2'>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderListDirectory>
        
      </Accordion>
    </>
  )
}

export default OrderList
