import React from 'react'

const TitlePrimary = (props) => {
  return (
    <h1 className="text-4xl leading-[50px] md:text-5xl md:leading-normal font-bold text-[#2C3E50]">
        {props.name}
    </h1>
  )
}

export default TitlePrimary