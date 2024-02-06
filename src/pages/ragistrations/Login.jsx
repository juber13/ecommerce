import React, { useState } from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Login = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [data, setData] = useState({ email: "", password: "" })

    const handleForm = (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "") {
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
        <div className='container form-container flex flex-col gap'>
            <div className='heading'>
                <h3>Login</h3>
            </div>
            <form className='flex flex-col gap item-center' onSubmit={handleForm}>
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

                <div className='form-control flex  item-center space-between'>
                    <input type="submit" value={"Login"} />
                    {" "}
                    <small className='link'><Link to="/signup">New user Sign Up</Link></small>
                </div>
            </form>
        </div>
    )
}

export default Login