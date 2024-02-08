import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useSelector } from 'react-redux';

import './cart.css'
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteFromCart, updateQty } from '../../redux/cartSlice';

const Cart = () => {
    const data = useSelector(store => store.data);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);

    const handleUpdateQty = (id, value) => {
        dispatch(updateQty({ id, quentity: Number(value) }));
    };

    useEffect(() => {
        setTotal(data.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quentity, 0))
    }, [data.cart])


    return (
        <Layout>
            <div className="cart-heading">
                <h3>Cart Items {data.cart.length}</h3>
            </div>
            {data.cart.length > 0 ?
                <div className='container cart-container flex space-between start'>

                    <div className="modals flex gap flex-col ">
                        {data.cart.map(item => (
                            <div className='modal flex gap' key={item.id}>
                                <img src={item.image} alt="" />
                                <div className='des'>
                                    <h5>{item.title.slice(0, 5)}</h5>
                                    <p>{item.description}</p>
                                    <div className='flex space-between'>
                                        <div className='flex gap'>
                                            <small>${item.price}</small>
                                            <select name="" id="qty" onChange={(e) => handleUpdateQty(item.id, e.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <IoTrashOutline className='icon trash-icon' onClick={() => dispatch(deleteFromCart(item.id))} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total-content">
                        <div className="prices">
                            <p>Fast Delivery : 200</p>
                            <p>Shipping Price : 300</p>
                        </div>


                        <div className="totol-price flex flex-col gap">
                            <div className="text flex gap">
                                <h4>Total</h4>
                                <small>${Math.floor(total) + 200 + 300}</small>
                            </div>

                            <div className="">
                                <button className='buy-now-btn'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className='flex item-center container justify-center'><h2>No Products Added Yet 🛒</h2></div>}
        </Layout>
    )
}

export default Cart