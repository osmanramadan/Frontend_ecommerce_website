import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function Customdrop() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('حالة الطلب');

  return (
    <div>
      <div className="order-dropdown">
        <button
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          <Row className="d-flex justify-content-center">
            <Col xs="7" style={{ height: '100%' }} className="text-start">
              {selected}
            </Col>
            <Col
              xs="5"
              style={{ height: '100%' }}
              className="text-start opacity-75"
            >
              <FontAwesomeIcon icon={faCaretUp} flip="vertical" />{' '}
            </Col>
          </Row>
        </button>

        <div
          className="order-dropdown-content"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            حالة الطلب
          </div>

          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            قيد التنفيذ
          </div>

          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            تم الانتهاء
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            الغاء
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customdrop;
