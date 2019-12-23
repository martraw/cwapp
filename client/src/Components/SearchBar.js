import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const SearchBar = () => {
  return (
    <Form>
     <InputGroup className="my-3">
    <Form.Control
      placeholder="Szukaj..."
      aria-label="Szukaj..."
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="primary">Reset</Button>
    </InputGroup.Append>
  </InputGroup>
    </Form>
  )
}

export default SearchBar
