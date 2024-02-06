import React, { useState } from 'react'
import './resgistration.css'
// import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';






const SignUp = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isPasswordConfirmShow, setIsPasswordConfirmShow] = useState(false);
    const [data, setData] = useState({ name: "", email: "", password: "", confrimPassword: "" })

    const handleForm = (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "" || data.password === "" || data.confrimPassword === "") {
            alert('somthing is missing');
            return;
        }
        console.log(data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <Layout>
            <div className='container form-container flex flex-col gap'>
                <div className='heading'>
                    <h3>Sign Up</h3>
                </div>
                <form className='flex flex-col gap item-center' onSubmit={handleForm}>
                    <div className='form-control flex-col flex'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Name' name='name' onChange={handleInputChange} />
                    </div>

                    <div className='form-control flex-col flex'>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='Email' name='email' onChange={handleInputChange} />
                    </div>

                    <div className='form-control flex-col flex'>
                        <label htmlFor="password">Password</label>
                        <input type={isPasswordShow ? "text" : "password"} placeholder='Password' name='password' onChange={handleInputChange} />
                        <span className='eye-icon'
                            onClick={() => setIsPasswordShow(!isPasswordShow)}>
                            {isPasswordShow ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                        </span>
                    </div>

                    <div className='form-control flex-col flex'>
                        <label htmlFor="confrim-password">Confirm Password</label>
                        <input type={isPasswordConfirmShow ? "text" : "password"} placeholder='Confirm Password' name='confrim-password' onChange={handleInputChange} />
                        <span className='confirm-eye-icon'
                            onClick={() => setIsPasswordConfirmShow(!isPasswordConfirmShow)}>
                            {isPasswordConfirmShow ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
                        </span>
                    </div>

                    <div className='form-control flex  item-center space-between'>
                        <input type="submit" value={"Sing Up"} />
                        {" "}
                        <small className='link'><Link to="/login">Already A user Login</Link></small>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default SignUp