import React from 'react';
import Subtile from '../utility/Subtitle';
import { Container, Row } from 'react-bootstrap';
import PaginationComponent from '../utility/pagination';
import Branditem from '../utility/Branditem';
import b1 from '../../images/brand1.png';
import b2 from '../../images/brand2.png';
import b3 from '../../images/brand3.png';

function Allbrands() {
  return (
    <div style={{ marginTop: '110px' }}>
      <Container>
        <Subtile text="كل الماركات" />

        <Row className=" mb-5 mt-2 gy-3">
          <Branditem image={b1} />
          <Branditem image={b1} />
          <Branditem image={b1} />
          <Branditem image={b2} />
          <Branditem image={b3} />
          <Branditem image={b3} />
          <Branditem image={b3} />
          <Branditem image={b3} />
          <Branditem image={b1} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
          <Branditem image={b2} />
        </Row>

        <div style={{ direction: 'rtl' }}>
          <PaginationComponent pageCount={100} />
        </div>
      </Container>
    </div>
  );
}

export default Allbrands;
