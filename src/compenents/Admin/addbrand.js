import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import FileChooser from './admin-utility/imagechooser';

function Addbrand() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl', height: '100vh' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="اضف ماركه جديده" />
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

            <Row className="mt-4">
              <Col
                xs="12"
                className="px-4"
                style={{
                  fontSize: '15px',
                  fontweight: '400',
                  fontFamily: 'cairo',
                  opacity: '0.6',
                }}
              >
                صوره الماركه{' '}
              </Col>
              <Col xs="12" className="mt-2">
                <FileChooser />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="8">
                <input
                  className="inputfield-start mt-0"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="اسم الماركه"
                  name="brandname"
                />
              </Col>
              <Col xs="8" className="text-start p-0">
                <button
                  style={{ width: '140px' }}
                  className="element-button-custom"
                >
                  {' '}
                  حفظ التعديلات
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Addbrand;
