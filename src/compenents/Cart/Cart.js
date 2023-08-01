import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cartitem from './cart-utility/cartitem';
import Cartprice from './cart-utility/cartprice';

function Cart() {
  return (
    <div className="cartCar">
      <Container style={{ marginTop: '110px' }}>
        <p
          style={{ fontSize: '24px', fontFamily: 'cairo' }}
          className="fw-bolder opacity-85 mb-0"
        >
          عربة التسوق
        </p>

        <Row className="d-flex  justify-content-xs-center justify-content-sm-center justify-content-md-center justify-content-lg-start">
          <Col xs="12" sm="12" md="10" lg="8" className="cart-items mt-1">
            <div className="d-flex flex-column">
              <Cartitem txt1="الكترونيات" />
              <Cartitem txt1="الكترونيات" />
              <Cartitem txt1="الكترونيات" />
              <Cartitem txt1="الكترونيات" />
            </div>
          </Col>

          <Col xs="6" sm="6" md="5" lg="3" className="mx-2 mt-1 cart-price">
            <Cartprice />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
