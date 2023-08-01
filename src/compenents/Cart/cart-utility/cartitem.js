import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import mobile from '../../../images/mobile1.png';

function Cartitem({ txt1 }) {
  return (
    <Row className="cart-item-compenent mx-1">
      <Col xs="3" sm="3" md="3" lg="2" className="mb-4">
        <div className="mt-1 cart-image-container">
          <img alt="cartimage" className="cart-image" src={mobile} />
        </div>
      </Col>
      <Col xs="9" sm="9" md="9" lg="10" className="mb-4">
        <div className="d-flex flex-column mx-2">
          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6" sm="6">
              <h4 className="order-item-header">{txt1}</h4>
            </Col>
            <Col xs="6" sm="6" className="text-start">
              <div>
                <span className="order-item-header mx-2">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span>ازالة</span>
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <p className="details-product-p1 mb-0">
              آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
              <span style={{ color: '#FEC107', marginRight: '10px' }}>4.5</span>
            </p>
          </Row>

          <Row>
            <div>
              <p className="details-product-title mb-2  d-inline-block">
                الماركة :{' '}
              </p>
              <span className="mx-1 mb-2 fs-4 fw-bolder">ابل</span>
            </div>
          </Row>

          <div className="circle-row d-flex flex-row-reverse mb-1">
            <div className="circle-detail circle-red"></div>
            <div className="circle-detail circle-green"></div>
            <div className="circle-detail circle-blue"></div>
          </div>

          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6" sm="6">
              <div>
                <span className="details-product-title">الكمية</span>
                <span>
                  <input
                    style={{ width: '40px', height: '24px' }}
                    type="number"
                    class="mx-2"
                  ></input>
                </span>
              </div>
            </Col>
            <Col xs="6" sm="6" className="text-start fs-5 fw-bold">
              <div
                style={{
                  color: '#212529',
                  opacity: '0.7',
                  fontFamily: 'cairo',
                }}
              >
                ٣٠٠٠ جنية
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Cartitem;
