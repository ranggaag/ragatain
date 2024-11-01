import React, { useState } from 'react'
import Slider from './Slider'
import { Icon } from '@iconify/react/dist/iconify.js'

const Carousel = () => {

    const [curr, setCurr] = useState(0)
    
    const Prev = () => {
        setCurr(curr === 0 ? Slider.length - 1 : curr - 1);
        console.log(curr);

    }

    const Next = () => {
        setCurr(curr === Slider.length - 1? 0 : curr + 1);
        console.log(curr);

    }

  return (
    <div>
        <Slider/>
        <div className='mt-16'>
          <button onClick={Prev} className='text-[#2C3E50] hover:scale-110 transition-all'>
            <Icon icon='si:chevron-left-circle-fill' className='text-5xl ' />
          </button>
          <button onClick={Next} className='text-[#2C3E50] hover:scale-110 transition-all'>
            <Icon icon='si:chevron-right-circle-fill' className='text-5xl' />
          </button>
        </div>
    </div>
  )
}

export default Carousel