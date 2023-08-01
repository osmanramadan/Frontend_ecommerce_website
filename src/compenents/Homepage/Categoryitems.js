import React from 'react';
import Categoryitem from '../utility/Categoryitem';
import img1 from '../../images/labtop.png';
import img2 from '../../images/clothe.png';
import img3 from '../../images/mobile.png';
import img4 from '../../images/item.png';
import img5 from '../../images/mobile1.png';
import img6 from '../../images/pic.png';

function Categoryitems() {
  return (
    <div className="mt-3 d-flex flex-row-reverse justify-content-start flex-wrap">
      <Categoryitem title="لابات" catecolor="#ADBCFA" image={img1} />
      <Categoryitem title="ملابس" catecolor="#F8F0E0" image={img2} />
      <Categoryitem title="اسكسوارات" catecolor="#C7ECF1" image={img3} />
      <Categoryitem title="كهربية" catecolor="#FBEEH3" image={img4} />
      <Categoryitem title="كهربية" catecolor="#FBEEF4" image={img5} />
      <Categoryitem title="تخفيضات" catecolor="#F7EFDF" image={img6} />
    </div>
  );
}

export default Categoryitems;
