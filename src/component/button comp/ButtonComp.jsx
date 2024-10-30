import React from 'react'

const ButtonComp = (props) => {
  return (
    <button className="text-sm font-bold text-white bg-[#00B1A9] rounded-full md:text-lg md:px-8 md:py-6 hover:bg-white hover:text-[#00B1A9]">
        {props.name}
    </button>
  )
}

export default ButtonComp