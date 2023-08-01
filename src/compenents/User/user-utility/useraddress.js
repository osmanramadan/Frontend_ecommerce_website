import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function Useraddress() {
  return (
    <div
      className="Userinfo"
      style={{ fontSize: '15px', fontweight: '400', fontFamily: 'cairo' }}
    >
      <Row className="p-2">
        <Col xs="12" sm="6">
          <span
            className="mx-2"
            style={{ fontSize: '16px', fontweight: '500', fontFamily: 'cairo' }}
          >
            المنزل
          </span>
        </Col>
        <Col xs="12" sm="6" className="text-start">
          <div className="mx-2 mt-1 opacity-75">
            <span className="mx-2">
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
            <span>تعديل</span>
            <span className="mx-2">
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span>ازالة</span>
          </div>
        </Col>
      </Row>

      <Row className="mx-0 mt-3">
        <div>القاهرة مدينه نصر شارع التسعين عماره ١٤</div>
      </Row>

      <Row className="mx-0 mt-3">
        <div>
          رقم الهاتف:<span className="opacity-75 mx-2">002131343242</span>
        </div>
      </Row>
    </div>
  );
}

export default Useraddress;
