// src/MyComponent.tsx
import React, { useState } from 'react';
import logo from "../images/Genius Y (1).svg";
import arr from "../images/arr.svg";
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
import Dropdown1 from "./dropdown";
import { Dropdown } from 'flowbite';
interface MyComponentProps {
    name: string;
}

const Headerfullwithtabs: React.FC<MyComponentProps> = ({ name }) => {
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


        <nav className="absolute w-full">
            <div className="mx-auto px-5">
                <div className="relative flex mt-[15px] items-center justify-between">
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
                    <div className="flex flex-1 items-center justify-self-start sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            {/* <p className='font-[Lausanne] pr-2 mb-[-1px] flex items-center text-[23.3px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Genius<i>Y</i></p> */}
                            {/* <span className='font-[Lausanne] text-[15px] text-[#8b8c8e] font-medium pl-1.5'>by The Lattice</span> */}
                            <img className="h-4 xl:h-5 w-auto" src={logo} alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center">
                                <div>
                                    <a className='text-[#9b9b9b] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Swap</a>
                                    <a className='text-[#9b9b9b] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Tokens</a>
                                    <a className='text-[#9b9b9b] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>NFTs</a>
                                    <a className='text-[#9b9b9b] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Pools</a>

                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="hidden sm:block absolute left-0 right-0 mx-auto max-width-305">
                            <div className="hidden sm:block">
                                <div className="flex items-center">
                                    <div className='bg-[#212125] rounded-lg border border-[#404043] flex items-center mt-[5px]'>
                                       <div className='flex items-center'> <button className='w-[100px]  text-[#c3c3c3] font-normal p-[9px] text-[16px]'>Swap</button>
                                    <div className='w-[2px] h-[28px] bg-[#404043] d-block'></div></div>
                                    <div className='flex items-center relative'>
                                    <button className='w-[100px]  text-[#c3c3c3] font-normal p-[9px] text-[16px]'>Analyse</button>
                                        <div className='w-[2px] h-[28px] bg-[#404043] d-block absolute right-[-2px]'></div>
                                    </div>

                <div className='relative z-[9]'>                        <button className='w-[100px] active  text-[#0fedf5] font-normal p-[9px] text-[16px] rounded-lg  bg-[#348489]'>Buy</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    <Dropdown1 />
                    {/* <div className="relative mr-[12px]">
                        <button id="dropdownDefaultButtonhead" data-dropdown-toggle="dropdownhead" className="h_drop right-0 top-1 inline-flex items-center rounded-full bg-transparent hover:bg-[#202027] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-1" type="button">
                            <p className=""><img className="h-5.5 w-5 " src={eth} alt="Your Company" /></p><svg className="-mr-1 h-6 w-6 text-[#919192]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                        <div id="dropdownhead" className="z-10 bg-[#202027] divide-y divide-gray-100 rounded-b-xl shadow w-44 dark:bg-gray-700 hidden w-[64px] top-[-22px] -translate-y-6 " data-popper-placement="bottom">
                            <ul className="py-2.5 px-2.5 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonhead">
                                <li className='mb-2'><a href="#" className=""><img className="h-5.5 w-5 " src={eth1} alt="Your Company" /></a></li>
                                <li><a href="#" className=""><img className="h-5.5 w-5 " src={eth2} alt="Your Company" /></a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className=''>
                        <button className='bg-[#878cfe38] py-[10px] px-[12px] rounded-full leading-0 text-[#b1b2ff] text-sm md:text-base font-medium'>Connect Wallet</button>
                        {/* <button className='bg-[#4bf8ff75] py-[10px] px-[12px] rounded-full leading-0 text-[#0fedf5] text-base font-medium'>Connect Wallet</button> */}

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

export default Headerfullwithtabs;



