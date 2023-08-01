import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from './user-utility/usertabs';
import Productitems from '../Homepage/Productitems';
import PaginationComponent from '../utility/pagination';
import Header from './user-utility/header';

function Favoriteproducts() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2">
            <Usertabs />
          </Col>

          <Col xs="8" sm="9" md="9" lg="10">
            <Header txt="قائمة المفضلة" />
            <div style={{ direction: 'ltr' }}>
              <Productitems />
              <Productitems />
            </div>
          </Col>
        </Row>
      </Container>
      <PaginationComponent pageCount={100} />
    </div>
  );
}

export default Favoriteproducts;
