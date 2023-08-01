import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function Subcategorydropdown({ bg }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('التصنيف الاول');

  return (
    <div>
      <div className="subcategory-dropdown">
        <button
          style={{ backgroundColor: bg ? 'white' : '#F9F9F9' }}
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn px-2"
        >
          <Row className="d-flex justify-content-between">
            <Col style={{ height: '100%' }} className="text-end">
              {selected}
            </Col>
            <Col style={{ height: '100%' }} className="text-start opacity-75">
              <FontAwesomeIcon icon={faCaretUp} flip="vertical" />{' '}
            </Col>
          </Row>
        </button>

        <div
          className="subcategory-dropdown-content px-2"
          style={{
            backgroundColor: bg ? 'white' : '#F9F9F9',
            display: isActive ? 'block' : 'none',
          }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            التصنيف الرئيسي
          </div>
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            التصنيف الاول
          </div>

          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            التصنيف التاني
          </div>

          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            التصنيف التالت
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            التصنيف الرابع
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcategorydropdown;
