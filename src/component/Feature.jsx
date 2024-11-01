import React from 'react'
import TitleSecondary from './title comp/TitleSecondary'
import TitlePrimary from './title comp/TitlePrimary'
import TextMutedComp from './text comp/TextMutedComp'
import Carousel from './card comp/Carousel'


const Feature = () => {
    return (
        <div className='relative container mx-auto flex flex-col py-40 items-center text-center'>
            <div className='flex flex-col'>
                <TitleSecondary
                    name='Feature'
                />
                <div className='h-3'></div>
                <TitlePrimary
                    name='Our Features'
                />
                <div className='h-7'></div>
                <TextMutedComp
                    name='a lots of interesting designs for you to share Free to change themes without limits'
                    className='w-[407px]'
                />
            </div>
            <div className='w-[1000px] mx-auto flex justify-center mt-32 overflow-hidden'>
               <Carousel />
            </div>
        </div>
    )
}

export default Feature;
