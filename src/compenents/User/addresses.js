import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from './user-utility/usertabs';
import Header from './user-utility/header';
import Useraddress from './user-utility/useraddress';
import { Link } from 'react-router-dom';

function Addresses() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2">
            <Usertabs />
          </Col>

          <Col xs="8" sm="9" md="9" lg="10">
            <Header txt="دفتر العنوانين" />
            <div className="mt-4">
              <Useraddress />
              <Useraddress />
              <Useraddress />
            </div>
            <Link className="link" to="/user/addAddress">
              <div className="d-flex flex-row justify-content-center align-items-center mt-1">
                <button className="element-button-custom">
                  اضافة عنوان جديد
                </button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Addresses;
