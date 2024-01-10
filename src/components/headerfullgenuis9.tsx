// src/MyComponent.tsx
import React, { useState } from 'react';
import logo from "../images/Genius Y (1).svg";
import arr from "../images/arr.svg";
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
import Dropdown2 from "./dropdown2";
import { Dropdown } from 'flowbite';
interface MyComponentProps {
    name: string;
}

const Headerfullgenuis9: React.FC<MyComponentProps> = ({ name }) => {
    const [search, setSearch] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const [focused, setFocused] = useState(false);

    const [visibleDropDownMenu, setVisibleDropDownMenu] = useState(false);
    const onSearchFocus = () => {
        setFocused(true);
        setVisibleDropDownMenu(true);
        console.log('Element focused');
        // setVisibleDropDownMenu(true) 
        // Perform actions when the element is focused
    };

    const onFocusOut = () => {
        setFocused(false);
        console.log('Element blurred');
        setVisibleDropDownMenu(false);
        //setVisibleDropDownMenu(false)
        // Perform actions when the element is blurred
    };

    const updateSearch = (value: string) => {
        setSearch(value || "");
        setVisibleDropDownMenu(value ? true : false)

    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (


        <nav className="absolute w-full">
            <div className="mx-auto px-5">
                <div className="relative flex mt-[15px] items-center justify-between">
                    
                    <div className="flex flex-1 items-center justify-self-start sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-4 xl:h-5 w-auto" src={logo} alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center">
                                <div>
                                    <div className='relative'>
                                        <div
                                            className={`absolute top-[-1px] right-[-1px] w-[350px] h-[52px] z-10 bg_g mb-[26px] inline-block p-[1px] bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] rounded-xl ${isFocused ? 'opacity-100' : 'opacity-0'}`}
                                        ></div>
                                        <input
                                            className='font-[Lausanne] z-20 relative input_token w-[348px] h-[50px] text-[#8e8e91] bg-[#27272a] text-lg font-medium placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#505051] rounded-xl max-w-[460px]'
                                            placeholder='Locate Room'
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Dropdown2 />
                    
                    <div className=''>
                        <button className='bg-[#878cfe38] py-[10px] px-[12px] rounded-full leading-0 text-[#b1b2ff] text-base font-medium'>Connect Wallet</button>

                        </div>

                </div>
            </div>
            <div
                id="mobile-menu"
                className={isMenuOpen ? 'block space-y-1 px-4 pb-10 pt-2 absolute w-full h-full bg-white z-40' : 'hidden'}
            >
                <div className="lg:flex    inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="#" className="bg-[#22232ac7] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-[4px]" aria-current="page"> <img className="h-5.5 w-5 " src={eth} alt="Your Company" /> <img className="pt-[1px] h-[20px] w-[20px]" src={arr} alt="Your Company" /></a>
                </div>


            </div>

        </nav>

    );
};

export default Headerfullgenuis9;



