import React from 'react';
import { Col } from 'react-bootstrap';

function Categoryitem({ title, catecolor, image }) {
  return (
    <Col xs="6" sm="4" md="3" lg="2">
      <div className="mb-4 d-flex flex-column align-items-center">
        <div style={{ backgroundColor: catecolor }} className="circle">
          {' '}
          <img className="image" src={image} alt="img" />{' '}
        </div>
        <div style={{ fontSize: '22px', fontWeight: '600', opacity: '0.8' }}>
          {title}
        </div>
      </div>
    </Col>
  );
}

export default Categoryitem;
