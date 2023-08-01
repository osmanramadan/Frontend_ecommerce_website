import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import Subcategorydropdown from './admin-utility/subcategorydropdown';

function Addsubcategory() {
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
                <Admintitles txt="اضافه تصنيف فرعي جديد" />
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

            <Row className="mt-5">
              <Col xs="8">
                <input
                  className="inputfield-start px-2"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="اسم التصيف الفرعي"
                  name="brandname"
                />
              </Col>
              <Col xs="8">
                <Subcategorydropdown bg="white" />
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

export default Addsubcategory;
