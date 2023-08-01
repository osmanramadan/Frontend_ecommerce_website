import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

function Register() {
  return (
    <div className="Registerpage">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="7" md="7" lg="4">
            <div className="login-register d-flex flex-column">
              <span className="text-center opacity-75">تسجيل حساب جديد</span>
              <input
                type="text"
                placeholder="اسم المستخدم..."
                name="username"
                className="inputfield"
              />
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
              <button class="btn-login mt-3 mx-2">تسجيل الحساب</button>
              <div className="text-center mt-4 login-switch">
                لديك حساب بالفعل؟
                <a className="link" style={{ color: 'red' }} href="/login">
                  {' '}
                  اضغط هنا{' '}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
