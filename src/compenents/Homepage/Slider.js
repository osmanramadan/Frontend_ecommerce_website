import Carousel from 'react-bootstrap/Carousel';
import cart1 from '../../images/slider1.png';
import cart2 from '../../images/slider4.png';
import cart3 from '../../images/prod3.png';
import cart4 from '../../images/prod4.png';
import { Col } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div
          style={{ height: '300px', backgroundColor: '#B7C7FF' }}
          className="d-flex flex-row justify-content-center"
        >
          <Col
            xs="4"
            md="4"
            className="d-flex justify-content-end align-items-center"
          >
            <div className="text-center" style={{ color: '#945D70' }}>
              <p>هناك خصم كبير</p>
              <h1>خصم يصل ٥٠٪ عند شرائك </h1>
            </div>
          </Col>

          <Col xs="8" md="4">
            <div
              className="img-container"
              style={{ height: '100%', width: '100%' }}
            >
              <img className="cursor-img" src={cart1} alt="First slide" />
            </div>
          </Col>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div
          style={{ height: '300px', backgroundColor: '#F0DEB0' }}
          className="d-flex flex-row justify-content-center"
        >
          <Col
            xs="4"
            md="4"
            className="d-flex justify-content-end align-items-center"
          >
            <div className="text-center" style={{ color: '#945D70' }}>
              <p>هناك خصم كبير</p>
              <h1>خصم يصل ٥٠٪ عند شرائك </h1>
            </div>
          </Col>

          <Col xs="8" md="4">
            <div
              className="img-container"
              style={{ height: '100%', width: '100%' }}
            >
              <img className="cursor-img" src={cart2} alt="First slide" />
            </div>
          </Col>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div
          style={{ height: '300px', backgroundColor: '#BBCAFF' }}
          className="d-flex flex-row justify-content-center"
        >
          <Col
            xs="4"
            md="4"
            className="d-flex justify-content-end align-items-center"
          >
            <div className="text-center" style={{ color: '#945D70' }}>
              <p>هناك خصم كبير</p>
              <h1>خصم يصل ٥٠٪ عند شرائك </h1>
            </div>
          </Col>

          <Col xs="8" md="4">
            <div
              className="img-container"
              style={{ height: '100%', width: '100%' }}
            >
              <img className="cursor-img" src={cart3} alt="First slide" />
            </div>
          </Col>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div
          style={{ height: '300px', backgroundColor: '#FFDEEC' }}
          className="d-flex flex-row justify-content-center"
        >
          <Col
            xs="4"
            md="4"
            className="d-flex justify-content-end align-items-center"
          >
            <div className="text-center" style={{ color: '#945D70' }}>
              <p>هناك خصم كبير</p>
              <h1>خصم يصل ٥٠٪ عند شرائك </h1>
            </div>
          </Col>

          <Col xs="8" md="4">
            <div
              className="img-container"
              style={{ height: '100%', width: '100%' }}
            >
              <img className="cursor-img" src={cart4} alt="First slide" />
            </div>
          </Col>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
