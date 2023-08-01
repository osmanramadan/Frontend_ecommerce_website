import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Productnavbar from './products-utility/navbar';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import l1 from '../../images/mobile1.png';
import l2 from '../../images/mobile2.png';
import l3 from '../../images/mobile.png';
import Productrating from './products-utility/productrating';
import Productusercomment from './products-utility/product-user-comment';
import PaginationComponent from '../utility/pagination';
import Caption from '../utility/Hometitles';
import Productitems from '../Homepage/Productitems';
import Textarea from '../utility/Textarea';

function Productdetails() {
  return (
    <div style={{ marginTop: '87px', backgroundColor: '#F9F9F9' }}>
      <Productnavbar />
      <Container className="mt-3">
        <Row className="d-flex flex-row-reverse mx-3">
          <Col xs="10" sm="8" md="6" lg="4" className="product-carousel">
            <Carousel className="mt-0">
              <Carousel.Item style={{ height: '450px' }}>
                <div className="d-flex flex-row justify-content-center">
                  <img
                    style={{ height: '300px', width: '315px' }}
                    src={l1}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item style={{ height: '450px' }}>
                <div className="d-flex flex-row justify-content-center">
                  <img
                    style={{ height: '300px', width: '315px' }}
                    src={l2}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item style={{ height: '450px' }}>
                <div className="d-flex flex-row justify-content-center">
                  <img
                    style={{ height: '450px', width: '295px' }}
                    src={l3}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs="12" sm="12" md="12" lg="8" className="text-end">
            <div className="d-flex flex-column mt-2 mx-5">
              <h4 className="details-product-title">الالكترونيات :</h4>
              <p className="details-product-p1">
                آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
                تايم <br />
                (برودكت) أحمر{' '}
                <span style={{ color: '#FEC107', marginRight: '10px' }}>
                  4.5
                </span>
              </p>
              {/* *********** */}

              <p className="mb-0">
                <span className="mt-3 fs-3">سامسنوج</span>
                <h4 className="details-product-title mt-2 d-inline-block">
                  الماركة :
                </h4>
              </p>

              <div className="circle-row">
                <div className="circle-detail circle-red"></div>
                <div className="circle-detail circle-green"></div>
                <div className="circle-detail circle-blue"></div>
              </div>

              <h4 className="details-product-title mt-4">المواصفات :</h4>
              <p className="details-product-p2">
                يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح
                قفل هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها
                بسهولة، وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة
                عن طريق بصمة الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى
                شريحة في الهواتف الذكية شكلت أكثر كاميرات العالم شهرة عصراً
                جديداً من التصوير الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري
                بخاصية ISP والمحرك العصبي، ما يمكّنك من التقاط صور لم يسبق لها
                مثيل كاميرا بعدسة واحدة تجعل الأشخاص الموجودين في الأمام في نطاق
                تركيز دقيق على عكس نطاق الخلفية غير الواضح نظرة عامة
              </p>

              <div className="d-flex flex-row">
                <Col>
                  <button className="element-button">اضف للعربة</button>
                </Col>
                <Col xs="auto" className="element-price">
                  <span className="mx-1">جنية </span> 34000
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          backgroundColor: 'white',
          marginTop: '20px',
          direction: 'rtl',
          borderRadius: '10px',
          marginRight: '100px',
        }}
      >
        <Row>
          <Col>
            <span style={{ fontSize: '26px', fontWeight: '600' }}>
              التقيمات
            </span>
            <span style={{ color: '#F6B805', marginRight: '5px' }}>
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: '18px', width: '18px' }}
              />{' '}
              4.5
            </span>
            <span style={{ opacity: '0.7', fontSize: '14px' }}>
              {' '}
              (160 تقييم)
            </span>
          </Col>
        </Row>

        <Row className="mx-4 mt-3">
          <Col xs="auto" className="fs-5">
            علي محمد
          </Col>
          <Col>
            <Productrating />
          </Col>
          <Col xs="12">
            <Textarea txt="اكتب تعليقك...." rows="2" />
          </Col>
          <Col className="text-start border-bottom">
            <button className="element-button my-1">اضف تعليق</button>
          </Col>
        </Row>
        <Row className="comments">
          <Productusercomment />
          <Productusercomment />
          <Productusercomment />
          <Productusercomment />
        </Row>
        <div>
          <PaginationComponent pageCount={100} />
        </div>
      </Container>
      <Container style={{ direction: 'rtl' }}>
        <Caption title="منتجات قد تعجبك" />
        <Productitems margin="0" />
      </Container>
    </div>
  );
}

export default Productdetails;
