// src/MyComponent.tsx
import React, { useState } from 'react';
import logo from "../images/newlogo-removebg-preview.png";
import logo1 from "../images/Genius Y (1).svg";
import eth from "../images/eth.svg";
import check from "../images/chk.svg";
interface MyComponentProps {
    name: string;
}

const Header: React.FC<MyComponentProps> = ({ name }) => {
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
            <div className="mx-auto px-2 md:px-0 w-11/12 py-0 md:max-w-[921px] 2xl:max-w-[1228px]">
                <div className="relative flex mt-[10px] items-center justify-between">
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
                    <div className="flex flex-1 items-center justify-self-start sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            {/* <p className='font-[Lausanne] pr-2 mb-[-1px] flex items-center text-[23.3px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Genius<i>Y</i></p>
                            <span className='font-[Lausanne] text-[15px] text-[#8b8c8e] font-medium pl-1.5'>by The Lattice</span> */}
                           <img className="h-5 xl:h-5 w-auto" src={logo1} alt="Your Company" /> 
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center">
                                <div>
                               
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="lg:flex   absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="#" className="bg-[#202027] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-2" aria-current="page"> <img className="h-5.5 w-5 " src={eth} alt="Your Company" /> <img className="pt-[1px] h-h-18 w-4.2" src={check} alt="Your Company" /></a>
                    </div>
                </div>
            </div>
            <div
                id="mobile-menu"
                className={isMenuOpen ? 'block space-y-1 px-4 pb-10 pt-2 absolute w-full h-full bg-white z-40' : 'hidden'}
            >
               <div className="lg:flex    inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="#" className="bg-[#202027] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-2" aria-current="page"> <img className="h-5.5 w-5 " src={eth} alt="Your Company" /> <img className="pt-[1px] h-h-18 w-4.2" src={check} alt="Your Company" /></a>
                    </div>


            </div>
       
        </nav>

    );
};

export default Header;



