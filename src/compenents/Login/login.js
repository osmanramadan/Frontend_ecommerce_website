import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useGetData } from '../../crud/useGetData';
import { useEffect } from 'react';

function Login() {
  return (
    <div className="Loginpage">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="7" md="7" lg="4">
            <div className="login-register d-flex flex-column">
              <span className="text-center opacity-75">تسجيل الدخول</span>
              <input
                type="text"
                placeholder="الايميل..."
                name="email"
                className="inputfield"
              />
              <input
                type="text"
                placeholder="كلمة السر..."
                name="password"
                className="inputfield"
              />
              <button class="btn-login mt-3 mx-2">تسجيل الدخول</button>
              <div className="text-center mt-4 login-switch">
                ليس لديك حساب ؟
                <a
                  className="link"
                  style={{ color: '#ed1d0e' }}
                  href="/register"
                >
                  {' '}
                  اضغط هنا{' '}
                </a>
              </div>
            </div>
          </Col>
          <Row className="login-switch opacity-75" style={{ color: '#ed1d0e' }}>
            <Col xs="auto">
              <a className="link" href="/admin/allproducts">
                الدخول ادمن
              </a>
            </Col>
            <Col>
              <a className="link" href="/user/allorders">
                الدخول مستخدم
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
