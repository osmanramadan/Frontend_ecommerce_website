import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function Productusercomment() {
  return (
    <div style={{ height: '70px' }} className="border-bottom">
      <Row className="mx-4 my-2  d-flex align-items-center">
        <Col xs="auto">
          <span className="fs-5 opacity-78">احمد محمود </span>
        </Col>
        <Col>
          <span style={{ color: '#F6B805' }}>
            <FontAwesomeIcon icon={faStar} /> 4.5{' '}
          </span>
        </Col>
        <Col xs="12">
          <div className="fw-100 ">
            {' '}
            منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Productusercomment;
