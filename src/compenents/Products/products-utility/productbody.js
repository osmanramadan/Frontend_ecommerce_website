import React from 'react';
import { Col, Row } from 'react-bootstrap';
import headphone from '../../../images/item.png';
import Productitem from '../../utility/Productitem';
import PaginationComponent from '../../utility/pagination';

function Productbody() {
  return (
    <div
      className="productbody"
      style={{ direction: 'rtl', marginTop: '20px' }}
    >
      <Row>
        <Col xs="12" sm="12" md="12" lg="2">
          <div className="d-flex flex-column">
            <p
              style={{ fontWeight: '600', opacity: '0.7', fontSize: '24px' }}
              className="mb-1 mx-2 fs-4"
            >
              الفئة
            </p>
            <div
              style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}
            >
              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input  mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label">
                  الكل
                </label>
              </div>

              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input p-1 mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label ">
                  اجهزة منزلية
                </label>
              </div>

              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input p-1 mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label ">
                  اجهزة منزلية
                </label>
              </div>

              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label ">
                  اجهزة الكترونية
                </label>
              </div>

              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label">
                  اجهزة الكترونية
                </label>
              </div>
            </div>

            <p
              className="mx-2 mb-1 mt-3 fs-5"
              style={{ fontWeight: '600', opacity: '0.7', fontSize: '24px' }}
            >
              الماركة
            </p>
            <div
              style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}
            >
              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input d-block mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label">
                  الكل
                </label>
              </div>

              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label">
                  ابل
                </label>
              </div>

              <div class="d-flex flex-row">
                <input
                  type="checkbox"
                  id="checkout1"
                  class="form-check-input mx-2"
                ></input>
                <label title="" for="checkout1" class="form-check-label">
                  سامسنج
                </label>
              </div>
            </div>

            <p
              className="mx-2 mb-1 mt-2 fs-4"
              style={{ fontWeight: '600', opacity: '0.7', fontSize: '24px' }}
            >
              السعر
            </p>
            <div
              className="mt-1 mx-2"
              style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}
            >
              <div class="d-flex flex-row mb-2">
                <label title="" for="checkout1" class="form-check-label">
                  {' '}
                  من:
                </label>
                <input
                  style={{ width: '49px', height: '24px' }}
                  type="number"
                  id="checkout1"
                  class="form-check-input mx-2"
                ></input>
              </div>

              <div class="d-flex flex-row">
                <label for="checkout1" class="form-check-label">
                  {' '}
                  الى:
                </label>
                <input
                  style={{ width: '49px', height: '24px' }}
                  type="number"
                  id="checkout1"
                  class="form-check-input  mx-2"
                ></input>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="12" md="12" lg="10">
          <Row className="mt-3 d-flex flex-row-reverse justify-content-start-0">
            <Productitem key={Math.random()} image={headphone} />
            <Productitem key={Math.random()} image={headphone} />
            <Productitem key={Math.random()} image={headphone} />
            <Productitem key={Math.random()} image={headphone} />
          </Row>
        </Col>
      </Row>

      <div style={{ marginBottom: '100px' }}>
        <PaginationComponent pageCount={100} />
      </div>
    </div>
  );
}
export default Productbody;
