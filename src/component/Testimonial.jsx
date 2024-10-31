import React from 'react'
import TitlePrimary from './title comp/TitlePrimary'
import TitleSecondary from './title comp/TitleSecondary'
import TextMutedComp from './text comp/TextMutedComp'

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center py-40">
        <TitleSecondary
            name="Testimonial"
        />
        <div className="h-3"></div>
        <TitlePrimary
            name="What They Are Saying"
        />
        <div className="h-7"></div>
        <TextMutedComp
            name="Hear it straight from those who have experienced the benefits. Genuine testimonials from our customers will prove the quality of our products and services"
            className="w-[600px] text-center"
        />
    </div>
  )
}

export default Testimonial