import React from 'react'

function ProductItem(props) {
    const {name, price, image, } = props


    return (
        <div className="product_item">
            <div className='product_item__img'>
                <img src={'/images/'+image} alt={name} />
            </div>
            <p className='product_item__price'>₱{price}</p>
            <p className="product_item__name">{name}</p>
        </div>
    )
}

export default ProductItem