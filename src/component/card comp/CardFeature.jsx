import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const CardFeature = (props) => {
  return (
    <div className='w-80 flex flex-col justify-center items-center gap-8 px-8 py-16 bg-white rounded-2xl'>
        <div className='w-20 p-4 rounded-full bg-[#00B1A9]'>
            <Icon icon={props.icon} className='text-5xl text-white' /> 
        </div>
        <h3 className='text-2xl font-bold text-[#2C3E50]'>
            {props.title}
        </h3>
        <p className='text-sm font-semibold text-[#34495E] opacity-70'>
            {props.text}
        </p>

    </div>
  )
}

export default CardFeature