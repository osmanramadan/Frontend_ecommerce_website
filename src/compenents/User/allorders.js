import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from './user-utility/usertabs';
import Userorder from './user-utility/userorders';

function Allorders() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2">
            <Usertabs />
          </Col>

          <Col xs="8" sm="9" md="9" lg="10">
            <p
              style={{
                fontSize: '23px',
                fontWeight: 'bold',
                fontFamily: 'cairo',
                opacity: '0.8',
              }}
            >
              اهلا محمد على
            </p>
            <Userorder />
            <Userorder />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Allorders;
