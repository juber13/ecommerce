import React from 'react'

import './products.css'
const ProductCard = () => {
    return (
        <div className='container'>
            <div className="heading">
                <h3>Our Latest Products</h3>
            </div>

            <div className="cards flex gap">
                <div className="card flex flex-col">
                    <img src="https://m.media-amazon.com/images/I/71V5gEc8YVL._SY879_.jpg" alt="" />
                    <br />
                    <small>E-Bahart</small>
                    <small><strong>Shirt</strong></small>
                    <small>Price 400rs</small>
                    <button className='btn add-to-cart-btn'>Add To Cart</button>
                </div>

                <div className="card flex flex-col ">
                    <img src="https://m.media-amazon.com/images/I/71V5gEc8YVL._SY879_.jpg" alt="" />
                    <br />
                    <small>E-Bahart</small>
                    <small><strong>Shirt</strong></small>
                    <small>Price 400rs</small>
                    <button className='btn add-to-cart-btn'>Add To Cart</button>
                </div>

                <div className="card flex flex-col ">
                    <img src="https://m.media-amazon.com/images/I/71V5gEc8YVL._SY879_.jpg" alt="" />
                    <br />
                    <small>E-Bahart</small>
                    <small><strong>Shirt</strong></small>
                    <small>Price 400rs</small>
                    <button className='btn add-to-cart-btn'>Add To Cart</button>
                </div>

                <div className="card flex flex-col ">
                    <img src="https://m.media-amazon.com/images/I/71V5gEc8YVL._SY879_.jpg" alt="" />
                    <br />
                    <small>E-Bahart</small>
                    <small><strong>Shirt</strong></small>
                    <small>Price 400rs</small>
                    <button className='btn add-to-cart-btn'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard