import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import login from '../../images/login.png';
import cart from '../../images/cart.png';

function Navbarpage() {
  return (
    <Navbar className="navbar py-2" position="top" expand="sm">
      <Container className="flex-row-reverse">
        <a href="/">
          <img
            className="m-2"
            style={{ height: '40px', width: '50px' }}
            alt="osman"
            src={logo}
          />
        </a>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex-row-reverse">
          <Form className="flex-fill mx-sm-2 my-3">
            <Form.Control
              style={{ height: '40px', textIndent: '50%' }}
              type="search"
              placeholder="ابحث"
              className="flex-fill mx-sm-2 me-2"
              aria-label="Search"
            />
          </Form>
          <Row className="d-flex align-content-center ">
            <Col xs="12" sm="6" className="d-flex justify-content-center my-3">
              <Link className="link mx-1" to="/cart">
                <div className="d-flex flex-row">
                  <span>العربة</span>
                  <img className="lg-cart mx-1" alt="cart" src={cart} />
                </div>
              </Link>
            </Col>
            <Col xs="12" sm="6" className="d-flex justify-content-center my-3">
              <Link className="link mx-1" to="/login">
                <div className="d-flex flex-row">
                  <span> دخول </span>
                  <img className="lg-login mx-1" alt="login" src={login} />
                </div>
              </Link>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarpage;
