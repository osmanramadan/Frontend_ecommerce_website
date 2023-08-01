import React from 'react';
import mobile from '../../../images/mobile.png';
import { Col, Row } from 'react-bootstrap';

function Userorder() {
  return (
    <div className="user-orders-manage p-2 mb-2">
      <span
        className="mx-2"
        style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'cairo' }}
      >
        طلب رقم #234556
      </span>
      <div className="itemsOforder">
        <Row className="mt-2">
          <Col xs="4" sm="4" md="4" lg="2">
            <div className="">
              <img
                alt="cartimage"
                style={{ height: '145px' }}
                className="Orderimage"
                src={mobile}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="8" lg="10">
            <p className="details-product-p1 mb-0">
              آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
              <span style={{ color: '#FEC107', marginRight: '10px' }}>4.5</span>
              <span className="fs-6 opacity-50 mx-1">(160 تقييم)</span>
            </p>
            <div>
              <p className="details-product-title mb-2  d-inline-block">
                الماركة :{' '}
              </p>
              <span className="mx-1 mb-2 fs-4 fw-bolder">ابل</span>
            </div>
            <div className="circle-row d-flex flex-row-reverse mb-1">
              <div className="circle-detail circle-red"></div>
              <div className="circle-detail circle-green"></div>
            </div>
            <div className="mt-3">
              <span className="details-product-title">الكمية</span>
              <span>
                <input
                  style={{ width: '40px', height: '24px' }}
                  type="text"
                  class="mx-2"
                ></input>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs="4" sm="4" md="4" lg="2">
            <div className="">
              <img
                alt="cartimage"
                style={{ height: '145px' }}
                className="Orderimage"
                src={mobile}
              />
            </div>
          </Col>
          <Col xs="10" sm="10" md="8" lg="10">
            <p className="details-product-p1 mb-0">
              آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
              <span style={{ color: '#FEC107', marginRight: '10px' }}>4.5</span>
              <span className="fs-6 opacity-50 mx-1">(160 تقييم)</span>
            </p>
            <div>
              <p className="details-product-title mb-2  d-inline-block">
                الماركة :{' '}
              </p>
              <span className="mx-1 mb-2 fs-4 fw-bolder">ابل</span>
            </div>
            <div className="circle-row d-flex flex-row-reverse mb-1">
              <div className="circle-detail circle-red"></div>
              <div className="circle-detail circle-green"></div>
            </div>
            <div className="mt-3">
              <span className="details-product-title">الكمية</span>
              <span>
                <input
                  style={{ width: '40px', height: '24px' }}
                  type="text"
                  class="mx-2"
                ></input>
              </span>
            </div>
            {/*  */}
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs="6" style={{ fontFamily: 'cairo' }}>
          <span className="mx-1">الحالة</span>
          <span className="opacity-75 mx-1">قيد التنفيذ</span>
        </Col>
        <Col xs="6" className="text-start fs-6 fw-bold">
          <div
            style={{ color: '#212529', opacity: '0.7', fontFamily: 'cairo' }}
          >
            4000 جنية
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Userorder;
