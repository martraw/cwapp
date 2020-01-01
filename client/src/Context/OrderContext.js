import React, { createContext, useState } from 'react'
import axios from 'axios'

export const OrderContext = createContext()

export const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([])
  const [isOrdersDirEmpty, setIsOrdersDirEmpty] = useState(true)

  const clearOrdersDir = () => {
    axios.delete('/directory/removeAll')
      .then(res => {
        setIsOrdersDirEmpty(true)
        setOrders([])
        console.log(res)
      })
      .catch(err => {
        setIsOrdersDirEmpty(false)
        console.log(err)
      })
  }

  return (
    <OrderContext.Provider value={{ orders, setOrders, isOrdersDirEmpty, setIsOrdersDirEmpty, clearOrdersDir }}>
      {props.children}
    </OrderContext.Provider>
  )
}