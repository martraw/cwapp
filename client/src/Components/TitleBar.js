import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const TitleBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="d-flex flex-grow-1">
        
        <form className="mr-2 my-auto w-100 d-inline-block order-1">
          <div className="input-group ">
            <input type="text" className="form-control border border-right-0" placeholder="Search..." />
            
          </div>
        </form>
      </div>
      <div>
        <button className='btn btn-success ml-5'>Utwórz nowy katalog</button>
      </div>
    </nav>
  )
}

export default TitleBar


