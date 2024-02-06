import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { BsFillCloudSunFill } from 'react-icons/bs'
// import { FiSun } from 'react-icons/fi'

import { CiMenuBurger } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";


import { IoMdCloseCircleOutline } from "react-icons/io";




import './navbar.css'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='flex flex-col'>
            {/* side bar */}
            <div className={`sidebar ${showMenu && 'show'}`}>
                <div className='sidebar-heading flex space-between item-center'>
                    <span>E-Bahrat</span>
                    <IoMdCloseCircleOutline className='icon close' onClick={() => setShowMenu(false)} />
                </div>
                <nav className='nav-menu-mobile'>
                    <ul className='flex gap flex-col'>
                        <li><a href="#">All Products</a></li>
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="#">Admin</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <hr />
                        <li><a href="#"><img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-png" /></a></li>
                    </ul>
                </nav>
            </div>
            {/* end side bar */}
            <div className="top-nav">
                <p> Get free delivery on orders over ₹300</p>
            </div>

            <div className="bottom-nav flex space-between item-center">
                <div className="left-menu flex item-center gap">
                    <div className='flex item-center gap'>
                        <CiMenuBurger className='icon active menu' onClick={() => setShowMenu(!showMenu)} />
                        <h3><Link to="/">E-Bharat</Link></h3>
                    </div>
                    <div className='center-items flex gap hide item-center'>
                        <IoSunnyOutline className='icon' />
                        <Link to="/cart"><IoCartOutline className='icon' /></Link>
                        <span>0</span>
                    </div>
                </div>



                <div className={`right-menu`}>
                    <nav>
                        <ul className='flex gap item-center right-menu-items'>
                            <li><a href="#">All Products</a></li>
                            <li><Link to="/order">Order</Link></li>
                            <li><a href="#">Admin</a></li>
                            <li><Link to="/login">Login</Link></li>
                            <li className='flex item-center gap'>
                                <img
                                    src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                                    alt=""
                                    className="block h-auto w-5 flex-shrink-0 flag"
                                />
                                <a href="#">India</a>
                            </li>
                            <li><a href="#"><img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-png" /></a></li>
                            <li><a href="#"><IoSunnyOutline className='icon' /></a></li>
                            <li><Link to="/cart"><IoCartOutline className='icon' /></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar