import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import AssetsListItem from './AssetsListItem'

const AssetsList = () => {
  return (
    <>
      <h3 className='text-center my-4'>Zasoby</h3>
      <ListGroup as='ul'>
        <AssetsListItem />
        <AssetsListItem />
        <AssetsListItem />
        <AssetsListItem />
        <AssetsListItem />
       
      </ListGroup>
    </>
  )
}

export default AssetsList
