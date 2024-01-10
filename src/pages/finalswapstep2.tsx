
import Footer from '../components/footer';
import Header from '../components/header';
import Headerfull from '../components/headerfull';
import righta from "../images/rightarr.svg";
import f1 from "../images/f11.png"
import f2 from "../images/f21.png";
import f3 from "../images/f31.png";
import f4 from "../images/Design_Colored 16x16.svg";
import smll1 from "../images/sma2.jpg";
import Headerswap from '../components/headerswap';
import mlist from "../images/miclist.svg";
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

export const Finalswapstep2 = () => {
    return (
        <>
            <div className='main'>
                <div className="App">
                    <Headerfull name="John" />

                </div>

                <div className='pt-[150px] md:pt-[60px]'>
                    <div className='mx-auto px-[8px] sm:px-[16px] lg:px-[16px] w-11/12 text-center pb-[2px]'>
                        <div className='option box my-10 mt-[0px]'>
                            <div className='text-left font[inter] border border-[#34373F] bg-[#0D1014]  rounded-2xl  md:w-5/12 w-12/12 mx-auto p-2 px-[10px] pb-[20px] '>
                                <p className='px-3 text-[27px] text-white leading-0 mb-[20px]'>Settings</p>
                                <div className='px-3 flex gap-2 justify-between'>
                                    <div className='w-[33%] border border-[#383838] rounded-[14px] bg-[#1C1E1F] px-[15px] py-[12px] pb-[15px]'>
                                        <p className='text-[13px] text-white font-semibold leading-[32px]'>Route Priority</p>

                                        <button id="dropdownDefaultButton1" data-dropdown-toggle="dropdown1" className="flex justify-between w-full text-[#ABACAC] bg-transparent hover:bg-transparent focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-0 py-2.5 pb-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Recommended
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>


                                        <div id="dropdown1" className="z-10 hidden bg-[#1C1E1F] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton1">
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Recommended</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Fast</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Cheap</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Safe</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className='w-[33%] border border-[#383838] rounded-[14px] bg-[#1C1E1F] px-[15px] py-[12px] pb-[15px]'>
                                        <p className='text-[13px] text-white font-semibold leading-[32px]'>Slippage</p>
                                        <div className='flex justify-between items-center'><input type='text' min="1" max="100" className='pl-0 w-full placeholder:text-[#ABACAC] text-white font-semibold text-[16px] bg-transparent border-none focus:border-transparent focus:ring-0 focus:outline-none' placeholder='0.5' />
                                            <p className='text-[16px] text-[#ABACAC] font-semibold leading-[32px]'>%</p>
                                        </div>

                                    </div>
                                    <div className='w-[33%] border border-[#383838] rounded-[14px] bg-[#1C1E1F] px-[15px] py-[12px] pb-[15px]'>
                                        <p className='text-[13px] text-white font-semibold leading-[32px]'>Gas Price</p>
                                        <button id="dropdownDefaultButton12" data-dropdown-toggle="dropdown12" className="flex justify-between w-full text-[#ABACAC] bg-transparent hover:bg-transparent focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-0 py-2.5 pb-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Normal
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>


                                        <div id="dropdown12" className="z-10 hidden bg-[#0D1014] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton1">
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Slow</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Normal</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-white block px-4 py-2">Fast</a>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-3 pt-[20px] pb-[10px] flex justify-between items-center'>
                                    <p className='text-[18px] text-white font-semibold leading-[32px]'>Show Destination wallet</p>

                                    <label className="relative flex items-center  justify-end cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" checked />
                                        <div className=" bg-[#9383ff] w-11 h-6 rounded-full peer peer-focus:ring-4 peer-focus:[#9383ff] dark:peer-focus:[#9383ff] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:[#9383ff]"></div>
                                    </label>

                                </div>
                                <div className='py-[10px] flex justify-between items-center px-3 hover:bg-[#27272a] rounded-lg'>
                                    <p className='text-[18px] text-white font-semibold leading-[32px]'>Enabled bridges</p>

                                    <button className='text-white flex items-center gap-2 font-semibold'>14/14 <img src={righta} />
                                    </button>

                                </div>
                                <div className='py-[10px] flex justify-between items-center px-3 hover:bg-[#27272a] rounded-lg'>
                                    <p className='text-[18px] text-white font-semibold leading-[32px]'>Enabled exchanges</p>
                                    <button className='text-white flex items-center gap-2 font-semibold'>35/35 <img src={righta} />
                                    </button>

                                </div>
                                <div className='px-3'>
                                    <button className='w-full  rounded-md font-bold mt-[20px] p-4 bg-[#9383ff] text-black' >
                                        Submit
                                    </button>
                                </div>

                            </div>
                          <div className='flex gap-4 justify-center items-center'>
                          <div className=' w-4/12 mt-[15px] py-[20px] px-[20px] rounded-2xl bg-[#0D1014] border border-[#34373F]'>
                                <div className='flex items-center justify-between gap-2 mb-[40px]'>

                                    <p className='text-[#d3d3d3] text-[33px] font-semibold'>Enabled exchanges</p>
                                    <div className=''><img src={menub} /></div>
                                </div>

                                <div className='mic_list'>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={ex1} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>DODO</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Enabled exchanges</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={ex2} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>1inch</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]  invert ' src={ex3} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>OpenOcean</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={ex5} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>0x</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={ex4} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Stable AMM</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-4/12 mt-[15px] py-[20px] px-[20px] rounded-2xl bg-[#0D1014] border border-[#34373F]'>
                                <div className='flex items-center justify-between gap-2 mb-[40px]'>

                                    <p className='text-[#d3d3d3] text-[33px] font-semibold'>Enabled bridges</p>
                                    <div className=''><img src={menub} /></div>
                                </div>

                                <div className='mic_list'>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={br1} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Celer cBridge</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={br2} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Optimism Gateway</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={br3} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Hyphen</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={br4} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Omni Bridge</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[40px] h-[40px]' src={br5} /> </div>
                                            <div className='text-left'>
                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Gnosis Bridge</p>
                                                <p className='text-[15px]  text-[#B1B1B1]'>Corporate structure</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className="flex items-center ">
                                                <input checked id="checked-checkbox" type="checkbox" value="" className=" bg-[#9383ff] w-4 h-4 text-[#9383ff] bg-[#9383ff] border-#9383ff[] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#9383ff]" />
                                                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>

                        <div className='fixed bottom-0 left-0 right-0 footer-icons text-center mt-44 mb-2'>
                        <div className='mx-auto max-w-[304px] max-h-[82px] border border-[#404043] rounded-3xl bg-[#212125] p-[16px] px-[10px]  backdrop-sepia flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-2px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Swap</p>
                                        </div>
                                    </div>
                                    <img className="h-[50px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-10px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Analyse</p>
                                        </div>
                                    </div>
                                    <img className="h-[55px] w-[auto] p-[5px]" src={f2} alt="eth" /></div>
                                
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[0px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Buy</p>
                                        </div>
                                    </div>
                                <img className="h-[17px] w-[36px] p-[4px]" src={f3} alt="eth" /></div>
                                <div className='w-[2px] h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Compare</p>
                                        </div>
                                    </div>
                                <img className="h-[28px] w-[auto] p-[4px]" src={f4} alt="eth" /></div>

                            </div>

                        </div>
                    </div>




                    </div>
                </div>
            </div>




        </>
    )
}
export default Finalswapstep2;