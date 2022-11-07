import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
    const {name, price, image, } = props


    return (
        <Link className="product_item" to='/product'>
            <div className='product_item__img'>
                <img src={'/images/'+image} alt={name} />
            </div>
            <p className='product_item__price'>₱{price}</p>
            <p className="product_item__name">{name}</p>
        </Link>
    )
}

export default ProductItem