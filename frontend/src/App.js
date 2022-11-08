import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './sass/main.scss'
import Login from './pages/Login';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login />} ></Route>
                <Route exact path='/' element={<Products />}></Route>
                <Route exact path='/product' element={<Product />}></Route>
                <Route exact path='/cart' element={<Cart />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
