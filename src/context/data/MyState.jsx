import React,  { useContext, useState } from "react"
import myContext from "./myContext"

const MyState = (props) => {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17,24,39)';
        }else{
            setMode('light');
            document.body.style.backgroundColor = "fff";
        }
    }

    return (
        <myContext.Provider value={{toggleMode , mode}}>
            {props.children}
        </myContext.Provider>
    )
}

export const getStateCtx = () => {
    const ctx = useContext(myContext);
    return ctx;
}


export default MyState;