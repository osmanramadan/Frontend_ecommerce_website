import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import lab from '../../images/laptops.png';

function DiscountBar() {
  return (
    <Row
      className="discount-bar align-items-center"
      style={{ backgroundColor: '#535556' }}
    >
      <Col lg={6} md={6} sm={12} xs={12} className="text-center">
        <div className="discount-image-container">
          <Image
            className="discount-image"
            src={lab}
            alt="Laptop Image"
            fluid
            width="320px"
            height="320px"
          />
        </div>
      </Col>
      <Col lg={6} md={6} sm={12} xs={12}>
        <div
          className="text-center"
          style={{ fontSize: '28px', color: 'white' }}
        >
          خصم يصل حتى ٣٠٪ على أجهزة اللابتوب
        </div>
      </Col>
    </Row>
  );
}

export default DiscountBar;
