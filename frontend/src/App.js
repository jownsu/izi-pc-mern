import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './sass/main.scss'
import Login from './pages/Login';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import AdminLogin from './pages/AdminLogin';
import Orders from './pages/Orders';
import AdminProducts from './pages/AdminProducts';
import Order from './pages/Order';
import Success from './pages/Success';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login />} ></Route>
                <Route exact path='/' element={<Products />}></Route>
                <Route exact path='/product' element={<Product />}></Route>
                <Route exact path='/cart' element={<Cart />}></Route>
                <Route exact path='/admin_login' element={<AdminLogin />}></Route>
                <Route exact path='/orders' element={<Orders />}></Route>
                <Route exact path='/order/:id' element={<Order />}></Route>
                <Route exact path='/dashboard/products' element={<AdminProducts />}></Route>
                <Route exact path='/order/success' element={<Success />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
