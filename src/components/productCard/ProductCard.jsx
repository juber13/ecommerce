import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { IoStar, IoStarHalfOutline } from "react-icons/io5";

import './products.css'
import { GetStateCtx } from '../../context/data/MyState';
import Skeleton from '../skelten/Skeleton';

const ProductCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const { loading } = GetStateCtx();

    const addItem = (item) => {
        const itemFound = data.cart.some(product => product.id === item.id);
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
                    <div className="card flex flex-col" key={item.id}>
                        <img src={item.image} alt="images" onClick={() => showDetail(item.id)} />
                        <small><strong>{item.category}</strong></small>
                        <small>{item.title.slice(0, 10) + "..."}</small>
                        <small>Rs {item.price}</small>
                        <span>
                            {Array.from({ length: Number(item.rating.rate)}).map((_, i) => <IoStar key={i} style={{ fill: "orange" }} />)}
                            {" "}
                            <small>{item.rating.rate}</small>
                        </span>
                        <button className='btn add-to-cart-btn' onClick={() => addItem(item)}>
                            {data.cart.some(pro => pro.id === item.id) ? "Added" : "Add To Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard