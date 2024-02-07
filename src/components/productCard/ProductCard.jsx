import React from 'react'

import './products.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
const ProductCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    const addItem = (item) => {
        const itemFound = data.cart.some(product => product.id === item.id);
        if (!itemFound) {
            dispatch(addToCart(item));
        }
    }

    const showDetail = (id) => {
        navigate(`/productInfo/${id}`)
    }


    return (
        <div className='container'>
            <div className="heading">
                <h3>Our Latest Products</h3>
            </div>

            <div className="cards flex gap">
                {data.products.map(item => (
                    <div className="card flex flex-col" key={item.id}>
                        {/* <div> */}
                        {/* <Link to={> */}
                        <img src={item.image} alt="images" onClick={() => showDetail(item.id)} />
                        {/* </Link> */}
                        {/* </div> */}
                        <small><strong>{item.category}</strong></small>
                        <small>{item.title.slice(0, 15) + "..."}</small>
                        <small>{item.price}</small>
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