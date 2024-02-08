import React, { useState } from 'react'
import './resgistration.css'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';


import { GetStateCtx } from '../../context/data/MyState';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDb } from '../../firebase/firsbase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loder/Loader';

const SignUp = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [data, setData] = useState({ name: "", email: "", password: "" })
    const { loading, setLoading } = GetStateCtx();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleForm = async (e) => {
        e.preventDefault();
        if (data.name === "" || data.email === "" || data.password === "") {
            return toast.error("All Fields Are Required");
        }

        try {
            setLoading(true);
            const users = await createUserWithEmailAndPassword(auth, data.email, data.password);
            var user = {
                name: data.name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            }

            const userRef = collection(fireDb, "user");
            await addDoc(userRef, user);
            toast.success("SignUp Successfully");
            setData({ name: "", email: "", password: "" });
            setLoading(false);
            navigate('/login');

        } catch (err) {
            // console.log(err.message);
            setData({ name: "", email: "", password: "" });
            toast.error(err.message);
            setLoading(false);
        }
    }



    return (
        <Layout>
            {loading && <Loader />}
            <div className='container form-container flex flex-col gap'>
                <div className='heading'>
                    <h3>Sign Up</h3>
                </div>
                <form className='flex flex-col gap item-center' onSubmit={handleForm}>
                    <div className='form-control flex-col flex'>
                        <label htmlFor="name">Name</label>
                        <input value={data.name} type="text" placeholder='Name' name='name' onChange={handleInputChange} />
                    </div>

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