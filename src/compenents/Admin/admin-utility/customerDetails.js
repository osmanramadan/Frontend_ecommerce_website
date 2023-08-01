import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Admintitles from './admintitles';
import Customdrop from './customdropdown';

function CustomerDetails() {
  return (
    <div
      className="Userinfo"
      style={{ fontSize: '15px', fontweight: '400', fontFamily: 'cairo' }}
    >
      <div className="mx-3 my-2">
        <Admintitles txt="تفاصيل العميل" />
      </div>

      <Row className="p-2">
        <Col xs="12">
          <div className="mx-1 mt-2">
            الاسم:<span className="opacity-75 mx-3">احمد عبداللة</span>
          </div>
        </Col>
      </Row>

      <Row className="mx-0 mt-2">
        <div>
          رقم الهاتف:<span className="opacity-75 mx-2">002131343242</span>
        </div>
      </Row>

      <Row className="mx-0 mt-2">
        <div>
          الايميل:<span className="opacity-75 mx-2">osman@odmsn.com</span>
        </div>
      </Row>

      <Row>
        <div
          className="mb-2 mt-3 text-center"
          style={{
            height: '40px',
            padding: '5px',
            width: '100%',
            border: '1px double #c2beb4',
          }}
        >
          المجموع ٤٠٠٠ جنيه
        </div>
      </Row>

      <Row className="d-flex justify-content-center mb-2 mt-1">
        <Col xs="6" sm="6">
          <Customdrop />
        </Col>
        <Col xs="1" sm="1">
          <button
            style={{ height: '43px', width: '70px' }}
            className="element-button"
          >
            حفظ
          </button>
        </Col>
      </Row>

      <Row></Row>
    </div>
  );
}

export default CustomerDetails;
