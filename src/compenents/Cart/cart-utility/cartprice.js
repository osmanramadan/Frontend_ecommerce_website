import React from 'react';
import { Link } from 'react-router-dom';
function Cartprice() {
  return (
    <div>
      <div class="input-group w-auto mt-3">
        <input
          type="text"
          class="form-control discount-input"
          placeholder="كود الخصم"
        />
        <button class="btn-discount-code" type="button">
          تطبيق
        </button>
      </div>

      <div className="form-control form-control-price text-center mt-3 ">
        <span className="fs-7 fw-medium"> 34000</span> <span>جنية</span>
      </div>
      <Link to="/order/paymethod" className="link">
        <button
          class="form-control form-control-price mt-3  my-0"
          style={{
            backgroundColor: '#272727',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          اتمام الشراء
        </button>
      </Link>
    </div>
  );
}

export default Cartprice;
