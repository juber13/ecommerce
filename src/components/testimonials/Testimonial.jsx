import React from 'react'

import './testimonial.css'
const Testimonial = () => {
    return (
        <div className='container'>
            <div className="heading flex flex-col testimonial-heading">
                <h3>What out Customer is saying</h3>
                <hr />
            </div>

            <div className='testimonials flex gap'>
                <div className="testimonial flex flex-col">
                    <img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-image" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi possimus, eligendi facilis sunt quisquam ab earum quaerat. Illum ratione officia non? Harum ab tempore quia?</p>
                    <strong>Kamal Upadhay</strong>
                    <small>Senior Product Deveoper</small>
                </div>

                <div className="testimonial flex flex-col">
                    <img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-image" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati asperiores dolor, distinctio voluptatibus provident omnis dolore eaque recusandae animi officiis..</p>
                    <strong>Kamal Upadhay</strong>
                    <small>web Deveoper</small>
                </div>

                <div className="testimonial flex flex-col">
                    <img src="https://avatars.githubusercontent.com/u/34296950?v=4" alt="user-image" />
                    <p> temporibus similique nostrum aliquid saepe. Deserunt consequatur doloribus explicabo a eaque quaerat minima itaque harum nulla nostrum beatae quo laborum, eos voluptate.</p>
                    <strong>Kamal Upadhay</strong>
                    <small>Web Designer</small>
                </div>
            </div>
        </div>
    )
}

export default Testimonial