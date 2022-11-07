import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getById, getFive } from '../data/products'
import ProductItem from '../components/ProductItem'

function Product() {

    const product = getById('106')
    const similarProducts = getFive()
    const images = JSON.parse(product.images)

    const [currentImg, setCurrentImg] = useState(images[0])

    const handleHoverIn = (e) => {
        setCurrentImg(e.target.getAttribute('data-src'))
    }

    const handleHoverOut = (e) => {
        setCurrentImg(images[0])
    }

    return (
    <div className="container product">
        <div className="nav">
            <div className="nav__logo">IZI PC</div>
            <div className="nav__side">
                <Link className='cart_count'>Shopping Cart (0)</Link>
                <Link to='/login' className="btn-danger">Logout</Link>
            </div>
        </div>
        <Link className='btn-light product__back' to='/'>Go Back</Link>
        <div className="product__main">
            <div className="product-images">
                <div className="product-images__main">
                    <img src={`/images/${currentImg}`} alt={product.name} />
                </div>
                <div className="product-images__sub-container">
                    {
                        images.slice(1).map(item => (
                            <div className="product-images__sub">
                                <img 
                                    data-src={item}
                                    src={`/images/${item}`} 
                                    alt={product.name} 
                                    onMouseEnter={handleHoverIn}
                                    onMouseLeave={handleHoverOut}
                                />
                            </div>  
                        ))
                    }
                </div>    

            </div>

            <div className="product-description">
                <div className="product-description__nav">
                    <p className='heading-2'>{product.name}</p>
                </div>
                <p className="product-description__main">{product.description}</p>
                <form className="product-description__quantity">
                    <label htmlFor="quantity">₱{product.price}</label>
                    <input type='number' id='quantity' name='quantity' className='input_quantity'/>
                    <input type="submit" value="Buy" className='btn-primary' />
                </form>
            </div>

            <div className="product-similar">
                <div className="product-similar__nav">
                    <p className='heading-2'>Similar Items</p>
                </div>

                <div className="product-similar__main">
                    {
                        similarProducts.map(item => {
                            let images = JSON.parse(item.images);

                            return (
                                <ProductItem 
                                    name={item.name}
                                    price={item.price}
                                    image={images[0]}
                                />
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Product