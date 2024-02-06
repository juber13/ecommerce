import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { PiPants } from "react-icons/pi";

import './track.css'
const Track = () => {
    return (
        <div className='container tracks flex space-around gap'>
            <div className="track">
                <IoBagCheckOutline className='icon bag' />
                <h5>Premium Tshirts</h5>
                <p>Our T-Shirts are 100% made of cotton.</p>
            </div>
            <div className="track">
                <PiPants className='icon rupee' />
                <h5>Premium Pants</h5>
                <p> Our T-Shirts are 100% made of cotton and amazing offers & Pants</p>
            </div>

            <div className="track">
                <CiDeliveryTruck className='icon truck' />
                <h5>Free Shipping</h5>
                <p>We ship all over India for FREE.</p>
            </div>
            <div className="track">
                <HiOutlineCurrencyRupee className='icon rupee' />
                <h5>Exciting Offers</h5>
                <p>We provide amazing offers & discounts</p>
            </div>


        </div>
    )
}

export default Track