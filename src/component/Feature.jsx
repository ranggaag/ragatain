import React from 'react';
import Carousel from "../component/card comp/Carousel"


const Feature = () => {
    return (
        <div className="container mx-auto flex flex-col py-40 items-center text-center">
            <div className='flex flex-col'>
                <h6 className="text-2xl text-[#00B1A9] font-bold">  
                    Featu
                </h6>
                <div className="h-3"></div>
                <h1 className="text-4xl text-[#2C3E50] font-bold leading-[50px] md:leading-normal md:text-5xl">
                    Our  Features
                </h1>
                <div className="h-7"></div>
                <p className="w-[407px] text-lg text-[#34495E] opacity-70 font-semibold text-center md:text-lg md:leading-7">
                    a lots of interesting designs for you to share Free to change themes without limits
                </p>
            </div>
            <div className='mt-32'>
               <Carousel />
            </div>
        </div>
    )
}

export default Feature;
