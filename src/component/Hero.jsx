import React from "react"
import HeroImg from "../assets/Hero-Cover-3-Theme 2.png"
// import { Icon } from '@iconify/react'
import TitlePrimary from "./title comp/TitlePrimary"
import TextMutedComp from "./text comp/TextMutedComp"
import ButtonComp from "./button comp/ButtonComp"
import BannerBg from "../assets/banner-bg.svg"


const Hero = () => {

    return (
        <div id="home" className="container px-6 py-24 mx-auto flex flex-col gap-16 justify-between items-center lg:flex-row lg:px-0 lg:py-24">
            <div className="w-auto flex flex-col items-start gap-12 lg:w-1/2">
                <TitlePrimary name="Creat Your Digital Invitation With ragatain." />
                <TextMutedComp name="Stay Connected with Our Digital Invitations. Elegant, Easy, and Limitless." />
                <ButtonComp
                    name="Order Now"
                />
                {/* <button className="flex gap-3 justify-center text-center text-sm text-white font-bold px-7 py-6 bg-[#00B1A9] rounded-full md:text-lg md:px-8 md:py-6 hover:bg-white hover:text-[#00B1A9]">
                    Order Now
                    <Icon icon="material-symbols:arrow-right-alt-rounded" className="text-xl md:text-3xl"/>
                    </button> */}
            </div>
            <div className="w-auto z-50 lg:w-2/3 lg:-mr-14">
                <img src={HeroImg} alt="" />
            </div>
            <div className="hidden lg:absolute lg:block lg:top-0 lg:right-0">
                <img src={BannerBg} alt="banner-bg" />
            </div>
        </div>
    )
}

export default Hero