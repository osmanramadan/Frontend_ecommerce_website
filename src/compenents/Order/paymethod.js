import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Subtile from '../utility/Subtitle';

function Paymethod() {
  return (
    <div className="paymethod">
      <Container>
        <span className="opacity-80">
          <Subtile text="اختر طريقة الدفع" />
        </span>
        <div className="paymethod-kinds d-flex flex-column justify-content-evenly">
          <div>
            <input
              class="form-check-input mx-2"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              class="form-check-label mx-1 fs-5 fw-lighter"
              for="flexRadioDefault1"
            >
              الدفع عن طريق البطاقه الائتمانية
            </label>
          </div>
          <div>
            <input
              class="form-check-input mx-2"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              class="form-check-label mx-1 fs-5 fw-lighter"
              for="flexRadioDefault2"
            >
              الدفع عند الاستلام
            </label>
          </div>
        </div>

        <Row className="mt-3" style={{ direction: 'ltr' }}>
          <Col xs="12">
            <button className="element-button fw-semibold mx-0">
              {' '}
              اتمام الشراء
            </button>
            <div
              className="element-price d-inline-flex  mx-2 mt-2"
              style={{
                backgroundColor: 'white',
                height: '47px',
                width: '130px',
              }}
            >
              <span>جنية </span> 34000
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Paymethod;
