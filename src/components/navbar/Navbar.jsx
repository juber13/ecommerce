/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CiMenuBurger } from "react-icons/ci";
import { IoSunnyOutline, IoCartOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiCloudMoon } from "react-icons/ci";

import { useSelector , useDispatch } from 'react-redux';
import { setDarkMode } from '../../redux/cartSlice';
import './navbar.css'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const data = useSelector(store => store.data);
    const dispatch = useDispatch();
    console.log(data);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.clear('user');
        navigate('/login');
    }

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        dispatch(setDarkMode(isDarkMode))
    }

    return (
        <header className='flex flex-col'>
            {/* side bar */}
            <div className={`sidebar ${showMenu && 'show'}`}>
                <div className='sidebar-heading flex space-between item-center'>
                    <span>{user && user?.user?.email.slice(0, 8) + '...'}</span>
                    <IoMdCloseCircleOutline className='icon close' onClick={() => setShowMenu(false)} />
                </div>
                <nav className='nav-menu-mobile'>
                    <ul className='flex gap flex-col'>
                        <li><a href="#">All Products</a></li>
                        {user?.user?.email && <li><Link to="/order">Order</Link></li>}
                        {user?.user?.email === "juberk1010@gmail.com" ? <li><Link to="/dashboard">Admin</Link></li> : ""}
                        {user?.user?.email ? <li onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</li> : <li><Link to="/login">Login</Link></li>}
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
                        <h3 className='logo'><Link to="/">E.COM</Link></h3>
                    </div>
                    <div className='center-items flex gap hide item-center'>
                        <ul className='flex gap'>
                            <li onClick={handleDarkMode}><a href="#">{isDarkMode ? <CiCloudMoon className='icon' /> : <IoSunnyOutline className='icon' />}</a></li>
                            <li>
                                <Link to={user?.user?.email ? "/cart" : "/login"}><IoCartOutline className='icon cart' /></Link>
                                {data.cart.length > 0 && <span className='total-cart'>{data.cart.length}</span>}
                            </li>
                        </ul>
                    </div>
                </div>



                <div className={`right-menu`}>
                    <nav>
                        <ul className='flex gap item-center right-menu-items'>
                            <li><a href="#">All Products</a></li>
                            {user?.user?.email && <li><Link to="/order">Order</Link></li>}
                            {user?.user?.email === "juberk1010@gmail.com" ? <li><Link to="/dashboard">Admin</Link></li> : ""}
                            {user?.user?.email ? <li onClick={handleLogout}>Logout</li> : <li><Link to="/login">Login</Link></li>}

                            <li className='flex item-center gap'>
                                <img
                                    src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                                    alt=""
                                    className="block h-auto w-5 flex-shrink-0 flag"
                                />
                                <a href="#">India</a>
                            </li>
                            <li><a href="#"><img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-png" /></a></li>
                            <li onClick={handleDarkMode}><a href="#">{isDarkMode ? <CiCloudMoon className='icon' /> : <IoSunnyOutline className='icon' />}</a></li>
                            <li>
                                <Link to={user?.user?.email ? "/cart" : "/login"}><IoCartOutline className='icon cart' /></Link>
                                {data.cart.length > 0 && <span className='total-cart'>{data.cart.length}</span>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar