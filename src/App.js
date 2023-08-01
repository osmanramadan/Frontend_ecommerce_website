import React from 'react';
import Homepage from './pages/Homepage';
import Allcategories from './compenents/Categories/Allcategories';
import Allbrands from './compenents/Brands/Allbrands';
import Navbarpage from './compenents/Homepage/Navbar';
import Productsview from './compenents/Products/products';
import Productdetails from './compenents/Products/productdetails';
import Paymethod from './compenents/Order/paymethod';
import Register from './compenents/Login/register';
import Footer from './compenents/Homepage/Footer';
import Cart from './compenents/Cart/Cart';
import Login from './compenents/Login/login';
import Allorders from './compenents/User/allorders';
import Favoriteproducts from './compenents/User/favoriteproducts';
import Profile from './compenents/User/profile';
import Addresses from './compenents/User/addresses';
import AddAddress from './compenents/User/addAddress';
import Allproducts from './compenents/Admin/allproducts';
import Manageorders from './compenents/Admin/manageorders';
import OrderDetails from './compenents/Admin/orderdetails';
import Addbrand from './compenents/Admin/addbrand';
import Addcategory from './compenents/Admin/addcategory';
import Addsubcategory from './compenents/Admin/addsubcategory';
import Addproduct from './compenents/Admin/addproduct';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbarpage />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/allcategory" element={<Allcategories />} />
        <Route path="/allbrands" element={<Allbrands />} />
        <Route path="/products" element={<Productsview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/paymethod" element={<Paymethod />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/allorders" element={<Allorders />} />
        <Route path="/user/favoriteproducts" element={<Favoriteproducts />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/addresses" element={<Addresses />} />
        <Route path="/user/addAddress" element={<AddAddress />} />
        <Route path="/admin/allproducts" element={<Allproducts />} />
        <Route path="/admin/manage-orders" element={<Manageorders />} />
        <Route path="/admin/add-brand" element={<Addbrand />} />
        <Route path="/admin/add-category" element={<Addcategory />} />
        <Route path="/admin/add-subCategory" element={<Addsubcategory />} />
        <Route path="/admin/add-product" element={<Addproduct />} />
        <Route exact path="/products/:id" element={<Productdetails />} />
        <Route exact path="/admin/order/:id" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
