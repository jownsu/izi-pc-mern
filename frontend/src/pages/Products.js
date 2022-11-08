import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import ProductList from '../components/ProductList'
import { getAll } from '../data/products'
import Nav from '../components/Nav'

function Products() {
    const products = getAll()
    return (
        <div className="container products">
            <Nav />

            <div className="products__main">
                <Category />
                <ProductList data={products} />
            </div>
        </div>
    )
}

export default Products