import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import './hero.css'
const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([
        "https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352",
        "https://www.boat-lifestyle.com/cdn/shop/files/WEb-_1_1600x.jpg?v=1720162453",
        "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Sigma_3_Banner_WEB_2_1600x.jpg?v=1719302682",
        "https://www.boat-lifestyle.com/cdn/shop/files/Summer-Desk-Banner_1_1600x.jpg?v=1718191845",
    ]);

    const slideNext = () => {
        if(index >= images.length - 1) setIndex(0);
        else setIndex(index + 1);
    }
    const slideprev = () => {
       if(index <= 0) setIndex(images.length - 1);
       else setIndex(index - 1);   
    }

    return (
        <div className='slider-container'>
            <div className='slider' key={index}>
                <img src={images[index]} />
            </div>

            <div className="button">
                <button onClick={slideprev}><IoIosArrowBack /></button>
                <button onClick={slideNext}><IoIosArrowForward /></button>
            </div>

        </div>
    )
}

export default HeroSection