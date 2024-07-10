import React, { useEffect, useState } from 'react'


import './testimonial.css'
const Testimonial = () => {
    const [users, setUsers] = useState([]);

    const url = 'https://real-time-amazon-data.p.rapidapi.com/product-reviews?asin=B07ZPKN6YR&country=US&sort_by=TOP_REVIEWS&star_rating=ALL&verified_purchases_only=false&images_or_videos_only=false&current_format_only=false&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '36b9e1bcf6msh63a24f23f73d26cp1a69bejsn5858a2fe667b',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };


    const getUsers = async () => {
        const res = await fetch(url, options);
        const data = await res.json();
        setUsers(data.data.reviews.slice(7, 10));
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
                {users.length > 0 ? users.map((user, index) => (
                    <div className="testimonial flex flex-col" key={index}>
                        <img src={user.review_author_avatar} alt="user-image" />
                        <p>{user.review_comment.substring(0, 200)}</p>
                        {/* <strong>{user.}</strong> */}
                        {/* <small>{user.email}</small> */}
                        <small>Senior Product Developer {index + 1}</small>
                    </div>
                )) : <div className='testimonials flex gap  '>
                    <img style={{ width: "60px", height: "60px", borderRadius: "50%" }} src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-image" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem amet eos aut modi ullam a. Commodi totam rerum quo assumenda?</p>
                    {/* <strong>{user.}</strong> */}
                    {/* <small>{user.email}</small> */}
                    <small>Senior Product Developer </small>
                </div>}
            </div>
        </div>
    )
}

export default Testimonial