// src/MyComponent.tsx
import React, { useState } from 'react';
import logo from "../images/Objects Favicon.png";
import arr from "../images/arr.svg";
import eth from "../images/eth.svg";
import tc from "../images/tc.png";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
import ava from "../images/ava.jpeg";
import Dropdown1 from "../components/dropdown";
import dai1 from "../images/dai1.svg";
import trinew from "../images/trinew.svg";
import { useAccount, useChainId, useSwitchNetwork } from 'wagmi';
interface MyComponentProps {
    name: string;
}

const HeaderfullConnected: React.FC<MyComponentProps> = ({ name }) => {
    const [search, setSearch] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [visibleDropDownMenu, setVisibleDropDownMenu] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    
    // Wagmi code 

    const useAccount_ = useAccount();
    const address = useAccount_.address;


    const truncateAddress = (address:any, length = 6) => {
        if (!address) return '';
        
        const prefixLength = length;
        const suffixLength = length;
        
        const prefix = address.substring(0, prefixLength);
        const suffix = address.substring(address.length - suffixLength);
      
        return `${prefix}...${suffix}`;
      };

      const useAccount_1 = {
        address: address // Replace with your actual address
      };
    
    const truncatedAddress = truncateAddress(useAccount_.address);
    
      const chainId = useChainId();
      console.log("🚀 ~ Home ~ chainId:", chainId);
      const { chains, switchNetwork } = useSwitchNetwork();
      console.log("🚀 ~ Home ~ switchNetwork:", chains);
    
    const networkName = (chains: any) => {
        
        const foundChain = chains.find((chains: any) => chains.id === chainId);
        console.log("🚀 ~ networkName ~ foundChain:", foundChain)
        if (foundChain) {
            return foundChain;
        } else {
            return '';
        }
    }

    const selectedChain = networkName(chains);
    console.log("🚀 ~ networkName ~ networkName:", selectedChain)
    
    // End


    const toggleAccordion = (accordionId: any) => {
        if (activeAccordion === accordionId) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(accordionId);
        }
    };
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


        <nav className="flex md:block">
        <div className="absolute top-0 w-full mr-auto md:mx-auto px-[20px] lg:px-[30px]">
            <div className="relative flex pt-[15px] items-center justify-between">
                <div className='flex items-center'>
                    <div className="flex flex-shrink-0 items-center">
                        <a href='/home'>     <img className="h-10 xl:h-12 w-auto" src={logo} alt="Your Company" /></a>
                    </div>
                    <div className="hidden sm:ml-[12px] sm:block menu-hide">
                        <div className="flex items-center">
                            <div>
                                <a href='/analyse' className='lg:text-[16px] text-[14px] text-[#9b9b9b] font-medium py-[8px] px-[10px] lg:px-[14px] hover:bg-[#222226fa] border border-transparent hover:border-[#34373F] rounded-xl cursor-pointer'>Analyse</a>
                                {/* <a href='/swap' className='text-[#9b9b9b] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Swap</a> */}
                                <button id="dropdownDefaultButtonN" data-dropdown-toggle="dropdownN" className="leading-[20px] lg:text-[16px] text-[14px] flex justify-between  text-[#9b9b9b] leading-[20px] bg-transparent  focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-[10px] lg:px-[14px] py-[8px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-[#222226fa] border border-transparent hover:border-[#34373F]" type="button">Swap
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>


                                <div id="dropdownN" className="border border-[#34373F] z-10 hidden bg-[#222226fa] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="text-left py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonN">
                                    <li className='hover:bg-[#424242]'>
                                            <a href="#" className="text-[16px] text-[#E7E8DE] block px-4 py-2">Best Swap</a>
                                        </li>
                                        <li className='hover:bg-[#424242]'>
                                            <a href="/advancedswap" className="text-[16px] text-[#E7E8DE] block px-4 py-2 ">Advanced Swap</a>
                                        </li>
                                      


                                    </ul>
                                </div>
                                <button id="dropdownDefaultButtonC" data-dropdown-toggle="dropdownC" className="leading-[20px] lg:text-[16px] text-[14px] flex justify-between  text-[#9b9b9b] leading-[20px] bg-transparent  focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-[10px] lg:px-[14px] py-[8px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-[#222226fa] border border-transparent hover:border-[#34373F]" type="button">Compare
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>


                                <div id="dropdownC" className="border border-[#34373F] z-10 hidden bg-[#222226fa] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="text-left py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonC">
                                        <li className='hover:bg-[#424242]'>
                                            <a href="/compare-onchain" className="text-[16px] text-[#E7E8DE] block px-4 py-2 ">On-chain</a>
                                        </li>
                                        <li className='hover:bg-[#424242]'>
                                            <a href="/compare-crosschain" className="text-[16px] text-[#E7E8DE] block px-4 py-2 ">Cross-chain</a>
                                        </li>
                                    </ul>
                                </div>



                                <button id="dropdownDefaultButtonB" data-dropdown-toggle="dropdownB" className="leading-[20px] lg:text-[16px] text-[14px] flex justify-between  text-[#9b9b9b] leading-[20px] bg-transparent  focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-[10px] lg:px-[14px] py-[8px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-[#222226fa] border border-transparent hover:border-[#34373F]" type="button">Bridges
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>


                                <div id="dropdownB" className="border border-[#34373F] z-10 hidden bg-[#222226fa] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="text-left py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonB">
                                        <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth} alt="Your Company" />BNB Chain
                                            </a>
                                        </li>
                                        <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth1} alt="Your Company" />Ethereum</a>
                                        </li>
                                        <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth2} alt="Your Company" />Polygon</a>
                                        </li>
                                        <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={ava} alt="Your Company" />Avalanche</a>
                                        </li>
                                        <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                            <a href="#" className="flex gap-3 text-white text-[16px] font-normal">
                                                <svg width="20" height="20" aria-labelledby="titleID" ><title id="titleID"></title><rect rx="6" fill="#1B1B1B" width="20" height="20"></rect><rect rx="6" fill="#FCFF5233" width="20" height="20"></rect><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9844 5.95312H6.01562V17.9219H17.9844V13.7438H15.9969C15.3125 15.2688 13.7719 16.3281 12.0094 16.3281C9.57812 16.3281 7.60938 14.3406 7.60938 11.9281C7.60625 9.51563 9.57812 7.54688 12.0094 7.54688C13.8063 7.54688 15.3469 8.64062 16.0312 10.2H17.9844V5.95312Z" fill="#FCFF52"></path></svg></svg>
                                                Celo
                                            </a>
                                        </li>
                                        <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                            <a href="#" className="flex gap-3 text-white text-[16px] font-normal">
                                                <svg width="20" height="20" aria-labelledby="titleID"><title id="titleID">Base logo</title><rect rx="6" fill="#1B1B1B" width="20" height="20"></rect><rect rx="6" fill="#0052FF33" width="20" height="20"></rect><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.412 20 11.986 20C7.78693 20 4.34212 16.7761 4 12.6725H14.5926V11.3275H4C4.34212 7.22393 7.78693 4 11.986 4C16.412 4 20 7.58171 20 12Z" fill="#0052FF"></path></svg></svg>
                                                Base</a>
                                        </li>
                                    </ul>
                                </div>
                                <button id="dropdownDefaultButtonT" data-dropdown-toggle="dropdownT" className="leading-[20px] lg:text-[16px] text-[14px] flex justify-between  text-[#9b9b9b] leading-[20px] bg-transparent  focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-[10px] lg:px-[14px] py-[8px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-[#222226fa] border border-transparent hover:border-[#34373F]" type="button">Treasures
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>


                                <div id="dropdownT" className="w-[230px] border border-[#34373F] z-10 hidden bg-[#222226fa] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="text-left py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonT">
                                    <li className='px-[16px] py-[10px] hover:bg-[#000000]'>
                                                    <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-full border border-[#34373f]" src={dai1} alt="Your Company" />linear Treasures
                                                    </a>
                                                </li>
                                                <li className='px-[16px] py-[10px] hover:bg-[#000000]'>
                                                    <a href="#" className="flex gap-3 text-white text-[16px] font-normal whitespace-nowrap"><img className="h-5.5 w-5 rounded-full border border-[#34373f]" src={trinew} alt="Your Company" />triangular Treasures
                                                    </a>
                                                </li>

                                    </ul>
                                </div>
                                {/* <a href='/compare' className='text-[#9b9b9b] font-medium py-[8px] px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Compare</a> */}
                                <a href='/buy' className='lg:text-[16px] text-[14px] text-[#9b9b9b] font-medium py-[8px] px-[10px] lg:px-[14px] hover:bg-[#222226fa] rounded-xl cursor-pointer border border-transparent hover:border-[#34373F]'>Buy Crypto</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-[10px]'>
                   

                <div className='flex items-center pt-[3px]'>
                        <div className="relative ">
                            <button
                                id="dropdownDefaultButtonhead"
                                data-dropdown-toggle="dropdownhead"
                                className="h_drop right-0 top-1 inline-flex items-center rounded-full
           bg-[#202027] bg-transparent hover:bg-[#202027]
       text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-1 focus:outline-none focus-visible:outline-none"
                                type="button"

                            >
                                <p className=""><img className="h-5.5 w-5 " src={selectedChain.iconUrl} alt="Your Company" /></p>
                                <svg className='h-5 w-6' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"><g><path d="M18.7 7.2c-.4-.4-1-.4-1.4 0l-7.5 7.5-3.1-3.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.8 3.8c.2.2.4.3.7.3s.5-.1.7-.3l8.2-8.2c.4-.4.4-1 0-1.4z" fill="#919192" opacity="1" data-original="#000000"></path></g></svg>
                            </button>

                            <div
                                id="dropdownhead"
                                className="z-10 bg-[#202027] divide-y divide-gray-100 rounded-b-xl shadow w-44 dark:bg-gray-700 w-[64px] top-[-22px] -translate-y-6 block"
                                data-popper-placement="bottom"



                            >

                            </div>

                        </div>

                            <div className="text-white text-[8px] sm:text-[16px] py-[10px] px-[12px]   rounded-full inline text-center font-normal  flex items-center gap-[8px] hover:bg-[#292929] "><img className='h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-full' src={tc} />
                                {useAccount_.status === 'disconnected' ?
                                    (<span className="font-[Lausanne] text-[12px] md:text-[15px] font-bold text-gradient ">...</span>) :
                                    (<span className="font-[Lausanne] text-[12px] md:text-[15px] font-bold text-gradient ">{truncatedAddress}</span>)
                                }
                                
                                    </div>

                    </div>



                    <div id="mobile-menu" className={isMenuOpen ? 'pl-[16px] Z-[999] md:hidden mr-[20px] pt-[15px] block space-y-1 px-4 pb-10 pt-2 fixed top-0 left-0 w-full h-full bg-[#181819] z-40' : 'md:hidden mr-[0px] mt-[0px]'}>
                        <div className="lg:flex inset-y-0 left-0 justify-end flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <a href="#" className="bg-[#22232ac7] text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-2" aria-current="page" onClick={toggleMenu}>

                                {isMenuOpen ? (
                                    <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">

                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#ffffff" />
                                    </svg>
                                ) : (
                                    <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 464.205 464.205">

                                        <path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill="#ffffff" opacity="1" data-original="#000000"></path>
                                    </svg>
                                )}
                            </a>
                        </div>
                        {isMenuOpen && (
                            <div className='toggle-menus'>

                              
                                <ul className='text-left text-[#fffff5db] font-medium items-center gap-[1px] text-[17px] mr-[12px]'>
                                    <li className='py-2 '>
                                        <a href='/analyse' className='text-[#9b9b9b] font-medium py-[8px] px-[10px] lg:px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Analyse</a>

                                    </li>
                                    <div>
                                            {/* Accordion 1 */}
                                            <div id="accordion-collapse" data-accordion="collapse">
                                                <h2 id="accordion-collapse-heading-121">
                                                    <button
                                                        type="button"
                                                        className="mob-menu flex items-center justify-between w-full px-[10px] py-[8px] rounded-xl font-medium text-gray-100 rtl:text-right text-gray-500 border-0  border-transparnt rounded-t-xl focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-transparent dark:hover:bg-transparent gap-3"
                                                        onClick={() => toggleAccordion('accordion-collapse-body-121')}
                                                        aria-expanded={activeAccordion === 'accordion-collapse-body-121'}
                                                        aria-controls="accordion-collapse-body-121"
                                                    >
                                                        <span>Swap</span>
                                                        <svg
                                                            className="w-2.5 h-2.5 ms-2 lg:ms-3 shrink-0"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 10 6"
                                                        >
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div
                                                    id="accordion-collapse-body-121"
                                                    className={activeAccordion === 'accordion-collapse-body-121' ? 'block' : 'hidden'}
                                                    aria-labelledby="accordion-collapse-heading-121"
                                                >
                                                    <ul className="text-left text-[14px] py-2 text-sm text-gray-700 dark:text-gray-200 pt-0" aria-labelledby="dropdownDefaultButtonCM">
                                                        <li className='hover:bg-[#424242]'>
                                                            <a href="#" className="text-[#E7E8DE] block px-4 py-2">Advanced swap</a>
                                                        </li>
                                                        <li className='hover:bg-[#424242]'>
                                                            <a href="#" className="text-[#E7E8DE] block px-4 py-2 ">Best swap</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Accordion 2 */}
                                            <div id="accordion-collapse11" data-accordion="collapse">
                                                <h2 id="accordion-collapse-heading-122">
                                                    <button
                                                        type="button"
                                                        className="mob-menu flex items-center justify-between w-full px-[10px] py-[8px] rounded-xl font-medium text-gray-100 rtl:text-right text-gray-500 border-0  border-transparnt rounded-t-xl focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-transparent dark:hover:bg-transparent gap-3"
                                                        onClick={() => toggleAccordion('accordion-collapse-body-122')}
                                                        aria-expanded={activeAccordion === 'accordion-collapse-body-122'}
                                                        aria-controls="accordion-collapse-body-122"
                                                    >
                                                        <span>Compare</span>
                                                        <svg
                                                            className="w-2.5 h-2.5 ms-2 lg:ms-3 shrink-0"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 10 6"
                                                        >
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div
                                                    id="accordion-collapse-body-122"
                                                    className={activeAccordion === 'accordion-collapse-body-122' ? 'block' : 'hidden'}
                                                    aria-labelledby="accordion-collapse-heading-122"
                                                >
                                                    <ul className="text-left text-[14px] py-2 text-sm text-gray-700 dark:text-gray-200 pt-0" aria-labelledby="dropdownDefaultButtonCM">
                                                        <li className='hover:bg-[#424242]'>
                                                            <a href="#" className="text-[#E7E8DE] block px-4 py-2 ">On-chain</a>
                                                        </li>
                                                        <li className='hover:bg-[#424242]'>
                                                            <a href="#" className="text-[#E7E8DE] block px-4 py-2 ">Cross-chain</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Accordion 3 */}
                                            <div id="accordion-collapse2" data-accordion="collapse">
                                                <h2 id="accordion-collapse-heading-125">
                                                    <button
                                                        type="button"
                                                        className="mob-menu flex items-center justify-between w-full px-[10px] py-[8px] rounded-xl font-medium text-gray-100 rtl:text-right text-gray-500 border-0  border-transparnt rounded-t-xl focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-transparent dark:hover:bg-transparent gap-3"
                                                        onClick={() => toggleAccordion('accordion-collapse-body-125')}
                                                        aria-expanded={activeAccordion === 'accordion-collapse-body-125'}
                                                        aria-controls="accordion-collapse-body-125"
                                                    >
                                                        <span>Bridges</span>
                                                        <svg
                                                            className="w-2.5 h-2.5 ms-2 lg:ms-3 shrink-0"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 10 6"
                                                        >
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div
                                                    id="accordion-collapse-body-125"
                                                    className={activeAccordion === 'accordion-collapse-body-125' ? 'block' : 'hidden'}
                                                    aria-labelledby="accordion-collapse-heading-125"
                                                >
                                                    <ul className="text-left py-2 text-[14px] text-sm text-gray-700 dark:text-gray-200 pt-0" aria-labelledby="dropdownDefaultButtonBM">
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth} alt="Your Company" />BNB Chain
                                                        </a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth1} alt="Your Company" />Ethereum</a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth2} alt="Your Company" />Polygon</a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={ava} alt="Your Company" />Avalanche</a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth} alt="Your Company" />BNB Chain
                                                        </a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth1} alt="Your Company" />Ethereum</a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth2} alt="Your Company" />Polygon</a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={ava} alt="Your Company" />Avalanche</a>
                                                    </li>

                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth} alt="Your Company" />BNB Chain
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Accordion 4 */}
                                            <div id="accordion-collapse3" data-accordion="collapse">
                                                <h2 id="accordion-collapse-heading-123">
                                                    <button
                                                        type="button"
                                                        className="mob-menu flex items-center justify-between w-full px-[10px] py-[8px] rounded-xl font-medium text-gray-100 rtl:text-right text-gray-500 border-0  border-transparnt rounded-t-xl focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-transparent dark:hover:bg-transparent gap-3"
                                                        onClick={() => toggleAccordion('accordion-collapse-body-123')}
                                                        aria-expanded={activeAccordion === 'accordion-collapse-body-123'}
                                                        aria-controls="accordion-collapse-body-123"
                                                    >
                                                        <span>Treasures</span>
                                                        <svg
                                                            className="w-2.5 h-2.5 ms-2 lg:ms-3 shrink-0"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 10 6"
                                                        >
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div
                                                    id="accordion-collapse-body-123"
                                                    className={activeAccordion === 'accordion-collapse-body-123' ? 'block' : 'hidden'}
                                                    aria-labelledby="accordion-collapse-heading-123"
                                                >
                                                    <ul className="text-left text-[14px] py-2 text-sm text-gray-700 dark:text-gray-200 pt-0" aria-labelledby="dropdownDefaultButtonT">
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-full border border-[#34373f]" src={dai1} alt="Your Company" />linear Treasures
                                                        </a>
                                                    </li>
                                                    <li className='px-[16px] py-[10px] hover:bg-[#424242]'>
                                                        <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-full border border-[#34373f]" src={trinew} alt="Your Company" />triangular Treasures
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    <li className='py-2 '>
                                        <a href='/buy' className='text-[#9b9b9b] font-medium py-[8px] px-[10px] lg:px-[14px] hover:bg-[#1c1d21] rounded-xl cursor-pointer'>Buy Crypto</a>

                                    </li>

                                  
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>



        </div>
    </nav>


    );
};

export default HeaderfullConnected;



