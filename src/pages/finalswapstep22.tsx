import Headerfull from '../components/headerfull';
import righta from "../images/rightarr.svg";
import ex1 from "../images/ex1.png";
import ex2 from "../images/ex2.png";
import ex3 from "../images/ex3.png";
import ex4 from "../images/ex4.png";
import ex5 from "../images/ex5.png";
import br1 from "../images/bri1.svg";
import br2 from "../images/bri2.png";
import br3 from "../images/bri3.png";
import br4 from "../images/br4.png";
import br5 from "../images/bri5.png";
import menub from "../images/menubars.svg";
import search from "../images/search.svg";
import logo from "../images/Objects Logo.png";
import ardown from '../images/arrdown.svg';
import Footerlinksnotfixed from '../components/footerlinksnotfixed';
import Footerlinksfixed from '../components/footerlinks';

export const Finalswapstep22 = () => {
    return (
        <>
            <div className='main'>
                <div className="App">
                    <Headerfull name="John" />

                </div>

                <div className='pt-[100px] md:pt-[120px]'>
                    <div className='mx-auto px-[20px] sm:px-[20px] lg:px-[30px] xl:w-10/12 text-center'>
                        <div className='option box pb-[100px] mt-10 mt-[0px]'>
                            <div className='flex md:flex-row flex-col items-start gap-4 justify-center'>
                                <div className='text-left font[inter] border border-[#34373F] bg-[#2222268a]  rounded-2xl md:w-8/12  xl:w-5/12 w-full p-2 px-[10px] pb-[20px] '>
                                    <div className='flex items-center justify-between mb-[20px]'>
                                        <a href='/swap3'><svg className='h-[34px] w-[34px] p-2 rounded-full hover:bg-[#383838] shadow-md cursor-pointer' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" ><g><path d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z" fill="#ffffff" opacity="1" data-original="#000000"></path></g></svg></a>
                                        <p className='px-3 text-[27px] text-[#E7E8DE] leading-0 '>Settings</p>
                                        <div className='w-[34px]'></div>

                                    </div>
                                    <div className='px-3 flex md:flex-row flex-col gap-2 justify-between'>
                                        <div className='md:w-[33%] border border-[#383838] rounded-[14px] bg-[#1C1E1F] px-[15px] py-[12px] pb-[15px]'>
                                            <p className='text-[13px] text-[#E7E8DE] font-semibold leading-[32px]'>Route Priority</p>

                                            <button id="dropdownDefaultButton1" data-dropdown-toggle="dropdown1" className="flex justify-between w-full text-[#ABACAC] bg-transparent hover:bg-transparent focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-0 py-2.5 pb-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Recommended
                                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>


                                            <div id="dropdown1" className="border border-[#383838] z-10 hidden bg-[#1C1E1F] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton1">
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Recommended</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Fast</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Cheap</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Safe</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className='md:w-[33%] border border-[#383838] rounded-[14px] bg-[#1C1E1F] px-[15px] py-[12px] pb-[15px]'>
                                            <p className='text-[13px] text-[#E7E8DE] font-semibold leading-[32px]'>Slippage</p>
                                            <div className='flex justify-between items-center'><input type='text' min="1" max="100" className='pl-0 w-full placeholder:text-[#ABACAC] text-[#E7E8DE] font-semibold text-[16px] bg-transparent border-none focus:border-transparent focus:ring-0 focus:outline-none' placeholder='0.5' />
                                                <p className='text-[16px] text-[#ABACAC] font-semibold leading-[32px]'>%</p>
                                            </div>

                                        </div>
                                        <div className='md:w-[33%] border border-[#383838] rounded-[14px] bg-[#1C1E1F] px-[15px] py-[12px] pb-[15px]'>
                                            <p className='text-[13px] text-[#E7E8DE] font-semibold leading-[32px]'>Gas Price</p>
                                            <button id="dropdownDefaultButton12" data-dropdown-toggle="dropdown12" className="flex justify-between w-full text-[#ABACAC] bg-transparent hover:bg-transparent focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-0 py-2.5 pb-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Normal
                                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>


                                            <div id="dropdown12" className="border border-[#383838] z-10 hidden bg-[#1C1E1F] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton1">
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Slow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Normal</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-[#E7E8DE] block px-4 py-2">Fast</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-3 pt-[20px] pb-[10px] flex justify-between items-center'>
                                        <p className='text-[18px] text-[#E7E8DE] font-semibold leading-[32px]'>Show Destination wallet</p>

                                        <label className="relative flex items-center  justify-end cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked />
                                            <div className="back-gradient w-11 h-6 rounded-full peer peer-focus:ring-4 peer-focus:[#9383ff] dark:peer-focus:[#9383ff] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:[#9383ff]"></div>
                                        </label>

                                    </div>
                                    <div className='py-[10px] flex justify-between items-center px-3 hover:bg-[#27272a] rounded-lg'>
                                        <p className='text-[18px] text-[#E7E8DE] font-semibold leading-[32px]'>Enabled bridges</p>

                                        <button className='text-[#E7E8DE] flex items-center gap-2 font-semibold'>14/14 <img src={righta} />
                                        </button>

                                    </div>
                                    <div className='py-[10px] flex justify-between items-center px-3 hover:bg-[#27272a] rounded-lg'>
                                        <p className='text-[18px] text-[#E7E8DE] font-semibold leading-[32px]'>Enabled exchanges</p>
                                        <button className='text-[#E7E8DE] flex items-center gap-2 font-semibold'>35/35 <img src={righta} />
                                        </button>

                                    </div>
                                    <div className='px-3'>
                                        <button className='w-full  rounded-md font-bold mt-[20px] p-4 bg-[#424242] text-black gradient_btn' >
                                       <span className='text-gradient'>Submit</span>
                                        </button>
                                    </div>

                                </div>
                                <div className='text-left font[inter] border border-[#34373F] bg-[#2222268a]  rounded-2xl md:w-8/12  xl:w-80 w-12/12 p-[16px] '>
                                    <div className=''>
                                        <img className='h-6' src={logo} />

                                        <div className='flex justify-between items-start gap-[20px] pb-[16px] border-b border-[#ffffff12]'>
                                            <p className='text-[#9b9b9b] text-[14px] mt-[5px]'>When available, aggregates liquidity sources for better prices and gas free swaps.</p>
                                            <label className="mt-[10px] relative flex items-center  justify-end cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" checked />
                                                <div className="back-gradient w-[63px] h-[34px] rounded-full peer peer-focus:ring-4 peer-focus:[#9383ff] dark:peer-focus:[#9383ff] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:end-[28px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[24px] after:w-[24px] after:transition-all dark:border-gray-600 peer-checked:[#9383ff]"></div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='mt-1' id="accordion-collapse" data-accordion="collapse">
                                        <h2 id="2">
                                            <button type="button" className=" bg-transparent flex items-center justify-between w-full py-[12px] px-[0px] font-medium rtl:text-right text-[#E7E8DE] border  border-transparent rounded-2xl focus:ring-0  dark:focus:ring-transparent dark:border-gray-700 dark:text-[#9b9b9b] hover:bg-transparent dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                                <span className='text-[16px] flex gap-2 items-center text-[#9b9b9b]'>Max. slippage <span className='text-[12px] text-[#9b9b9b]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span></span>
                                                <div className='flex items-center gap-2'><span className='text-[#ffffff]'>Auto</span> <img src={ardown} data-accordion-icon className=" w-3 h-3  shrink-0" aria-hidden="true" /> </div>

                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-2" className="hidden mt-[-25px]" aria-labelledby="accordion-collapse-heading-2">
                                            <div className="p-[0px] pb-[5px] pt-[25px] border border-t-0  border-transparent rounded-b-2xl dark:border-gray-700 bg-transparent">

                                                <div className='flex gap-3 items-center'>
                                                    <div className='tabs'>
                                                        <ul className='flex p-[4px] rounded-[16px] border border-[#ffffff12]'>
                                                            <li className='py-[6px] px-[12px] bg-[#ffffff12] rounded-[12px] text-[#E7E8DE] text-[15px] font-medium'>
                                                                Auto
                                                            </li>
                                                            <li className='py-[6px] px-[12px]  rounded-[12px] text-[#E7E8DE] text-[15px] font-medium'>
                                                                Custom
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div className='border border-[#ffffff12]  rounded-[12px] px-[16px] flex justify-between items-center'><input type='text' min="1" max="100" className='text-right pl-0 w-full placeholder:text-[#ABACAC] text-[#E7E8DE] font-normal text-[16px] bg-transparent border-none focus:border-transparent focus:ring-0 focus:outline-none' placeholder='0.5' />
                                                        <p className='text-[16px] text-[#E7E8DE] font-semibold leading-[32px]'>%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-1' id="accordion-collapse" data-accordion="collapse">
                                        <h2 id="3">
                                            <button type="button" className=" bg-transparent flex items-center justify-between w-full py-[12px] px-[0px] font-medium rtl:text-right text-[#E7E8DE] border  border-transparent rounded-2xl focus:ring-0  dark:focus:ring-transparent dark:border-gray-700 dark:text-[#9b9b9b] hover:bg-transparent dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                                <span className='text-[16px] flex gap-2 items-center text-[#9b9b9b]'>Transaction deadline <span className='text-[12px] text-[#9b9b9b]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span></span>
                                                <div className='flex items-center gap-2'><span className='text-[#ffffff]'>10m</span> <img src={ardown} data-accordion-icon className="   w-3 h-3  shrink-0" aria-hidden="true" /> </div>

                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-3" className="hidden mt-[-25px]" aria-labelledby="accordion-collapse-heading-3">
                                            <div className="p-[0px] pb-[5px] pt-[25px] border border-t-0  border-transparent rounded-b-2xl dark:border-gray-700 bg-transparent">

                                                    <div className='border border-[#ffffff12]  rounded-[12px] px-[16px] flex justify-between items-center'><input type='text' min="1" max="100" className='text-right pl-0 w-full placeholder:text-[#ABACAC] text-[#E7E8DE] font-normal text-[16px] bg-transparent border-none focus:border-transparent focus:ring-0 focus:outline-none' placeholder='10' />
                                                        <p className='text-[16px] text-[#E7E8DE] font-semibold leading-[32px]'>minutes</p>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col gap-4 justify-center'>
                                <div className='w-full lg:w-5/12 mt-[15px] py-[20px] px-[20px] rounded-2xl bg-[#2222268a] border border-[#34373F] '>
                                    <div className='flex items-center justify-between gap-2'>

                                        <p className='text-[#E7E8DE] text-[24px] font-semibold'>Enabled exchanges</p>
                                        <div className=''><img src={menub} /></div>
                                    </div>
                                    <div className='relative my-[20px]'>
                                        <img src={search} className='h-[16px] w-[16px] absolute left-[15px] top-[18px] z-30 brightness-50' />
                                        <input

                                            className='pl-[40px] font-[Inter]  input_token w-full h-[50px] text-[#4bbcf9] bg-[#1A1B1E] text-md font-light placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#343434] rounded-xl max-w-[460px]'
                                            placeholder='Search...'

                                        />
                                    </div>
                                    <div className='mic_list h-[350px] overflow-hidden overflow-y-auto pr-[10px] scroll-h'>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={ex1} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>DODO</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Enabled exchanges</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={ex2} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>1inch</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]  invert ' src={ex3} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>OpenOcean</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={ex5} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>0x</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={ex4} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Stable AMM</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={ex1} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>DODO</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Enabled exchanges</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={ex2} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>1inch</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full lg:w-5/12 mt-[15px] py-[20px] px-[20px] rounded-2xl bg-[#2222268a] border border-[#34373F]'>
                                    <div className='flex items-center justify-between gap-2 '>

                                        <p className='text-[#d3d3d3] text-[#E7E8DE] text-[24px] font-semibold'>Enabled bridges</p>
                                        <div className=''><img src={menub} /></div>
                                    </div>
                                    <div className='relative my-[20px]'>
                                        <img src={search} className='h-[16px] w-[16px] absolute left-[15px] top-[18px] z-30 brightness-50' />
                                        <input

                                            className='pl-[40px] font-[Inter]  input_token w-full h-[50px] text-[#4bbcf9] bg-[#1A1B1E] text-md font-light placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#343434] rounded-xl max-w-[460px]'
                                            placeholder='Search...'

                                        />
                                    </div>
                                    <div className='mic_list h-[350px] overflow-hidden overflow-y-auto pr-[10px] scroll-h'>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br1} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Celer cBridge</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br2} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Optimism Gateway</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br3} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Hyphen</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br4} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Omni Bridge</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br5} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Gnosis Bridge</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br1} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Celer cBridge</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between pb-[15px]'>
                                            <div className='flex justify-start gap-[20px] '>
                                                <div> <img className='w-[40px] h-[40px]' src={br2} /> </div>
                                                <div className='text-left'>
                                                    <p className='text-[18px] md:text-[20px] leading-[32px] font-semibold text-[#E7E8DE] text-left flex gap-2 items-center'>Optimism Gateway</p>
                                                    <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className="flex items-center ">
                                                    <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#6b8ada] w-4 h-4 text-[#6b8ada]  border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="App">
                            <Footerlinksfixed name="John" />

                        </div> */}




                    </div>
                </div>
            </div>




        </>
    )
}
export default Finalswapstep22;