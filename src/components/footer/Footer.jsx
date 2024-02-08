import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="top-footer flex around">
                <div className="category">
                    <ul>
                        <li><a href="#" className='first-child'>Category</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Local For Vocal</a></li>
                    </ul>

                </div>
                <div className="customer-service">
                    <ul className=''>
                        <li><a href="#" className='first-child'>Customer Service</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="Services">
                    <ul>
                        <li><a href="#" className='first-child'>Services</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="image-contains">
                    <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" className='bottom-image' />
                </div>

            </div>
        </div>
    )
}

export default Footer