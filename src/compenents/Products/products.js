import React from 'react';
import { Container } from 'react-bootstrap';
import Productnavbar from './products-utility/navbar';
import Productcount from './products-utility/productcount';
import Productbody from './products-utility/productbody';

function Productsview() {
  return (
    <div style={{ marginTop: '87px' }}>
      <Productnavbar />
      <Container>
        <div className="Productsviewbody">
          <Productcount />
          <Productbody />
        </div>
      </Container>
    </div>
  );
}

export default Productsview;
