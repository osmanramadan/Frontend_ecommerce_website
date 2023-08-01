import React from 'react';
import { Container } from 'react-bootstrap';
import Caption from '../compenents/utility/Hometitles';
import Categoryitems from '../compenents/Homepage/Categoryitems';
import Productitems from '../compenents/Homepage/Productitems';
import DiscountBar from '../compenents/Homepage/DiscountBar';
import Branditems from '../compenents/Homepage/Branditems';
import Slider from '../compenents/Homepage/Slider';

function Homepage() {
  return (
    <div>
      <Slider />
      <Container>
        <Caption title="التصنيفات" target="allcategory" />
        <Categoryitems />
        <Caption title="الاكثر مبيعا" target="products" />
        <Productitems />
        <DiscountBar />
        <Caption title="احدث الازياء" target="products" />
        <Productitems />
        <Caption title="اشهر الماركات" target="products" />
        <Branditems />
      </Container>
    </div>
  );
}

export default Homepage;
