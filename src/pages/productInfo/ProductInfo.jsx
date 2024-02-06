import React from 'react'
import Layout from '../../components/layout/Layout'
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";


import './ProductInfo.css'

const ProductInfo = () => {
    return (
        <Layout>
            <div className="container product-info flex gap">
                <div className="left-content">
                    <img src="https://qikink.com/wp-content/uploads/2023/06/all-over-print-tshirt-dropshipping-qikink.webp" alt="" />
                </div>
                <div className="right-content flex flex-col around">
                    <div className="title flex gap flex-col">
                        <small>Brand Name</small>
                        <h3>The Catcher in the Ray</h3>
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
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni voluptatem rem neque dignissimos. Suscipit tempora dicta expedita assumenda sit.
                                Lorem ipsum
                            </p>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="price flex flex-col start gap">
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