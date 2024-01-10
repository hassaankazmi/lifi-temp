// src/MyComponent.tsx
import React, { useState } from 'react';
import logo from "../images/Genius Y (1).svg";
import arr from "../images/arr.svg";
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import fav from "../images/Design_GY 16x16.svg";
import Dropdown1 from "./dropdown";
import { Dropdown } from 'flowbite';
interface MyComponentProps {
    name: string;
}

const Homeheaderweb: React.FC<MyComponentProps> = ({ name }) => {
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


    return (


        <nav className="">
            <div className="mx-auto px-[32px]">
                <div className="relative flex pt-[20px] items-center justify-between">
                    {/* <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={isMenuOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                            <svg
                                className={isMenuOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> */}
                    <div className="flex items-center">
                        <div className="flex flex-shrink-0 items-center">
                            {/* <p className='font-[Lausanne] pr-2 mb-[-1px] flex items-center text-[23.3px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Genius<i>Y</i></p> */}
                            {/* <span className='font-[Lausanne] text-[15px] text-[#8b8c8e] font-medium pl-1.5'>by The Lattice</span> */}
                            <img className="h-[35px] w-auto mr-[25px]" src={fav} alt="Your Company" />
                            <p className='text-[#ebebf599] text-[13px] font-medium'>Challenging Web3</p>
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <ul className='flex text-[#fffff5db] font-medium items-center gap-[32px] text-[16px] mr-[32px]'>
                            <li>
                                Docs
                            </li>
                            <li>
                                Example
                            </li>
                            <li>
                                New
                            </li>
                        </ul>
                        <button className='bg-[#292929] rounded-full px-4 py-2 pb-2.5  text-center relative launch'><span className=' font-[Lausanne] text-[11px] md:text-[15px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>Launch dApp</span></button>
                    <div className="w-[1px] h-[20px] bg-[#2e2e32] ml-[16px] mr-[16px] d-block"> </div>

                        <button className=" text-left bg-[#65758529] border border-[#3c3f44] w-[40px] h-[22px] rounded-[11px] VPSwitch VPSwitchAppearance" type="button" role="switch" title="toggle dark mode" aria-checked="true">
                            <span className="check">
                                <span className="icon inline-block bg-black rounded-full p-1">
                                    <svg className='hidden sun h-[12px] w-[12px] ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" data-v-ce54a7d1=""><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="moon h-[12px] w-[12px] fill-white" data-v-ce54a7d1=""><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
                                    </span>
                                    </span>
                                    </button>
                    <div className="w-[1px] h-[20px] bg-[#2e2e32] ml-[16px] mr-[16px] d-block"> </div>

                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_430_2)">
                                <path d="M12 0.296875C5.37 0.296875 0 5.66988 0 12.2969C0 17.5999 3.438 22.0969 8.205 23.6819C8.805 23.7949 9.025 23.4239 9.025 23.1049C9.025 22.8199 9.015 22.0649 9.01 21.0649C5.672 21.7889 4.968 19.4549 4.968 19.4549C4.422 18.0699 3.633 17.6999 3.633 17.6999C2.546 16.9559 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.555 18.2069 5.555 18.2069C6.625 20.0419 8.364 19.5119 9.05 19.2049C9.158 18.4289 9.467 17.8999 9.81 17.5999C7.145 17.2999 4.344 16.2679 4.344 11.6699C4.344 10.3599 4.809 9.28987 5.579 8.44987C5.444 8.14687 5.039 6.92688 5.684 5.27388C5.684 5.27388 6.689 4.95188 8.984 6.50388C9.944 6.23688 10.964 6.10488 11.984 6.09888C13.004 6.10488 14.024 6.23688 14.984 6.50388C17.264 4.95188 18.269 5.27388 18.269 5.27388C18.914 6.92688 18.509 8.14687 18.389 8.44987C19.154 9.28987 19.619 10.3599 19.619 11.6699C19.619 16.2799 16.814 17.2949 14.144 17.5899C14.564 17.9499 14.954 18.6859 14.954 19.8099C14.954 21.4159 14.939 22.7059 14.939 23.0959C14.939 23.4109 15.149 23.7859 15.764 23.6659C20.565 22.0919 24 17.5919 24 12.2969C24 5.66988 18.627 0.296875 12 0.296875Z" fill="#C0C0C6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_430_2">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                id="mobile-menu"
                className={isMenuOpen ? 'block space-y-1 px-4 pb-10 pt-2 absolute w-full h-full bg-white z-40' : 'hidden'}
            >
                <div className="lg:flex    inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="#" className="bg-[#22232ac7] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-2" aria-current="page"> <img className="h-5.5 w-5 " src={eth} alt="Your Company" /> <img className="pt-[1px] h-h-18 w-4.2" src={arr} alt="Your Company" /></a>
                </div>


            </div>

        </nav>

    );
};

export default Homeheaderweb;



