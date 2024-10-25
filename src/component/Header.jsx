import React, { useState } from "react";
import "./Landingpage.css";

const Header = () => {

    const navMenus = [
        {label: 'Home' , url: '#home'},
        {label: 'About' , url: '#about'},
        {label: 'Features' , url: '#features'},
        {label: 'Catalog' , url: '#catalog'},
        {label: 'Contact' , url: '#contact'}
    ];

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
        // console.log(show);
    };

    let menuActive = show ? "left-0" : "-left-[170px]";


    return (
        <div className=" navbar shadow-none bg-transparent">
            <div className="lg:w-[1140px] container mx-auto flex py-4 z-10">
                <div className="navbar-start">
                    <a href="#logo" className="navbar-item  text-xl text-[#00B1A9] font-bold lg:text-4xl">
                        ragatain.
                    </a>
                </div>
                <div className="navbar-end lg:gap-8 gap-2">
                    <div className={`fixed flex flex-col px-10 py-20 gap-10 bg-[#00B1A9] h-full ${menuActive} top-1/2 -translate-y-1/2 shadow-md transition-all lg:gap-8 md:static md:flex-row md:translate-y-0 md:bg-transparent md:p-0 md:gap-2 md:h-auto md:shadow-none md:transition-none`}>

                        {
                            navMenus.map((item, index) => ( 
                                <a 
                                    key={index}
                                    href={item.url}
                                    className="navbar-item text-white font-bold text-sm lg:text-base md:text-[#373737] md:opacity-70"
                                >
                                    {item.label}
                                </a>
                            ))
                        }

                    </div>
                    <button
                        className="rounded-full bg-white py-3 px-10  text-sm text-[#373737] font-bold lg:py-4 lg:px-14 lg:text-base"
                    >
                        Login
                    </button>
                    <i className="ri-menu-3-line text-3xl text-[#373737] block md:hidden" onClick={handleClick}></i>
                </div>
                
              

            </div>

        </div>
    )
}

export default Header;