import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { setProducts } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import './filter.css';


const Filter = () => {
    const data = useSelector(store => store.data);
    const [category, setCategory] = useState([])
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [price, setSelectedPrice] = useState(100);
    const [val, setValue] = useState("");

    const filterItem = (e) => {
        setValue(e.target.value);
        if (val.length > 0) {
            const newItem = data.products.filter(item => item.title.toLowerCase().includes(val));
            dispatch(setProducts(newItem));
        } else {
            dispatch(setProducts(data.filteredProducts));
        }
    }


    const showCategoriesWise = (e) => {
        const selectedValue = e.target.value;
        if (isNaN(selectedValue)) {
            setSelectedCategory(selectedValue);
        } else {
            setSelectedPrice(e.target.value);
        }
        if (selectedValue === "All") {
            dispatch(setProducts(data.filteredProducts));
        } else {
            const filterData = data.filteredProducts.filter(product =>
                product.price <= selectedValue || product.category === selectedValue
            );
            dispatch(setProducts(filterData));
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
                            setSelectedPrice('0 - 100');
                            dispatch(setProducts(data.filteredProducts));
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
