import React from "react"
import AboutImg from "../assets/img-section-about.png"
import { Icon } from '@iconify/react'
import ButtonComp from "./button comp/ButtonComp"
import TitleSecondary from "./title comp/TitleSecondary"
import TitlePrimary from "./title comp/TitlePrimary"
import TextMutedComp from "./text comp/TextMutedComp"
import BannerBgAbout from "../assets/Banner-bg-2.svg"


const About = () => {
    return (
        <div id="about" className="container mx-auto flex flex-col gap-28 items-center justify-between lg:flex-row lg:py-60">
            <div className="hidden lg:block lg:absolute lg:left-0">
                <img src={BannerBgAbout} alt="" />
            </div>
            <div className="w-1/2 hidden lg:block z-50">
                <img src={AboutImg} alt="img" />
            </div>
            <div className="w-4/5 flex flex-col justify-center">
                <TitleSecondary name="About" />
                <div className="h-3"></div>
                <TitlePrimary name="We Give You The Best Experience" />
                <div className="h-10"></div>
                <TextMutedComp
                    name="ragatain is a cutting-edge digital invitation service designed to make creating your wedding invitations a breeze. Choose from a wide range of stunning themes and enjoy affordable pricing. Our feature-rich platform empowers you to customize your invitations to perfection." 
                    className="text-justify"
                />
                <div className="h-12"></div>
                <div className="flex flex-row gap-4 md:gap-8">
                    <ButtonComp name="Learn More" />
                    <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-all">
                        <Icon icon="material-symbols:play-circle-rounded" className="size-14 text-[#484848] md:size-14"/>
                        <h6 className="w-full text-sm font-bold text-[#515151] md:text-lg">
                            Watch Video
                        </h6>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About