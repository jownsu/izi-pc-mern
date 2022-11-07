import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import ProductList from '../components/ProductList'
import { getAll } from '../data/products'

function Products() {
    const products = getAll()
    return (
        <div className="container products">
            <div className="nav">
                <div className="nav__logo">IZI PC</div>
                <div className="nav__side">
                    <Link className='cart_count'>Shopping Cart (0)</Link>
                    <Link to='/login' className="btn-danger">Logout</Link>
                </div>
            </div>

            <div className="products__main">
                <Category />
                <ProductList data={products} />
            </div>
        </div>
    )
}

export default Products