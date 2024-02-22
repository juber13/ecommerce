import React, { useEffect, useState } from 'react'

import './testimonial.css'
const Testimonial = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await res.json();
        setUsers(data.slice(0, 3));

    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='container'>
            <div className="heading flex flex-col testimonial-heading">
                <h3>What Our Customers Is Saying</h3>
                <hr />
            </div>

            <div className='testimonials flex gap'>
                {users.map((user, index) => (
                    <div className="testimonial flex flex-col" key={index}>
                        <img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-image" />
                        <p>{user.body}</p>
                        <strong>{user.name}</strong>
                        <small>{user.email}</small>
                        <small>Senior Product Developer</small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial