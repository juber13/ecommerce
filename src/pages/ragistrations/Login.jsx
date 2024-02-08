import React, { useState } from 'react'
import { IoEyeOffOutline ,IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { GetStateCtx } from '../../context/data/MyState';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firsbase';
import Loader from '../../components/loder/Loader';

const Login = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [data, setData] = useState({ email: "", password: "" })
    const { loading, setLoading } = GetStateCtx();
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "") {
            return toast.error('somthing is missing');
        }

        try {
            setLoading(true);
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
            localStorage.setItem('user', JSON.stringify(user));
            toast.success("Login Succesfully");
            setData({ email: "", password: "" });
            navigate('/');
            setLoading(false);
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
            setLoading(false);
            setData({ email: "", password: "" })
        }


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
            {loading && <Loader />}
            <div className='container form-container flex flex-col gap'>
                <div className='heading'>
                    <h3>Login</h3>
                </div>
                <form className='flex flex-col gap item-center' onSubmit={handleForm}>
                    <div className='form-control flex-col flex'>
                        <label htmlFor="email">Email</label>
                        <input value={data.email} type="text" placeholder='Email' name='email' onChange={handleInputChange} />
                    </div>

                    <div className='form-control flex-col flex'>
                        <label htmlFor="password">Password</label>
                        <input value={data.password} type={isPasswordShow ? "text" : "password"} placeholder='Password' name='password' onChange={handleInputChange} />
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
        </Layout>
    )
}

export default Login