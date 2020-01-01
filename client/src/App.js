import React from 'react';

import TitleBar from './Components/TitleBar'
import AssetsList from './Components/AssetsList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OrderList from './Components/OrderList';

import { OrderContextProvider } from './Context/OrderContext'

function App() {
  return (
    <div className="App" style={{ maxHeight: '100vh' }}>
      <OrderContextProvider>
        <TitleBar />
        <Container fluid className='vh-100'>
          <Row>
            <Col xs={8}>
              <AssetsList />
            </Col>
            <Col>
              <OrderList />
            </Col>
          </Row>
        </Container>
      </OrderContextProvider>
    </div>
  );
}

export default App;
