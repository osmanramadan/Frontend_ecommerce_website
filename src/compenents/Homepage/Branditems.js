import React from 'react';
import Branditem from '../utility/Branditem';
import { Row } from 'react-bootstrap';
import b1 from '../../images/brand1.png';
import b2 from '../../images/brand2.png';
import b3 from '../../images/brand3.png';

function Branditems() {
  return (
    <Row className="flex-row-reverse mb-5 mt-2 gy-3">
      <Branditem image={b1} />
      <Branditem image={b2} />
      <Branditem image={b3} />
      <Branditem image={b3} />
      <Branditem image={b1} />
      <Branditem image={b2} />
    </Row>
  );
}

export default Branditems;
