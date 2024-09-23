/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import './hero.css'
const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([
        "../assets/WEb-_1_1600x.jpg",
        "../images/Summer-Desk-Banner_1_1600x.jpg",
        "../images/Wave_Sigma_3_Banner_WEB_2_1600x.jpg",
        "../images/WEb-_1_1600x.jpg",
    ]);

    // useEffect(() => {
    //     let intervalId = setInterval(() => {
    //         if (index >= images.length - 1) setIndex(0);
    //         else setIndex(index + 1);
    //     },2000)
        
    //     return () => clearInterval(intervalId)
    // },[index])

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
          {/* <img src={images[index]} /> */}
          {/* <img src="../assets/Wave_Sigma_3_Banner_WEB_2_1600x.jpg" alt="" /> */}
          <img src="./HeroSection.jsx"
            alt=''
          />
        </div>

        <div className='button'>
          <button onClick={slideprev}>
            <IoIosArrowBack />
          </button>
          <button onClick={slideNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    );
}

export default HeroSection