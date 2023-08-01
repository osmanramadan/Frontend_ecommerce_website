import React from 'react';
import { Link } from 'react-router-dom';

function Usertabs() {
  return (
    <div className="d-flex flex-column user-left-tabs pt-3">
      <Link to="/user/allorders" className="link">
        <div className="user-tab-item border-bottom">اداره الطلبات</div>
      </Link>
      <Link to="/user/favoriteproducts" className="link">
        <div className="user-tab-item border-bottom">المنتجات المفضلة</div>
      </Link>
      <Link to="/user/addresses" className="link">
        <div className="user-tab-item border-bottom">العناوين الشخصية</div>
      </Link>
      <Link to="/user/profile" className="link">
        <div className="user-tab-item border-bottom">الملف الشخصي</div>
      </Link>
    </div>
  );
}

export default Usertabs;
