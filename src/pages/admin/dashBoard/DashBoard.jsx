import React from 'react'
import Layout from '../../../components/layout/Layout'
import { FaRegUser } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";



import './dashboard.css'
const DashBoard = () => {
    return (
        <Layout>
            <div className="container flex gap flex-col">
                <div className="details flex space-between gap">
                    <div className='total-products'>
                        <FaRegUser className='icon' />
                        <h3>Users Details</h3>
                    </div>
                    <div className='total-orders'>
                        <CiDeliveryTruck className='icon' />
                        <h3>Total Orders</h3>
                    </div>
                    <div className='total-users'>
                        <FaRegUser className='icon' />
                        <h3>Total Users</h3>
                    </div>
                    <div className='total-products'>
                        <IoBagCheckOutline className='icon' style={{ fill: "#d81b60" }} />
                        <h3>Total Products</h3>
                    </div>
                </div>

                <div className="tabs flex gap">
                    <div className="users">
                        Users
                    </div>
                    <div className="products">
                        Products
                    </div>
                    <div className="order">
                        Order
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DashBoard