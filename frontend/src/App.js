import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './sass/main.scss'
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Products />} ></Route>
                <Route exact path='/login' element={<Login />} ></Route>
            </Routes>
        </Router>
    );
}

export default App;
