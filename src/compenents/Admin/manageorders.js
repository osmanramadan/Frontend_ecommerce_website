import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import AdminOrderItem from './admin-utility/adminorderitem';
import Admintitles from './admin-utility/admintitles';
import PaginationComponent from '../utility/pagination';

function Manageorders() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1s">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="ادارة جميع الطلبات" />
              </Col>
              <Col
                xs="6"
                className=" d-flex flex-row align-items-center justify-content-end"
              >
                <div className="admin-tabs2">
                  <Admintabs icon="true" />
                </div>
              </Col>
            </Row>
            <div className="my-0">
              <AdminOrderItem />
              <AdminOrderItem />
              <AdminOrderItem />
            </div>
            <PaginationComponent pageCount={100} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Manageorders;
