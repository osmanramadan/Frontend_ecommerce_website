import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex align-items-center"
            style={{ height: '50px' }}
          >
            <div className="footer-cols">
              <a className="link-reset mx-1" href="/">
                الشروط والاحكام{' '}
              </a>
              <a className="link-reset mx-1" href="/">
                {' '}
                سياسه الخصوصيه{' '}
              </a>
              <a className="link-reset mx-1" href="/">
                {' '}
                اتصل بنا{' '}
              </a>
            </div>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex justify-content-end align-items-center"
            style={{ height: '50px' }}
          >
            <div>
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: '#9C9C9C', fontSize: '13px' }}
                />
              </span>
              <span
                style={{
                  color: '#9C9C9C',
                  marginRight: '4px',
                  fontSize: '13px',
                }}
              >
                01023997886
              </span>
            </div>
            <div style={{ marginRight: '10px' }}>
              <span className="mx-1">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: '#9C9C9C' }}
                />
              </span>
              <span className="mx-1">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: '#9C9C9C' }}
                />
              </span>
              <span className="mx-1">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: '#9C9C9C' }}
                />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
