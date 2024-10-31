import React from 'react'

const TextMutedComp = (props) => {
  return (
    <p className={`text-lg leading-8 font-semibold ${props.className} text-[#34495E] opacity-70 md:text-lg md:leading-7`}>
        {props.name}
    </p>
  )
}

export default TextMutedComp