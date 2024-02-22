import React from 'react'
import Layout from '../../components/layout/Layout'
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './ProductInfo.css'
import { useDispatch } from 'react-redux';
const ProductInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    const data = useSelector(store => store.data);
    const item = data.filteredProducts.find(item => item.id === Number(id));

    const addItem = (item) => {
        const itemFound = data.cart.some(product => product.id === item.id);
        if (!itemFound) {
            dispatch(addToCart(item));
        }
    }


    console.log(item)

    return (
        <Layout>
            <div className="container product-info flex gap">
                <div className="left-content">
                    <img src={item?.image} alt="title-here" />
                </div>
                <div className="right-content flex flex-col">
                    <div className="title flex flex-col">
                        <small>Brand Name</small>
                        <h3>{item?.title}</h3>
                        <div className="reviews flex gap">
                            <div className="ratings">
                                <span>
                                    {Array.from({ length: Number(item.rating.rate) }).map((_, i) => <IoStar key={i} style={{ fill: "orange" }} />)}
                                    {" "}
                                    <small>{item.rating.rate}</small>
                                </span>
                            </div>

                            <div className="social-media-icons flex gap item-center">
                                <FaFacebookSquare style={{ fill: "#316FF6" }} className='icon' />
                                <FaTwitter className='icon' style={{ fill: "#1DA1F2" }} />
                                <FaYoutube className='icon' style={{ fill: "#FF0000" }} />
                            </div>

                        </div>

                        <div className="desciptions">
                            <p>
                                {item?.description}
                            </p>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="price flex flex-col gap">
                            <h4>Price :{item?.price}</h4>
                            <button className='btn add-to-cart-btn' onClick={() => addItem(item)}>
                                {data.cart.some(pro => pro.id === item.id) ? "Added" : "Add To Cart"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default ProductInfo