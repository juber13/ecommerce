import React from 'react'
import Layout from '../../components/layout/Layout'
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import { useParams } from 'react-router-dom';


import './ProductInfo.css'
import { useSelector } from 'react-redux';
const ProductInfo = () => {

    const { id } = useParams();
    console.log(id)
    const data = useSelector(store => store.data);
    console.log(data.products)
    const item = data.products.find(item => item.id === Number(id));
    console.log(item);


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
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalfOutline />
                                {" "}
                                <small>4 Reviews</small>
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
                            <h4>Price 245$.00</h4>
                            <button className='btn add-to-cart-btn'>Add To Cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default ProductInfo