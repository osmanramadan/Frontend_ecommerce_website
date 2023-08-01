import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Productitem({ image, admin }) {
  return (
    <Col lg={admin ? '4' : '3'} md={admin ? '6' : '4'} sm={6} xs={12}>
      <Card className="productitem mb-2">
        {admin ? (
          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6">
              <button className="cart-action">تعديل</button>
            </Col>
            <Col xs="6" className="text-start">
              <div>
                <button className="cart-action">ازالة</button>
              </div>
            </Col>
          </Row>
        ) : (
          ''
        )}
        <Link className="link" to={'/products/' + Math.random()}>
          <Card.Img src={image} alt="Image" />
          <Card.Title className="d-flex justify-content-end mb-0 mx-4">
            <FontAwesomeIcon icon={faHeart} />
          </Card.Title>
          <Card.Body>
            <Card.Text
              className="mb-0"
              style={{ fontSize: '20px', opcity: '0.4' }}
            >
              سود كربون ساعة يد ذكية بيب اس اسود كربون بيب كود
            </Card.Text>
            <Row>
              <Col style={{ color: '#F6B805' }}>
                <FontAwesomeIcon icon={faStar} /> 4.5
              </Col>
              <Col className="text-start mx-2">
                <b className="fs-5 mx-1">880</b>جنية
              </Col>
            </Row>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
}

export default Productitem;
