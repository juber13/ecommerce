import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './products.css'
import { GetStateCtx } from '../../context/data/MyState';
import Loader from '../loder/Loader';
import Skeleton from '../skelten/Skeleton';
const ProductCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const { loading } = GetStateCtx();

    const addItem = (item) => {
        const itemFound = data.cart.some(product => product.asin === item.asin);
        if (!itemFound) {
            dispatch(addToCart(item));
        }
    }

    const showDetail = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='container'>
            <div className="heading">
                <h3>Our Latest Products</h3>
            </div>
            {loading && <Skeleton />}
            <div className="cards flex gap">
                {data.filteredProducts.map(item => (
                    <div className="card flex flex-col" key={item.asin}>
                        <img src={item.product_photo} alt="images" onClick={() => showDetail(item.asin)} />
                        <small><strong>{item.category}</strong></small>
                        <small>{item.product_title.slice(0, 10) + "..."}</small>
                        <small>Rs {item.product_price}</small>
                        <small>Rating {item.product_star_rating}</small>
                        <button className='btn add-to-cart-btn' onClick={() => addItem(item)}>
                            {data.cart.some(pro => pro.asin === item.asin) ? "Added" : "Add To Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard