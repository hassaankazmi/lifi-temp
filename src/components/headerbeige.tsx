// src/MyComponent.tsx
import React, { useState } from 'react';
import logo from "../images/Genius Y (1).svg";
import arr from "../images/arr.svg";
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
import Dropdown1 from "../components/dropdown";
import { Dropdown } from 'flowbite';
interface MyComponentProps {
    name: string;
}

const Headerbeige: React.FC<MyComponentProps> = ({ name }) => {
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


        <nav className="">
            <div className="mx-auto px-5">
                <div className="relative flex pt-[15px] items-center justify-between">
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
                                    <a className='text-[#212125] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] hover:text-[#d3d3d3] rounded-xl cursor-pointer'>Locate</a>
                                    <a className='text-[#212125] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] hover:text-[#d3d3d3] rounded-xl cursor-pointer'>Find</a>
                                    <a className='text-[#212125] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] hover:text-[#d3d3d3] rounded-xl cursor-pointer'>Rent</a>

                                </div>
                            </div>
                        </div>
                        <div className="flex ml-[24px]">
                            <div className="flex items-center">
                                <div>
                                    <div className='relative'>
                                        <div
                                            className={`absolute top-[-1px] right-[-1px] w-[302px] h-[39px] z-10 bg_g mb-[26px] inline-block p-[1px] bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] rounded-xl ${isFocused ? 'opacity-100' : 'opacity-0'}`}
                                        ></div>
                                        <input
                                            className='font-[Lausanne] z-20 relative input_token w-[150px] h-[37px] text-[#8e8e91] bg-[#212125] text-sm font-medium placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#404043] rounded-l-xl max-w-[460px]'
                                            placeholder='X'
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                            <input
                                            className='font-[Lausanne] z-20 relative input_token w-[150px] h-[37px] text-[#8e8e91] bg-[#212125] text-sm font-medium placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#404043] rounded-r-xl max-w-[460px]'
                                            placeholder='Y'
                                        
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                         
                                        />
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        
                    </div>
                    <div className="relative mr-[12px]">
      <button
        id="dropdownDefaultButtonhead"
        data-dropdown-toggle="dropdownhead"
        className="h_drop right-0 top-1 inline-flex items-center rounded-full
           bg-[#202027] bg-transparent
       text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-2  focus:outline-none focus-visible:outline-none "
        type="button"
       
      >
    <p className=""><img className="h-5.5 w-5 " src={eth2} alt="Your Company" /></p>
    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591"><g><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#919192" opacity="1" data-original="#000000" ></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" fill="#919192" opacity="1" data-original="#000000"></path></g></svg>   </button>
        <div
          id="dropdownhead"
          className="z-10 bg-[#202027] divide-y divide-gray-100 rounded-b-xl shadow w-44 dark:bg-gray-700 w-[64px] top-[-22px] -translate-y-6 block"
          data-popper-placement="bottom"
      
          
         
        >
    
        </div>
 
    </div>
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
                        <button className='bg-[#212125] py-[10px] px-[12px] rounded-full leading-0 text-[#b1b2ff] text-base font-medium'>Connect Wallet</button>
                        {/* <button className='bg-[#4bf8ff75] py-[10px] px-[12px] rounded-full leading-0 text-[#0fedf5] text-base font-medium'>Connect Wallet</button> */}

                        </div>

                </div>
            </div>
            <div
                id="mobile-menu"
                className={isMenuOpen ? 'block space-y-1 px-4 pb-10 pt-2 absolute w-full h-full bg-white z-40' : 'hidden'}
            >
                <div className="lg:flex inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="#" className="bg-[#22232ac7] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-[4px]" aria-current="page"> <img className="h-5.5 w-5 " src={eth} alt="Your Company" /> <img className="pt-[1px] h-[20px] w-[20px]" src={arr} alt="Your Company" /></a>
                </div>


            </div>

        </nav>

    );
};

export default Headerbeige;



