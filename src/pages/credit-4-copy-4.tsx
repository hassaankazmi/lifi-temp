
import Footer from '../components/footer';
import Headerfull from '../components/headerfull';
import eth from "../images/eth.svg";
import tick from "../images/tick.svg"
import prog1 from "../images/prog1.svg";
import prog2 from "../images/prog2.svg";
import prog3 from "../images/prog3.svg";
import prog4 from "../images/prog4.svg";
import cal from "../images/cal.svg";
import pr1 from "../images/p1.svg";
import pr2 from "../images/p2.svg";
import pr3 from "../images/p3.svg";
import pr4 from "../images/p4.svg";
import pg1 from "../images/pg2.svg";
import pg2 from "../images/pg3.svg";
import pg3 from "../images/pg4.svg";
import pg4 from "../images/pg1.svg";
import thund from "../images/thun.png";
import graph from "../images/grapgh.svg";
import uniswap from "../images/uni.svg";

export const Credit4 = () => {
    return (
        <>
            <div className='main min-h-screen'>

                <div className="App">
                    <Headerfull name="John" />
                </div>

                <div className='relative top-[108px]'>
                    <div className='mx-auto px-[8px] sm:px-[16px] lg:px-[16px] md:max-w-[921px] 2xl:max-w-[1228px] text-center '>
                        <div className='bg-[#292929] text-white text-[8px] sm:text-[16px] px-4 py-2 pb-2.5 rounded-full inline text-center font-normal pt-[9px]'>Oh hey 👋🏽 <span className='font-[Lausanne] text-[11px] md:text-[15px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>0x949d48eca67b17269629c7194f4b727d4ef9e5d6</span></div>
                        <div className='mt-10 sm:mt-14'>
                            <div className='font-[Lausanne] text-5xl font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#ffd85a] to-[#e9ff7c] inline-block text-transparent bg-clip-text'>Medium <span className='text-4xl font-bold'>Risk</span></div>
                            <div className='downloadcode mt-4 max-w-[360px] max-h-[100px] items-center mx-auto rounded-[20px] border border-[#ffffff12] bg-[#1b1b1b] flex'>
                                <div className='p-[15px] bg-[#9383ff] rounded-s-[20px]'><img className="h-[70px] w-[75px] " src={eth} alt="Your Company" /></div>
                                <div className='p-4 py-4.5 pr-0 pt-5 pl-[14px] text-left'>
                                    <p className='text-left text-sm font-semibold text-white pb-1.5'>Buy Crypto Safely</p>
                                    <p className='text-[11px] text-left  text-[#9b9b9b] leading-3'>Trade on the go. Anywhere, anytime. - Get it now.</p>
                                    <p className='text-left text-xs font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text leading-3'>G<i>Y</i> Ads</p>
                                </div>
                            </div>
                        </div>
                        <div className='daily-summary font-[Inter] flex justify-between items-start mt-[100px]'>
                            <div className='max-w-[455px] py-[33px] px-[40px] rounded-[19px] bg-[#17181d] border border-[#34373F]'>
                                <p className='text-white text-lg font-semibold text-left mb-2'>Result Summary</p>
                                <p className='text-white flex gap-2 text-left text-[16px] pt-2 pl-[40px] relative'><span className='absolute left-[-1px]'>
                                    <img src={thund} />                                </span>        Today you had 20% more meetings than
                                    usual , you closed 2 tasks on two projects, but
                                    the focus was 12% lower that yesterday.</p>
                                <div className='border-y mt-[30px] border-y-black py-[25px] flex gap-10'>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Total Liquidity</p>
                                        <p className='text-[28px] pt-[3px] text-white'>2,343</p>
                                    </div>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Trading Volume(24)</p>
                                        <p className='text-[28px] pt-[3px] text-white'>79%<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>of 8 hr 0 min</span></p>
                                    </div>
                                </div>
                                <div className='border-b mt-[30px] border-b-black pb-[25px] flex gap-10'>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Circulating Supply</p>
                                        <p className='text-[28px] pt-[3px] text-white'>2,344</p>
                                    </div>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Max Supply</p>
                                        <p className='text-[28px] pt-[3px] text-white'>79%<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>of 8 hr 0 min</span></p>
                                    </div>
                                </div>
                                <div className='flex justify-between border-b border-b-black'>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img src={prog1} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[16px]'>62%</p>
                                            <p className='text-white text-left text-[14px] leading-[32px]'>Buy tax</p>
                                        </div>
                                    </div>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pl-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img className='mx-auto' src={prog2} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[28px]'>15%</p>
                                            <p className='text-white text-[14px] leading-[32px]'>Sell Tax</p>
                                        </div>
                                    </div>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pl-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img className='mx-auto' src={prog3} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[28px]'>11%</p>
                                            <p className='text-white text-[14px] leading-[32px]'>Transfer Tax </p>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex justify-between border-b border-b-black'>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img src={prog1} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[16px]'>62%</p>
                                            <p className='text-white text-left text-[14px] leading-[32px]'>Average tax</p>
                                        </div>
                                    </div>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pl-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img className='mx-auto' src={prog2} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[28px]'>15%</p>
                                            <p className='text-white text-[14px] leading-[32px]'>Highest Tax</p>
                                        </div>
                                    </div>
                                    <div className='w-[130px]'></div>


                                </div>
                                <div className='mt-[30px]'>
                                    <p className='text-[13px] leading-[32px] font-medium text-[#ffffff57] text-left'>Top Categories</p>
                                    <div className='prog-bar flex items-center justify-between'>
                                        <p className='text-[15px] text-white leading-[32px]'>59% &nbsp; Design</p>
                                        <div className='w-[50%] flex items-center justify-between'>
                                            <div className="w-[60%] bg-[#323232] rounded-full h-2 dark:bg-[#7B61FF]">
                                                <div className="bg-[#7B61FF] h-2 rounded-full w-2/6"></div>
                                            </div>
                                            <span className='text-[13px] text-[#ffffff57]'>3 hr 44 min</span>
                                        </div>
                                    </div>
                                    <div className='prog-bar flex items-center justify-between'>
                                        <p className='text-[15px] text-white leading-[32px]'>12% &nbsp; Video Conference</p>
                                        <div className='w-[50%] flex items-center justify-between'>
                                            <div className="w-[60%] bg-[#323232] rounded-full h-2 dark:bg-[#7B61FF]">
                                                <div className="bg-[#7B61FF] h-2 rounded-full w-2/6"></div>
                                            </div>
                                            <span className='text-[13px] text-[#ffffff57]'>45 min</span>
                                        </div>
                                    </div>
                                    <div className='prog-bar flex items-center justify-between'>
                                        <p className='text-[15px] text-white leading-[32px]'>10% &nbsp; Work Messaging</p>
                                        <div className='w-[50%] flex items-center justify-between'>
                                            <div className="w-[60%] bg-[#323232] rounded-full h-2 dark:bg-[#7B61FF]">
                                                <div className="bg-[#7B61FF] h-2 rounded-full w-2/6"></div>
                                            </div>
                                            <span className='text-[13px] text-[#ffffff57]'>37 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='max-w-[366px] py-[13px] px-[14px] rounded-[19px] bg-[#17181d] border border-[#34373F]'>
                                    <div className="sm:hidden">
                                        <label className="sr-only">Select a tab</label>
                                        <select id="tabs" name="tabs" className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>Day</option>
                                            <option>Company</option>
                                            <option selected>Team Members</option>
                                            <option>Billing</option>
                                        </select>
                                    </div>
                                    <div className="hidden sm:flex flex justify-between gap-[14px] pb-[20px]">
                                        <nav className="flex space-x-4 bg-[#272727] rounded-md p-1" aria-label="Tabs">
                                            <a href="#" className=" w-full bg-[#000000] text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Liquidity Pools</a>
                   
                                        </nav>
                                        <button className='w-[64px] flex justify-center items-center bg-[#272727] rounded-md'><img src={cal} /></button>

                                    </div>
                                    <div className='text-left pb-4'>
                                        <div className='flex items-end justify-between'>
                                            <div className=''>
                                                <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />Uniswap V3</p>
                                                <p className='text-[28px] text-white'>500k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>90%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>

                                                <img src={pr2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left pb-2 border-b border-b-black'>
                                        <div className='flex items-end justify-between'>
                                            <div>
                                            <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />SushiSwap</p>

                                             
                                                <p className='text-[28px] text-white'>30k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>89%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>

                                                <img src={pg4} />
                                               
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left pb-4 pt-2'>
                                    <div className='flex items-end justify-between'>
                                            <div className=''>
                                                <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />Uniswap V3</p>
                                                <p className='text-[28px] text-white'>500k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>90%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>
                                                <img src={pr2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left pb-4'>
                                    <div className='flex items-end justify-between'>
                                            <div className=''>
                                                <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />Uniswap V3</p>
                                                <p className='text-[28px] text-white'>500k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>90%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>

                                                <img src={pr3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[20px] max-w-[366px] py-[13px] px-[14px] rounded-[19px] bg-[#17181d] border border-[#34373F]'>
                                    <p className='text-white text-lg font-semibold text-left mb-2'>Prices</p>
                                    <div>
                                        <img src={graph} />
                                    </div>
                                <div className='flex items-center justify-start mt-[20px]'>
                                <p className='text-[#ffffff57] w-[50%] text-left'>Month:</p>
                                <p className='text-[#ffffff57]'>Year:</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='daily-summary font-[Inter] flex justify-between items-start mt-[100px]'>
                            <div className='max-w-[455px] py-[33px] px-[40px] rounded-[19px] bg-[#2222268a] border border-[#34373F]'>
                                <p className='text-white text-lg font-semibold text-left mb-2'>Result Summary</p>
                                <p className='text-white flex gap-2 text-left text-[16px] pt-2 pl-[40px] relative'><span className='absolute left-[-1px]'>
                                    <img src={thund} />                                </span>        Today you had 20% more meetings than
                                    usual , you closed 2 tasks on two projects, but
                                    the focus was 12% lower that yesterday.</p>
                                <div className='border-y mt-[30px] border-y-black py-[25px] flex gap-10'>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Total Liquidity</p>
                                        <p className='text-[28px] pt-[3px] text-white'>2,343</p>
                                    </div>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Trading Volume(24)</p>
                                        <p className='text-[28px] pt-[3px] text-white'>79%<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>of 8 hr 0 min</span></p>
                                    </div>
                                </div>
                                <div className='border-b mt-[30px] border-b-black pb-[25px] flex gap-10'>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Circulating Supply</p>
                                        <p className='text-[28px] pt-[3px] text-white'>2,344</p>
                                    </div>
                                    <div className='text-left'>
                                        <p className='text-[13px] text-[#ffffff57]'>Max Supply</p>
                                        <p className='text-[28px] pt-[3px] text-white'>79%<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>of 8 hr 0 min</span></p>
                                    </div>
                                </div>
                                <div className='flex justify-between border-b border-b-black'>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img src={prog1} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[16px]'>62%</p>
                                            <p className='text-white text-left text-[14px] leading-[32px]'>Buy tax</p>
                                        </div>
                                    </div>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pl-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img className='mx-auto' src={prog2} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[28px]'>15%</p>
                                            <p className='text-white text-[14px] leading-[32px]'>Sell Tax</p>
                                        </div>
                                    </div>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pl-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img className='mx-auto' src={prog3} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[28px]'>11%</p>
                                            <p className='text-white text-[14px] leading-[32px]'>Transfer Tax </p>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex justify-between border-b border-b-black'>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img src={prog1} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[16px]'>62%</p>
                                            <p className='text-white text-left text-[14px] leading-[32px]'>Average tax</p>
                                        </div>
                                    </div>
                                    <div className='progress_bars border-r border-r-black pt-[25px] pr-[20px] pl-[20px] pb-[20px] w-[130px]'>
                                        <div className='relative'>
                                            <img className='mx-auto' src={prog2} />
                                            <p className='text-[15px] text-white font-semibold absolute top-[19px] left-[28px]'>15%</p>
                                            <p className='text-white text-[14px] leading-[32px]'>Highest Tax</p>
                                        </div>
                                    </div>
                                    <div className='w-[130px]'></div>


                                </div>
                                <div className='mt-[30px]'>
                                    <p className='text-[13px] leading-[32px] font-medium text-[#ffffff57] text-left'>Top Categories</p>
                                    <div className='prog-bar flex items-center justify-between'>
                                        <p className='text-[15px] text-white leading-[32px]'>59% &nbsp; Design</p>
                                        <div className='w-[50%] flex items-center justify-between'>
                                            <div className="w-[60%] bg-[#323232] rounded-full h-2 dark:bg-[#7B61FF]">
                                                <div className="bg-[#7B61FF] h-2 rounded-full w-2/6"></div>
                                            </div>
                                            <span className='text-[13px] text-[#ffffff57]'>3 hr 44 min</span>
                                        </div>
                                    </div>
                                    <div className='prog-bar flex items-center justify-between'>
                                        <p className='text-[15px] text-white leading-[32px]'>12% &nbsp; Video Conference</p>
                                        <div className='w-[50%] flex items-center justify-between'>
                                            <div className="w-[60%] bg-[#323232] rounded-full h-2 dark:bg-[#7B61FF]">
                                                <div className="bg-[#7B61FF] h-2 rounded-full w-2/6"></div>
                                            </div>
                                            <span className='text-[13px] text-[#ffffff57]'>45 min</span>
                                        </div>
                                    </div>
                                    <div className='prog-bar flex items-center justify-between'>
                                        <p className='text-[15px] text-white leading-[32px]'>10% &nbsp; Work Messaging</p>
                                        <div className='w-[50%] flex items-center justify-between'>
                                            <div className="w-[60%] bg-[#323232] rounded-full h-2 dark:bg-[#7B61FF]">
                                                <div className="bg-[#7B61FF] h-2 rounded-full w-2/6"></div>
                                            </div>
                                            <span className='text-[13px] text-[#ffffff57]'>37 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='max-w-[366px] py-[13px] px-[14px] rounded-[19px] bg-[#2222268a] border border-[#34373F]'>
                                    <div className="sm:hidden">
                                        <label className="sr-only">Select a tab</label>
                                        <select id="tabs" name="tabs" className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>Day</option>
                                            <option>Company</option>
                                            <option selected>Team Members</option>
                                            <option>Billing</option>
                                        </select>
                                    </div>
                                    <div className="hidden sm:flex flex justify-between gap-[14px] pb-[20px]">
                                        <nav className="flex space-x-4 bg-[#272727] rounded-md p-1" aria-label="Tabs">
                                            <a href="#" className=" w-full bg-[#000000] text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Liquidity Pools</a>
                   
                                        </nav>
                                        <button className='w-[64px] flex justify-center items-center bg-[#272727] rounded-md'><img src={cal} /></button>

                                    </div>
                                    <div className='text-left pb-4'>
                                        <div className='flex items-end justify-between'>
                                            <div className=''>
                                                <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />Uniswap V3</p>
                                                <p className='text-[28px] text-white'>500k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>90%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>

                                                <img src={pr2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left pb-2 border-b border-b-black'>
                                        <div className='flex items-end justify-between'>
                                            <div>
                                            <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />SushiSwap</p>

                                             
                                                <p className='text-[28px] text-white'>30k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>89%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>

                                                <img src={pg4} />
                                               
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left pb-4 pt-2'>
                                    <div className='flex items-end justify-between'>
                                            <div className=''>
                                                <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />Uniswap V3</p>
                                                <p className='text-[28px] text-white'>500k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>90%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>
                                                <img src={pr2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left pb-4'>
                                    <div className='flex items-end justify-between'>
                                            <div className=''>
                                                <p className='text-[13px] mb-[10px] leading-[32px] font-regular text-[#ffffff57] text-left flex gap-2 items-center'><img className='w-[30px] h-[30px]' src={uniswap} />Uniswap V3</p>
                                                <p className='text-[28px] text-white'>500k<span className='text-[17px] text-[#ffffff57] pl-2 font-normal'>90%</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                            <button className="px-[15px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2 text-[12px]">Trade Now</button>

                                                <img src={pr3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[20px] max-w-[366px] py-[13px] px-[14px] rounded-[19px] bg-[#2222268a] border border-[#34373F]'>
                                    <p className='text-white text-lg font-semibold text-left mb-2'>Prices</p>
                                    <div>
                                        <img src={graph} />
                                    </div>
                                <div className='flex items-center justify-start mt-[20px]'>
                                <p className='text-[#ffffff57] w-[50%] text-left'>Month:</p>
                                <p className='text-[#ffffff57]'>Year:</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='Medium_risk pt-[100px] pb-[146px] '>
                            <div className='flex justify-between'>
                                <div className=' text-left max-w-[500px]'>
                                    <p className='font-bold text-md text-white font-[Lausanne]'>Gut für die Augen. Gut zum Mitnehmen</p>
                                    <p className='text-md text-white text-[#a1a1a6] font-medium leading-[26px] font-[Lausanne]'>Liquid Retina Display des 11" iPad Pro sieht nicht nur fantastisch aus und ist mobil, es arbeitet auch mit besonders fort­schrittlichen Techno­logien. Dazu gehören ProMotion, True Tone, ein großer P3 Farbraum und eine äußerst geringe Spiegelung. Dadurch fühlt sich alles reaktions­schnell an und sieht absolut brillant aus.</p>
                                    <div className='tokenslist mt-6 font-[Lausanne]'>
                                        <ul>
                                            <li>
                                                <p className='text-[#a1a1a6]'> <strong className='font-medium text-[17px] text-white'>Token Name:</strong><span className='pl-1.5'>Ethereum</span></p>
                                            </li>
                                            <li>
                                                <p className='text-[#a1a1a6]'> <strong className='font-medium text-[17px] text-white'>Token Symbol:</strong><span className='pl-1.5'> ETH</span></p>
                                            </li>
                                            <li>
                                                <p className='text-[#a1a1a6]'> <strong className='font-medium text-[17px] text-white'>Token Symbol:</strong><span className='pl-1.5'> Ethereum Chain</span></p>
                                            </li>
                                            <li className='mt-1'>
                                                <p className='text-[#a1a1a6]'> <strong className='font-medium text-[17px] text-white '>Contract address:</strong><span className='pl-1.5 font-semibold text-[15px]'>0x949d48eca67b17269629c7194f4b727d4ef9e5d6</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='links mt-10'>
                                        <p className='text-sm pb-2 text-[#e5e5e5] font-light'>Links</p>
                                        <ul className='flex gap-2.5'>
                                            <li className='text-[#2e90fa] text-sm font-light'><a>Etherscan ↗</a></li>
                                            <li className='text-[#2e90fa] text-sm font-light'><a>Website ↗</a></li>
                                            <li className='text-[#2e90fa] text-sm font-light'><a>Twitter ↗</a></li>
                                            <li className='text-[#2e90fa] text-sm font-light'><a>Trade ↗</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='right_medium_list pr-[20px] text-left font-[Lausanne]'>
                                    <div className='mb-[40px]'>        <h1 className='font-semibold leading-none inline-block bg-gradient-to-r bg-gradient-to-r from-[#ffd85a] to-[#e9ff7c] inline-block text-transparent bg-clip-text text-[48px]'>Medium <span className='text-[35px]'>Risk</span></h1>
                                        <p className='text-[15px] text-white text-left font-light'>Investment Risk</p>
                                    </div>
                                    <div className='mb-[40px]'>        <h1 className='font-semibold leading-none inline-block bg-gradient-to-r bg-gradient-to-r from-[#e4fe66] to-[#21fdc2] inline-block text-transparent bg-clip-text text-[48px]'>True <span className='text-[35px]'>Tone</span></h1>
                                        <p className='text-[15px] text-white text-left font-light'>Circulating Liquidity</p>
                                    </div>
                                    <div className='mb-[40px]'>        <h1 className='font-semibold leading-none inline-block bg-gradient-to-r bg-gradient-to-r from-[#14e8ad] to-[#037aff] inline-block text-transparent bg-clip-text text-[48px]'>ProMotion </h1>
                                        <p className='text-[15px] text-white text-left font-light'>Community Engagement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[700px] mx-auto border-t border-[#2222229e] pt-[60px] pb-[50px]'>
                            <button className='text-[16px] font-[Lausanne] py-[8px] px-[16px] bg-[#292929] rounded-full mb-[30px]'><span className='inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Simulation Results</span></button>
                            <div className='count-text flex justify-between py-[20px]'>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>BUY TAX</h6>
                                    <p className='text-[30px] text-white'>0.0%</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>BUY GAS</h6>
                                    <p className='text-[30px] text-white'>145,734</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>BUY LIMIT</h6>
                                    <p className='text-[30px] text-white'>$1.1K</p>
                                </div>
                            </div>
                            <div className='count-text flex justify-between py-[20px]'>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>SELL TAX</h6>
                                    <p className='text-[30px] text-white'>0.0%</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>SELL GAS</h6>
                                    <p className='text-[30px] text-white'>145,734</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>sell LIMIT</h6>
                                    <p className='text-[30px] text-white'>unkown</p>
                                </div>
                            </div>
                            <div className='count-text flex justify-between py-[20px]'>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>TRANSFER TAX</h6>
                                    <p className='text-[30px] text-white'>0.0%</p>
                                </div>
                                <div className='w-[220px] max-w-[220px] text-center'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>SOURCE CODE</h6>
                                    <div className='flex justify-center items-center gap-2 pt-3'><img className="h-[21px] w-[21px] " src={tick} alt="Your Company" /><p className='text-[16px] text-white'>OPEN SOURCE</p></div>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>

                                </div>
                            </div>
                        </div>
                        <div className='max-w-[700px] mx-auto border-t border-b border-[#2222229e] pt-[60px] pb-[50px]'>
                            <button className='text-[16px] font-[Lausanne] py-[8px] px-[16px] bg-[#292929] rounded-full mb-[30px]'><span className='inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Recent Holder Analysis</span></button>
                            <div className='count-text flex justify-between py-[20px]'>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>HOLDERS ANALYSED</h6>
                                    <p className='text-[30px] text-white'>347</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>CAN SELL</h6>
                                    <p className='text-[30px] text-white'>347</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>CAN'T SELL</h6>
                                    <p className='text-[30px] text-white'>0</p>
                                </div>
                            </div>
                            <div className='count-text flex justify-between py-[20px]'>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>SIPHONED</h6>
                                    <p className='text-[30px] text-white'>0</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>AVERAGE TAX</h6>
                                    <p className='text-[30px] text-white'>0.0%</p>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>HIGHEST TAX</h6>
                                    <p className='text-[30px] text-white'>0.0%</p>
                                </div>
                            </div>
                            <div className='count-text flex justify-between py-[20px]'>
                                <div className='w-[220px] max-w-[220px]'>
                                    <h6 className='text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]'>AVERAGE GAS</h6>
                                    <p className='text-[30px] text-white'>153,111</p>
                                </div>
                                <div className='w-[220px] max-w-[220px] text-center'>
                                </div>
                                <div className='w-[220px] max-w-[220px]'>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='footer_links font-[Lausanne] flex justify-between max-w-full px-5 mx-auto pt-[96px] pb-[20px]'>
                        <p className='text-[#ffffff80] text-xs font-medium'>©2024 Objects.</p>
                        <p className='text-[#ffffff80] text-xs font-medium ml-[-85px]'>DYOR & Invest Wisely</p>
                        <p className='text-[#ffffff80] text-xs font-medium flex items-center'>System Operational<span className='h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1'></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Credit4;