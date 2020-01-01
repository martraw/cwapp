import React , {useContext} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import OrderListDirectory from './OrderListDirectory'

import {OrderContext} from '../Context/OrderContext'

const OrderList = () => {

  const { orders } = useContext(OrderContext)

  return (
    <>
      <h3 className='text-center my-4'>Zawartość katalogu Orders</h3>
      
      <Accordion defaultActiveKey="0">
        {orders.map((item, index) => {
          return <OrderListDirectory index={index} directory={item} key={item.directoryName}/>
        })}
      </Accordion>
    </>
  )
}

export default OrderList
