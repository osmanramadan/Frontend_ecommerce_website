import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import { useParams } from 'react-router-dom';
import Cartitem from '../Cart/cart-utility/cartitem';
import CustomerDetails from './admin-utility/customerDetails';

function OrderDetails() {
  const { id } = useParams();
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            {/* 0---0---0 */}

            <div className="order-num-details">
              <Row className="mt-2 d-flex justify-content-between">
                <Col xs="6">
                  <Admintitles txt={'تفاصيل الطلب رقم' + '#' + id} />
                </Col>
                <Col
                  xs="6"
                  className=" d-flex flex-row align-items-center justify-content-end"
                >
                  <div className="admin-tabs2">
                    <Admintabs icon="true" />
                  </div>
                </Col>

                <div className="mt-1">
                  <Cartitem txt1="الكترونيات" />
                  <Cartitem txt1="الكترونيات" />
                  <Cartitem txt1="الكترونيات" />
                </div>
                <CustomerDetails />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetails;
