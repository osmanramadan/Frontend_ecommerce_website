import React from 'react';
import Subtile from '../utility/Subtitle';
import { Container } from 'react-bootstrap';
import Categoryitem from '../utility/Categoryitem';
import PaginationComponent from '../utility/pagination';
import img1 from '../../images/labtop.png';
import img2 from '../../images/clothe.png';
import img3 from '../../images/mobile.png';
import img4 from '../../images/item.png';

function Allcategories() {
  return (
    <div style={{ marginTop: '110px' }}>
      <Container>
        <Subtile text="كل التصنيفات" />

        <div className="mt-3 d-flex flex-row-reverse justify-content-start flex-wrap">
          <Categoryitem title="لابات" catecolor="#ADBCFA" image={img1} />
          <Categoryitem title="لابات" catecolor="#ADBCFA" image={img1} />
          <Categoryitem title="لابات" catecolor="#ADBCFA" image={img1} />
          <Categoryitem title="ملابس" catecolor="#F8F0E0" image={img2} />
          <Categoryitem title="ملابس" catecolor="#F8F0E0" image={img2} />
          <Categoryitem title="ملابس" catecolor="#F8F0E0" image={img2} />
          <Categoryitem title="ملابس" catecolor="#F8F0E0" image={img2} />
          <Categoryitem title="اسكسوارات" catecolor="#C7ECF1" image={img3} />
          <Categoryitem title="اسكسوارات" catecolor="#C7ECF1" image={img3} />
          <Categoryitem title="اسكسوارات" catecolor="#C7ECF1" image={img3} />
          <Categoryitem title="كهربية" catecolor="#FBEEH3" image={img4} />
          <Categoryitem title="كهربية" catecolor="#FBEEH3" image={img4} />
        </div>
        <div style={{ direction: 'rtl' }}>
          <PaginationComponent pageCount={100} />
        </div>
      </Container>
    </div>
  );
}

export default Allcategories;
