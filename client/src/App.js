import React from 'react';

import TitleBar from './Components/TitleBar'
import AssetsList from './Components/AssetsList';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OrderList from './Components/OrderList';

function App() {
  return (
    <div className="App" style={{maxHeight: '100vh'}}>
      <TitleBar />
      <Container fluid className='vh-100'>
        <Row>
          <Col>
            <AssetsList />
          </Col>
          <Col>
            <OrderList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
