import React, { useContext, useEffect, useState } from "react";
import myContext from "./myContext";
import { setProducts, setFilteredProducts } from "../../redux/cartSlice"; // Import setProducts from the cartSlice
import { useDispatch, useSelector } from "react-redux";

const MyState = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const data = useSelector(store => store.data)
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            dispatch(setProducts(result)); // Dispatch the setProducts action with the fetched data
            dispatch(setFilteredProducts(result)); // Dispatch the setProducts action with the fetched data
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (data.products.length <= 0) {
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
