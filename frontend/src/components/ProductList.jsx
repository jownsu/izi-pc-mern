import React from 'react'
import ProductItem from './ProductItem'
import Pagination from './Pagination'

function ProductList({data}) {

    return (
        <div className="product_list">
            <div className="product_list__nav">
                <p className='heading-2'>All Products (page 1)</p>
                <div className="product_list__links">
                    <a href="/">First</a>
                    <a href="/">Prev</a>
                    <p>1</p>
                    <a href="/">Next</a>
                </div> 
            </div>
            <div className="product_list__filter">
                <label htmlFor="price">Sorted by: </label>
                <select name="price" id="price">
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
            <div className="product_list__main">
                <div className="product_list__item">
                    {
                        data.map(item => {
                        let images = JSON.parse(item.images);

                        return <ProductItem 
                                    name={item.name}
                                    price={item.price}
                                    image={images[0]}
                                />
                        })
                    }
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default ProductList