import React, { useContext } from 'react'
import { OrderContext } from '../Context/OrderContext'


const TitleBar = () => {

  const { clearOrdersDir } = useContext(OrderContext)

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="d-flex flex-grow-1">
        <nav className="navbar navbar-dark ">
          <span className="navbar-brand mb-0 h1">CaseWorld</span>
        </nav>
      </div>
      <div>
        <button className='btn btn-danger ml-5' onClick={clearOrdersDir}>Usuń zawartość katalogu z Orders</button>
      </div>
    </nav>
  )
}

export default TitleBar


