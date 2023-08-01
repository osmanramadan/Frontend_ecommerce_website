import React from 'react';
import Productitem from '../utility/Productitem';
import labtop from '../../images/prod1.png';
import { Row } from 'react-bootstrap';

function Productitems({ margin, prodadmin }) {
  return (
    <div>
      {prodadmin ? (
        <Row
          className={
            margin
              ? 'd-flex flex-row-reverse justify-content-start-0'
              : 'mt-3 d-flex flex-row-reverse justify-content-start-0'
          }
        >
          <Productitem key={Math.random()} admin="yes" image={labtop} />
          <Productitem key={Math.random()} admin="yes" image={labtop} />
          <Productitem key={Math.random()} admin="yes" image={labtop} />
          <Productitem key={Math.random()} admin="yes" image={labtop} />
          <Productitem key={Math.random()} admin="yes" image={labtop} />
          <Productitem key={Math.random()} admin="yes" image={labtop} />
        </Row>
      ) : (
        <Row
          className={
            margin
              ? 'd-flex flex-row-reverse justify-content-start-0'
              : 'mt-3 d-flex flex-row-reverse justify-content-start-0'
          }
        >
          <Productitem key={Math.random()} image={labtop} />
          <Productitem key={Math.random()} image={labtop} />
          <Productitem key={Math.random()} image={labtop} />
          <Productitem key={Math.random()} image={labtop} />
          <Productitem key={Math.random()} image={labtop} />
          <Productitem key={Math.random()} image={labtop} />
        </Row>
      )}
    </div>
  );
}

export default Productitems;
