import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './header';

function Userprofile() {
  return (
    <div>
      <div
        className="Userinfo"
        style={{
          fontSize: '15px',
          fontweight: '400',
          fontFamily: 'cairo',
          overflow: 'scroll',
        }}
      >
        <Row className="p-2">
          <Col xs="12" sm="6">
            <div className="mx-1 mt-2">
              الاسم:<span className="opacity-75 mx-3">احمد عبداللة</span>
            </div>
          </Col>

          <Col xs="12" sm="6" className="text-start">
            <div className="mx-2 mt-1 opacity-75">
              <span className="mx-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <span>تعديل</span>{' '}
            </div>
          </Col>
        </Row>

        <Row className="mx-0 mt-3">
          <div>
            رقم الهاتف:<span className="opacity-75 mx-2">002131343242</span>
          </div>
        </Row>

        <Row className="mx-0 mt-3">
          <div>
            الايميل:<span className="opacity-75 mx-2">osman@odmsn.com</span>
          </div>
        </Row>
      </div>

      <Row className="mt-4">
        <Header txt="تغير كملة المرور" m="1" />
        <Col xs="10" sm="8" md="7">
          <input
            className="inputfield mt-0"
            style={{ width: '100%' }}
            type="text"
            placeholder="ادخل كلمة المرور القديمة"
            name="email"
          />
        </Col>

        <Col xs="10" sm="8" md="7">
          <input
            className="inputfield mt-1"
            style={{ width: '100%' }}
            type="text"
            placeholder="ادخل كلمة المرور الجديدة"
            name="email"
          />
          <Row className="d-flex  justify-content-end">
            <input
              type="button"
              className="element-button-custom mx-1"
              value="حفظ كلمة السر"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Userprofile;
