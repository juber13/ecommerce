import React from 'react'
import Layout from '../../components/layout/Layout'

import './cart.css'
const Cart = () => {
    return (
        <Layout>
            <div className="cart-heading">
                Cart Items
            </div>
            <div className='container cart-container flex space-between start'>

                <div className="modals flex gap flex-col ">
                    <div className='modal flex gap'>
                        <img src="https://qikink.com/wp-content/uploads/2023/06/all-over-print-tshirt-dropshipping-qikink.webp" alt="" />
                        <div className='des'>
                            <h5>Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet.</p>
                            <small>$500</small>
                        </div>
                    </div>
                    <div className='modal flex gap'>
                        <img src="https://qikink.com/wp-content/uploads/2023/06/all-over-print-tshirt-dropshipping-qikink.webp" alt="" />
                        <div className='des'>
                            <h5>Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet.</p>
                            <small>$500</small>
                        </div>
                    </div>
                    <div className='modal flex gap'>
                        <img src="https://qikink.com/wp-content/uploads/2023/06/all-over-print-tshirt-dropshipping-qikink.webp" alt="" />
                        <div className='des'>
                            <h5>Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet.</p>
                            <small>$500</small>
                        </div>
                    </div>
                </div>

                <div className="total-content">
                    <div className="prices">
                        <p>Subtotal</p>
                        <p>Shipping Price</p>
                    </div>


                    <div className="totol-price flex flex-col gap">
                        <div className="text flex gap">
                            <h4>Total</h4>
                            <small>$500</small>
                        </div>

                        <div className="">
                            <button className='buy-now-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart