import React, { useContext, useEffect, useState } from "react";
import myContext from "./myContext";
import { setFilteredProducts } from "../../redux/cartSlice"; // Import setProducts from the cartSlice
import { useDispatch } from "react-redux";

const MyState = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("mens");
    const [inputVal, setInputValue] = useState('jacket');


    const fetchData = async () => {
        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${inputVal}&page=1&country=US&category_id=aps`;
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
            dispatch(setFilteredProducts(result.data.products))
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [name, inputVal]);

    return (
        <myContext.Provider value={{ loading, setLoading, setName, inputVal, setInputValue }}>
            {props.children}
        </myContext.Provider>
    );
};

export const GetStateCtx = () => {
    const ctx = useContext(myContext);
    return ctx;
};

export default MyState;
