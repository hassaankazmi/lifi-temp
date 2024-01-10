
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import fuel from '../images/fuel 1.svg';
export const Finalswapstep5 = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <Headerfull name="John" />

                </div>

                <div className='pt-[100px] md:pt-[140px]'>
                    <div className='mx-auto px-[20px] sm:px-[16px] lg:px-[16px] w-12/12 md:w-11/12 text-center'>
                        <div className='option box mt-8 pb-[100px] mt-[0px] flex gap-10 justify-center items-start'>
                            <div className='border border-[#34373F] bg-[#2222268a]  w-full sm:w-8/12 xl:w-5/12 rounded-2xl p-[10px] sm:p-5'>
                                <div className='choose head px-[12px] md:pt-0 pt-[3px] pb-[15px] md:pb-5 flex items-center justify-between'>
                                    <div className='flex gap-4'><p className='text-left text-[#E7E8DE] text-md font-semibold'>Swap</p><p className='ml-[10px] text-left text-[#9b9b9b] text-md font-semibold'>Buy</p></div>
                                    <div className='flex gap-4 items-center'>
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.1"  x="0" y="0" viewBox="0 0 6.35 6.35"><g><path d="M3.276.387a2.795 2.795 0 0 0-2.89 2.689 2.796 2.796 0 0 0 2.69 2.889.265.265 0 1 0 .018-.53 2.256 2.256 0 0 1-2.178-2.34 2.257 2.257 0 0 1 2.34-2.18 2.256 2.256 0 0 1 2.178 2.34 2.25 2.25 0 0 1-.737 1.59l.09-.537a.265.265 0 0 0-.273-.31.265.265 0 0 0-.248.223L4.08 5.328a.265.265 0 0 0 .217.304l1.108.186a.265.265 0 1 0 .087-.522l-.428-.071a2.783 2.783 0 0 0 .9-1.95A2.794 2.794 0 0 0 3.275.387z" paint-order="stroke fill markers" fill="#9ca3af" opacity="1" data-original="#000000"></path></g></svg>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 MenuButton__Icon-sc-7e635c1d-0 dLgZFm"><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor"></path></svg></div>
                                </div>
                                <div className='relative option-content rounded-2xl w-full p-0.5 back-gradient'>
                                    <div className='bg-[#000] p-1 rounded-2xl'>
                                        <div className='relative you-pay bg-[#1d1d22] rounded-2xl border-transparent p-4 hover:border-gray-700'> 
                                         <div className='flex items-end justify-between'>
                                         <div className="">
                                            <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                                <input type="text" name="text" autoComplete='off' id="email" className="mt-1 block px-0 text-[22px] leading-[22px] sm:text-[32px] bg-transparent w-full rounded-md border-0 py-0.5 text-[#E7E8DE] shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#E7E8DE] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                <div className='flex justify-between items-center mt-3'>                                           
                                                </div>
                                                <div className='p-2 bg-[#1d1d22] border-black border-4 rounded-xl absolute left-[46%] top-[85%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                            </div>
                                          <div>
                                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="rounded-md border border-[#34373F] inline-flex items-center bg-[#000] px-1.5 pr-[10px] py-[3px] text-sm sm:text-lg font-semibold text-[#E7E8DE] uppercase  border-0  hover:bg-black" type="button">
                                                        <img className="w-[30px] h-[30px] p-[4px] mr-1" src={ethsmallnew} alt="eth" />   <p className="mr-2 xl:mr-1">eth</p><svg className="-mr-1 h-[22px] w-[25px] text-[#E7E8DE]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                                    </button>
                                                    <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-[12px] text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="text-[#E7E8DE] block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-[#E7E8DE]">Account settings</a></li><li><a href="#" className="text-[#E7E8DE] block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-[#E7E8DE]">Support</a></li><li><a href="#" className="text-[#E7E8DE] block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-[#E7E8DE]">License</a></li></ul></div>
                                          </div> </div>    
                                          <div className='flex justify-between items-center mt-[6px]'>
                                <p className='text-[12px] text-[#9b9b9b]'>Ether(~$2196.37)</p>
                                          <p className='text-[12px] text-[#9b9b9b]'>Balance: 0.001</p>
                                </div>                       
                                        </div>
                                        <div className='you-pay bg-[#1d1d22] rounded-2xl border-transparent p-4 hover:border-gray-700 mt-[3px]'>
                                            <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Recieve</label>
                                            <div className="relative">
                                                <input type="text" name="text" id="email" autoComplete='off' className="mt-1 block px-0 text-[22px] leading-[22px] sm:text-[32px] bg-transparent w-full rounded-md border-0 py-0.5 text-[#E7E8DE] shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#E7E8DE] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                <div className='flex justify-end items-center'>
                                        
                                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="rounded-md border border-transparent inline-flex items-center bg-[#000] px-[10px] pr-[10px] py-[2px] pb-[4px] text-sm sm:text-lg font-semibold text-[#E7E8DE] captilize   hover:bg-black" type="button">
                                                       <p className="mr-2 xl:mr-1 text-[18px]">Select Token</p><svg className="-mr-1 mt-1 h-[22px] w-[22px] text-[#E7E8DE]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                                    </button>
                                                    <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-[#212125] rounded-md dark:hover:bg-gray-600 dark:hover:text-[#E7E8DE]">Account settings</a></li><li><a href="#" className="text-[#E7E8DE] block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-[#E7E8DE]">Support</a></li><li><a href="#" className="text-[#E7E8DE] block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-[#E7E8DE]">License</a></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div><button className='w-full rounded-xl p-4 mt-1 text-[#b1b2ff] font-bold text-sm sm:text-lg bg-[#424242]'><span className='text-gradient'>Connect Wallet</span></button></div>

                                        <div className='mt-1' id="accordion-collapse" data-accordion="collapse">
                                            <h2 id="accordion-collapse-heading-1">
                                                <div  className="acc-col-bg py-[12px] px-[16px] bg-[#1d1d20] border  border-[#34373F] rounded-2xl focus:ring-0  dark:focus:ring-transparent dark:border-gray-700 dark:text-[#9b9b9b] hover:bg-[#1d1d22] dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1 ">
                                      <div className='flex items-center justify-between w-full  font-medium rtl:text-right text-[#E7E8DE] '>
                                      <span className='text-[12px] md:text-[14px] text-left'>1 WBTC = 18.8205 WETH <span className='text-[12px] text-[#9b9b9b]'>($42,137.49)</span></span>
                               <div className='flex items-center gap-2'> <div className='flex gap-2'><img className='h-[16px] contrast-50' src={fuel} /><p className='text-[12px] font-medium text-[#ffffffc2]'>$46.44</p></div>
                                                    <img src={ardown} data-accordion-icon className="rotate-180 w-3 h-3  shrink-0" aria-hidden="true"/> </div>
                                      </div>
                                          <div className='flex justify-between mt-2'>
                                            <div className='flex items-center gap-3'>
                                            <p className='text-[14px] text-[#9b9b9b] font-medium'> Best Route </p>  <p className='text-[14px] text-[#9383ff] font-medium'> Uniswap X </p>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                            <p className='text-[14px] text-[#9b9b9b] font-medium'> Price Imapct:</p>
                                            <p className='text-[14px] text-[#E7E8DE] font-medium text-[#7ba0ff]'> ~0.305% </p>
                                            </div>
                                          </div>
                                                </div>
                                            </h2>
                                            <div id="accordion-collapse-body-1" className="hidden mt-[-25px]" aria-labelledby="accordion-collapse-heading-1">
                                                <div className="p-[16px] pb-[5px] pt-[25px] border border-t-0  border-[#34373F] rounded-b-2xl dark:border-gray-700 bg-[#1d1d20]">
                                               
                                                    <div className='py-2 flex justify-between border-t border-t-[#34373F]'>
                                                        <p className=' text-[14px] text-[#9b9b9b] font-medium'>
                                                            Max. slippage
                                                        </p>
                                                        <p className='text-[14px] text-[#E7E8DE] font-medium  flex items-center gap-2'>
                                                          <span className='block bg-[#ffffff12] text-[#9b9b9b] text-[12px] px-[7px] pt-[2px] pb-[3px] rounded-full'>Auto</span>  0.5%
                                                        </p>
                                                    </div>
                                                    <div className='py-2 flex justify-between'>
                                                        <p className='text-[14px] text-[#9b9b9b] font-medium'>
                                                        Fee (0.15%)
                                                        </p>
                                                        <p className='text-[14px] text-[#E7E8DE] font-medium'>
                                                        $791.22
                                                        </p>
                                                    </div>
                                                    <div className='py-2 flex justify-between'>
                                                        <p className='text-[14px] text-[#9b9b9b] font-medium'>
                                                        Network cost
                                                        </p>
                                                        <p className='text-[14px] text-[#E7E8DE] font-medium flex items-center gap-2'>
                                                            <svg width="16" height="16" aria-labelledby="titleID"><title id="titleID">Ethereum logo</title><rect rx="4" fill="#1B1B1B" width="16" height="16"></rect><rect rx="4" fill="#6B8AFF33" width="16" height="16"></rect><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4817 4.29043L7.08715 11.516C6.91315 11.8019 7.00806 12.1725 7.29743 12.3421L11.692 14.9163C11.8818 15.0279 12.1182 15.0279 12.308 14.9163L16.7026 12.3421C16.9919 12.1725 17.0869 11.8019 16.9129 11.516L12.5192 4.29043C12.2838 3.90319 11.7171 3.90319 11.4817 4.29043Z" fill="#6B8AFF"></path><path d="M15.7897 15.0102C15.7897 14.999 15.7878 14.9888 15.7869 14.9786C15.785 14.9684 15.7831 14.9582 15.7813 14.948C15.7785 14.9359 15.7748 14.9248 15.7711 14.9127C15.7683 14.9035 15.7655 14.8951 15.7608 14.8868C15.7552 14.8738 15.7478 14.8608 15.7404 14.8487C15.7366 14.8422 15.7329 14.8348 15.7283 14.8283C15.7153 14.8098 15.7013 14.7912 15.6846 14.7754C15.6678 14.7597 15.6502 14.7448 15.6316 14.7318C15.625 14.7272 15.6185 14.7244 15.6111 14.7198C15.599 14.7123 15.586 14.7049 15.573 14.6993C15.5646 14.6956 15.5553 14.6928 15.546 14.6891C15.5348 14.6854 15.5228 14.6817 15.5107 14.6789C15.5004 14.6761 15.4902 14.6743 15.48 14.6734C15.4697 14.6715 15.4595 14.6706 15.4484 14.6706C15.4363 14.6706 15.4251 14.6697 15.413 14.6706C15.4046 14.6706 15.3963 14.6724 15.387 14.6734C15.374 14.6752 15.3609 14.6761 15.3479 14.6789C15.3442 14.6789 15.3405 14.6817 15.3368 14.6826C15.2968 14.6928 15.2586 14.7086 15.2233 14.7318L12.3311 16.4363C12.1265 16.5569 11.8735 16.5569 11.6689 16.4363L8.77673 14.7318C8.74139 14.7086 8.70326 14.6928 8.66327 14.6826C8.65955 14.6817 8.65583 14.6799 8.65211 14.6789C8.63909 14.6761 8.62607 14.6752 8.61305 14.6734C8.60468 14.6724 8.59631 14.6715 8.58701 14.6706C8.57492 14.6706 8.56376 14.6706 8.55167 14.6706C8.54144 14.6706 8.53029 14.6724 8.52006 14.6734C8.50983 14.6752 8.4996 14.6771 8.48937 14.6789C8.47728 14.6817 8.46612 14.6854 8.45403 14.6891C8.44473 14.6919 8.43636 14.6956 8.42706 14.6993C8.41404 14.7049 8.40102 14.7123 8.38893 14.7198C8.38242 14.7235 8.37498 14.7272 8.36847 14.7318C8.34987 14.7448 8.33127 14.7587 8.31546 14.7754C8.29965 14.7921 8.28477 14.8098 8.27175 14.8283C8.2671 14.8348 8.26431 14.8413 8.25966 14.8487C8.25222 14.8617 8.24478 14.8738 8.2392 14.8868C8.23548 14.8951 8.23269 14.9044 8.22897 14.9127C8.22525 14.9248 8.22153 14.9359 8.21874 14.948C8.21595 14.9582 8.21409 14.9684 8.21316 14.9786C8.2113 14.9888 8.21037 15 8.21037 15.0102C8.21037 15.0213 8.20944 15.0334 8.21037 15.0445C8.21037 15.0538 8.21223 15.0621 8.21316 15.0714C8.21502 15.0844 8.21595 15.0974 8.21874 15.1095C8.21967 15.115 8.22153 15.1197 8.22339 15.1243C8.23455 15.167 8.25315 15.2069 8.28012 15.244L11.4681 19.7265C11.7275 20.0911 12.2706 20.0911 12.5301 19.7265L15.718 15.244C15.745 15.2069 15.7636 15.167 15.7748 15.1243C15.7757 15.1197 15.7785 15.1141 15.7794 15.1095C15.7822 15.0965 15.7831 15.0844 15.785 15.0714C15.7859 15.0621 15.7869 15.0538 15.7878 15.0445C15.7878 15.0334 15.7878 15.0213 15.7878 15.0102H15.7897Z" fill="#6B8AFF"></path></svg></svg>
                                                    $1.58
                                                        </p>
                                                    </div>
                                                   
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>  
                        <div className="App">
                    <Footerlinksfixed name="John" />
                </div>
                        {/* <div className='fixed md:static bottom-0 left-0 right-0 footer-icons text-center mt-[75px] pb-2'>
                        <div className='mx-auto max-w-max md:max-w-[304px] max-h-[82px] border border-[#404043] rounded-2xl md:rounded-3xl bg-[#2222268a] p-[5px] md:p-[16px] md:px-[10px]  backdrop-blur-[2px] flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-0 md:gap-2'>
                                <a href='/swap' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[-7px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-[#E7E8DE]'><p className='text-[12px] md:text-[14px]'>Swap</p>
                                        </div>
                                    </div>
                                    <img className="h-[35px] md:h-[50px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </a>
                                <a href='/analyse' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[-10px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-[#E7E8DE]'><p className='text-[12px] md:text-[14px]'>Analyse</p>
                                        </div>
                                    </div>
                                    <img className="h-[45px] md:h-[55px] w-[auto] p-[5px]" src={f2} alt="eth" /></a>                                
                                <a href='/buy' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[0px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-[#E7E8DE]'><p className='text-[12px] md:text-[14px]'>Buy</p>
                                        </div>
                                    </div>
                                <img className="h-[15px] w-[30px] md:h-[17px] md:w-[36px] p-[4px]" src={f3} alt="eth" /></a>
                                <div className='w-[2px] h-[35px] md:h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <a href='/compare' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-[#E7E8DE]'><p className='text-[12px] md:text-[14px]'>Compare</p>
                                        </div>
                                    </div>
                                <img className="h-[23px] md:h-[28px] w-[auto] p-[4px]" src={f4} alt="eth" /></a>

                            </div>

                        </div>
                    </div> */}

                 









                    </div>
                </div>
            </div>




        </>
    )
}
export default Finalswapstep5;