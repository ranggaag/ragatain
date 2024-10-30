import React, { useState } from "react";
import { Icon } from '@iconify/react';

const Header = () => {

    const navMenus = [
        {label: 'Home' , url: '#home'},
        {label: 'Catalog' , url: '#catalog'},
        {label: 'Pricing' , url: '#pricing'},
        {label: 'Contact' , url: '#contact'}
    ];

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
        document.body.style.overflow = !show ? 'hidden' : 'auto';
    };



    let menuActive = show ? "left-0" : "-left-[250px]";

    return (
        <div className="relative py-2 z-50">
            <div className="container mx-auto flex py-4">
                <div className="navbar-start">
                    <a href="#logo" className="navbar-item  text-2xl text-[#2C3E50] font-bold md:text-3xl">
                        ragatain.
                    </a>
                </div>
                <div className="navbar-end lg:gap-4 gap-6">
                    <div className={`fixed flex flex-col pl-10 pr-16 py-20 gap-10 bg-[#00B1A9] h-full ${menuActive} top-1/2 -translate-y-1/2 shadow-md transition-all lg:gap-4 lg:static lg:flex-row lg:translate-y-0 lg:bg-transparent lg:p-0 lg:h-auto lg:shadow-none lg:transition-none`}>

                        {
                            navMenus.map((item, i) => ( 
                                <a 
                                    key={i}
                                    href={item.url}
                                    className="navbar-item text-white font-bold text-sm lg:text-base lg:text-[#2C3E50]"
                                >
                                    {item.label}
                                </a>
                            ))
                        }

                    </div>
                    <button
                        className="rounded-full bg-white py-3 px-10  text-sm text-[#2C3E50] font-bold lg:py-3 lg:px-6 md:text-base hover:text-[#00B1A9] hover:bg-white"
                    >
                        Login
                    </button>
                    <Icon icon="gg:menu-right" className="ri-menu-3-line text-4xl text-[#373737] block lg:hidden" onClick={handleClick} />
                </div>
                
              

            </div>

        </div>
    )
}

export default Header;