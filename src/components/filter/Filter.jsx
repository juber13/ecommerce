import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { setProducts } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

import { GetStateCtx } from '../../context/data/MyState';
import './filter.css';


const Filter = () => {
    const data = useSelector(store => store.data);
    const dispatch = useDispatch();
    const [setSelectedCategory] = useState('All');
    const [price, setSelectedPrice] = useState(100);

    const { inputValue , setInputValue } = GetStateCtx();

    const filterItem = (e) => {
        setInputValue(e.target.value);
    }


    const showCategoriesWise = (e) => {
        const selectedValue = e.target.value;
        setInputValue(selectedValue);
    };

    return (
        <div className='container'>
            <div className='content flex gap flex-col'>
                <div className='input flex1'>
                    <IoSearchOutline className='icon search' />
                    <input type="text" placeholder='Search Item...' onKeyUp={filterItem} defaultValue={inputValue} />
                </div>

                <div className="options">
                    <div className="heading-filter flex1 space-between">
                        <h5>Filter</h5>
                        <h5 onClick={() => {
                            setSelectedCategory('mens');
                            setSelectedPrice('0 - 100');
                            dispatch(setProducts(data.filteredProducts));
                        }} style={{ cursor: "pointer" }}>Reset Filter</h5>
                    </div>

                    <div className="selects flex gap">
                        <select name="category1" id="option1" className='select-category' onChange={showCategoriesWise} value={inputValue}>
                            <option value="Men's">{"Men's"}</option>
                            <option value="phone">Phone</option>
                            <option value="Womens">Womens</option>
                            <option value="electronic">electronic</option>
                            <option value="jwelery">jwelery</option>
                        </select>

                        <select name="category2" id="option2" className='select-category' onChange={showCategoriesWise} value={price}>
                            <option value={100}>0 - 100</option>
                            <option value={150}>100 - 150</option>
                            <option value={200}>150 - 200</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
