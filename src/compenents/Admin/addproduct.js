import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import FileChooser from './admin-utility/imagechooser';
import Textarea from '../utility/Textarea';
import Subcategorydropdown from './admin-utility/subcategorydropdown';
import Multiselection from './admin-utility/multiselection';
import Branddropdown from './admin-utility/branddropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Addproduct() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="اضافه منتج جديد" />
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
                صورة للمنتج
              </Col>
              <Col xs="12" className="mt-2">
                <FileChooser />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="8">
                <input
                  className="inputfield-start mt-0 px-2"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="اسم المنتج"
                  name="brandname"
                />
                <Textarea rows={4} txt="وصف المنتج" />
                <input
                  className="inputfield-start mt-3 px-2"
                  style={{ width: '100%' }}
                  type="number"
                  placeholder="السعر قبل الخصم"
                  name="brandname"
                />
                <input
                  className="inputfield-start px-2"
                  style={{ width: '100%' }}
                  type="number"
                  placeholder=" سعر المنتج"
                  name="brandname"
                />
                <Subcategorydropdown />
                <Multiselection />
                <Branddropdown />

                <Row>
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
                    الالوان المتاحه للمنتج
                  </Col>
                  <Col xs="12" className="d-flex" style={{ direction: 'rtl' }}>
                    <div className="circle-row mt-2 mx-2">
                      <div className="circle-detail circle-red"></div>
                      <div className="circle-detail circle-green"></div>
                      <div className="circle-detail circle-blue"></div>
                      <div className="circle-detail circle text-center">
                        <FontAwesomeIcon
                          icon={faPlus}
                          style={{ height: '12px' }}
                          color="#818385"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs="8" className="text-start p-0 mt-2">
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

export default Addproduct;
