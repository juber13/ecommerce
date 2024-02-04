import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import './filter.css'
const Filter = () => {
    return (
        <div className='container'>
            <div className='content flex gap flex-col'>
                <div className='input flex1'>
                    <IoSearchOutline className='icon search' />
                    <input type="text" placeholder='Search Item...' />
                </div>

                <div className="options">
                    <div className="heading flex1 space-between">
                        <h5>Filter</h5>
                        <h5>Reset Filter</h5>
                    </div>

                    <div className="selects flex gap">
                        <select name="category1" id="option1" className='select-category'>
                            <option value="name">name</option>
                            <option value="name">name</option>
                            <option value="name">name</option>
                            <option value="name">name</option>
                            <option value="name">name</option>
                        </select>

                        <select name="category2" id="option2" className='select-category'>
                            <option value="Shirt">name</option>
                            <option value="Shirt">name</option>
                            <option value="Shirt">name</option>
                            <option value="Shirt">name</option>
                            <option value="Shirt">name</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter