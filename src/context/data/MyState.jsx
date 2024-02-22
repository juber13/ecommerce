import React, { useContext, useEffect, useState } from "react";
import myContext from "./myContext";
import { setFilteredProducts, setProducts } from "../../redux/cartSlice"; // Import setProducts from the cartSlice
import { useDispatch, useSelector } from "react-redux";

const MyState = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const data = useSelector(store => store.data);
    const fetchData = async () => {
        const url = `https://fakestoreapi.com/products`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7ef20892e3msh89930c7e4e25d1ep1ced24jsn36fe010d7d9d',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };
        try {
            setLoading(true)
            const response = await fetch(url, options);
            const result = await response.json();
            dispatch(setFilteredProducts(result))
            dispatch(setProducts(result))
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        if (!data.filteredProducts.length) {
            fetchData();
        }
    }, []);

    return (
        <myContext.Provider value={{ loading, setLoading }}>
            {props.children}
        </myContext.Provider>
    );
};

export const GetStateCtx = () => {
    const ctx = useContext(myContext);
    return ctx;
};

export default MyState;
