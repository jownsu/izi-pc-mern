import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

function Category() {
    return (
        <div className="category">
            <div className="category__nav">
                <form action="#">
                    <input type="text" placeholder='Product name' />
                    <button type="submit">
                        <BiSearchAlt />
                    </button>
                </form>
            </div>
            <div className="category__main">
                <p className="category__title">Categories</p>
                <div className="category__list">
                    <a href="#" className="category__name">Keyboard (9)</a>
                    <a href="#" className="category__name">Monitor (5)</a>
                    <a href="#" className="category__name">Motherboard (5)</a>
                    <a href="#" className="category__name">Mouse (5)</a>
                    <a href="#" className="category__name">PC Case (5)</a>
                    <a href="#" className="category__name">Powerbank (5)</a>
                    <a href="#" className="category__name">All Products</a>
                </div>
            </div>

        </div>
    )
}

export default Category