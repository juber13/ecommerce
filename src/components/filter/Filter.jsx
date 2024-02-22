import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { setProducts, setFilteredProducts } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import './filter.css';


const Filter = () => {
    const data = useSelector(store => store.data);
    const [category, setCategory] = useState([])
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [price, setPrice] = useState(100);
    const [val, setValue] = useState("");


    const filterItem = (e) => {
        let value = e.target.value;
        setValue(value);
        if (value.length > 0) {
            const newItem = data.products.filter(item => item.title.toLowerCase().includes(value));
            dispatch(setFilteredProducts(newItem));
        } else {
            dispatch(setFilteredProducts(data.products));
        }
    }

    const showCategoriesWise = (e) => {
        const selectedValue = e.target.value;
        if (isNaN(selectedValue)) {
            setSelectedCategory(selectedValue);
        } else {
            setPrice(e.target.value);
        }
        if (selectedValue === "All") {
            dispatch(setFilteredProducts(data.products));
        } else {
            const filterData = data.products.filter(product => product.category === selectedValue || product.price <= selectedValue);
            dispatch(setFilteredProducts(filterData));
        }
    };

    useEffect(() => {
        setCategory(["All", ...new Set(data.filteredProducts.map(item => item.category))])
    }, [data.products])

    return (
        <div className='container'>
            <div className='content flex gap flex-col'>
                <div className='input flex1'>
                    <IoSearchOutline className='icon search' />
                    <input type="text" placeholder='Search Item...' onKeyUp={filterItem} defaultValue={val} />
                </div>

                <div className="options">
                    <div className="heading-filter flex1 space-between">
                        <h5>Filter</h5>
                        <h5 onClick={() => {
                            setSelectedCategory('All');
                            setPrice('0 - 100');
                            setValue("");
                            dispatch(setFilteredProducts(data.products));
                        }} style={{ cursor: "pointer" }}>Reset Filter</h5>
                    </div>

                    <div className="selects flex gap">
                        <select name="category1" id="option1" className='select-category' onChange={showCategoriesWise} value={selectedCategory}>
                            {category.map(cate => <option key={cate} value={cate}>{cate}</option>)}
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