
import Footer from '../components/footer';
import Headerbeige from '../components/headerbeige';
import Homeheadernew from '../components/homeheadernew';
import mic from "../images/mic 1.svg";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
import menub from "../images/menubars.svg";
import searchi from "../images/search.svg";
import mlist from "../images/miclist.svg";
import mlist1 from "../images/miclist1.svg";
import mlist2 from "../images/miclist2.svg";
import mlist3 from "../images/miclist3.svg";
import mlist4 from "../images/miclist4.svg";
import s1 from "../images/s1.svg";
import s2 from "../images/s2.svg";
import s3 from "../images/s3.svg";
import s4 from "../images/s4.svg";
import s5 from "../images/s5.svg";
export const Geniusbeige2 = () => {
    return (
        <>
            <div className='bg-[#d3d3d3] bg-gray h-[140vh] new-h'>

                <div className="App">
                    <Headerbeige name="John" />
                </div>

                <div className='font-[inter] py-[100px]  mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0'>
                    <div className='flex justify-center gap-10 items-start mb-[100px] '>
                        <div className='side-app mt-[20px]'>
                            <div className='bg-[#1A1A1A] rounded-full px-[15px] py-[25px]'>
                                <ul>
                                    <li className='pb-[25px]'>
                                        <a href=''>
                                            <img className='h-[26px] w-[26px]'  src={s1} />
                                        </a>
                                    </li>
                                    <li className='pb-[25px]'>
                                        <a href=''>
                                            <img className='h-[26px] w-[26px]'  src={s2} />
                                        </a>
                                    </li>
                                    <li className='pb-[25px]'>
                                        <a href=''>
                                            <img className='h-[26px] w-[26px]'  src={s3} />
                                        </a>
                                    </li>
                                    <li className='pb-[25px]'>
                                        <a href=''>
                                            <img className='h-[26px] w-[26px]'  src={s4} />
                                        </a>
                                    </li>
                                    <li className='pb-[25px]'>
                                       <div className='bg-[#2E2E2E] w-[full] h-[1px]'></div>
                                    </li>
                                    <li className=''>
                                        <a href=''>
                                            <img className='h-[26px] w-[26px]'  src={s5} />
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='w-[486px] pb-[60px] py-[33px] px-[40px] rounded-[30px] bg-[#1A1A1A] border border-[#34373F]'>
                                <div className='flex items-center justify-between mb-[40px]'>
                                    <p className='text-white text-[33px] font-semibold'>Operating Budget</p>
                                    <div className=''><img src={menub} /></div>
                                </div>
                                <div className='input_mic'>
                                    <div className='relative'>
                                        <img className='h-[19px] w-[19px] absolute left-[15px] top-[12px] z-30' src={mic} />
                                        <input

                                            className='pl-[45px] font-[Lausanne] z-20 relative input_token w-[405px] h-[46px] text-[#4bbcf9] bg-[#000] text-[14px] font-medium placeholder:text-[#555555] px-[12px] py-[10px] border border-[#343434] rounded-full max-w-[460px]'
                                            placeholder='Find transaction'
                                        />
                                    </div>
                                </div>
                                <div className='mic_list pt-[30px]'>
                                    <div className='flex items-start justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[58px] h-[56px]' src={mlist} /> </div>
                                            <div className='text-left'>

                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Lexidy</p>
                                                <p className='text-[15px] leading-[32px] text-[#B1B1B1]'>Corporate structure</p>


                                                <p className='text-[13px] text-[#818181] leading-[32px]'>Legal and professional services</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>

                                            <p className='text-[18px] text-white font-medium'>$13,650</p>

                                        </div>
                                    </div>
                                    <div className='flex items-start justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[58px] h-[56px]' src={mlist1} /> </div>
                                            <div className='text-left'>

                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Paddle</p>
                                                <p className='text-[15px] leading-[32px] text-[#B1B1B1]'>Yearly users access</p>


                                                <p className='text-[13px] text-[#818181] leading-[32px]'>Subscriptions and licenses</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>

                                            <p className='text-[18px] text-white font-medium'>$8,635</p>

                                        </div>
                                    </div>
                                    <div className='flex items-start justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[58px] h-[56px]' src={mlist2} /> </div>
                                            <div className='text-left'>

                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Google</p>
                                                <p className='text-[15px] leading-[32px] text-[#B1B1B1]'>Cloud services</p>


                                                <p className='text-[13px] text-[#818181] leading-[32px]'>Infrastructure resources</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>

                                            <p className='text-[18px] text-white font-medium'>$4,242</p>

                                        </div>
                                    </div>
                                    <div className='flex items-start justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[58px] h-[56px]' src={mlist3} /> </div>
                                            <div className='text-left'>

                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>InnoStar</p>
                                                <p className='text-[15px] leading-[32px] text-[#B1B1B1]'>Strategy and promoting</p>


                                                <p className='text-[13px] text-[#818181] leading-[32px]'>Marketing and advertising</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>

                                            <p className='text-[18px] text-white font-medium'>$2,530</p>

                                        </div>
                                    </div>
                                    <div className='flex items-start justify-between pb-[15px]'>
                                        <div className='flex justify-start gap-[20px] '>
                                            <div> <img className='w-[58px] h-[56px]' src={mlist4} /> </div>
                                            <div className='text-left'>

                                                <p className='text-[20px] leading-[32px] font-semibold text-[#ffffff] text-left flex gap-2 items-center'>Brown Forest</p>
                                                <p className='text-[15px] leading-[32px] text-[#B1B1B1]'>Department revamp</p>


                                                <p className='text-[13px] text-[#818181] leading-[32px]'>Research and development</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>

                                            <p className='text-[18px] text-white font-medium'>$3,304</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-[14px] pb-[20px] absolute left-0 right-0 bottom-[-40px]">
                                        <nav className="flex space-x-4 bg-[#292929] rounded-full p-2" aria-label="Tabs">
                                            <a href="#" className=" w-full bg-[#3C3C3C] text-white rounded-full px-7 py-3 text-[14px] font-medium" aria-current="page">Date</a>
                                            <a href="#" className=" w-full  text-[#878787] rounded-full px-7 py-3 text-[14px] font-medium" aria-current="page">Category</a>
                                            <a href="#" className=" w-full  text-[#878787] rounded-full px-7 py-3 text-[14px] font-medium" aria-current="page">Account</a>

                                        </nav>

                                    </div>
                        </div>
                        <div className='mt-[20px] w-[296px] p-[15px] rounded-[10px] bg-[#1A1A1A] border border-[#34373F]'>
                            <p className='text-[28px] text-white'>drinks<span className='text-[#878787] pl-2'>meals</span></p>
                            <div className=" flex justify-start">
                                        <ul className='flex justify-end pt-[10px]'>
                                            <li><button className=' text-[15px] font-[Lausanne] py-[4px] px-[6px] font-semibold rounded-[6px] text-[#000] bg-[#fff] hover:bg-[#fff]'>soft</button></li>
                                            <li><button className='ml-[8px] text-[15px] font-[Lausanne] py-[4px] px-[6px] font-semibold rounded-[6px] text-[#878787] hover:bg-[#fff]'>spirits</button></li>
                                            <li><button className='ml-[8px] text-[15px] font-[Lausanne] py-[4px] px-[6px] font-semibold rounded-[6px] text-[#878787] hover:bg-[#fff]'>wine</button></li>
                                            <li><button className='ml-[8px] text-[15px] font-[Lausanne] py-[4px] px-[6px] font-semibold rounded-[6px] text-[#878787] hover:bg-[#fff]'>beer</button></li>                                        </ul>
                                    </div>
                                    <div className='relative mt-[20px]'>
                           <img className='brightness-[0.5] h-[16px] w-[16px] absolute left-[13px] top-[16px] z-30' src={searchi} />
                            <input
                            
                                className='pl-[40px] font-[Lausanne] z-20 relative input_token w-full h-[50px] text-[#4bbcf9] bg-[#000] text-sm font-medium placeholder:text-[#555555] px-[12px] py-[8px] border border-[#343434] rounded-lg max-w-[460px]'
                                placeholder='Search...'
                         
                            />
                        </div>
                        </div>
                    </div>

                    <div className='fixed bottom-0 left-0 right-0 footer-icons text-center mt-44 mb-2'>
                        <div className='mx-auto max-w-[370px] max-h-[82px] border border-[#404043] rounded-3xl bg-[#212125] p-[16px] px-[10px]  backdrop-sepia flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#779ef9] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[-2px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Ethereum</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </div>
                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#f1b90c] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[35px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Binance Smart Chain</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[5px]" src={f2} alt="eth" /></div>

                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#8147e5] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[137px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Polygon</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f3} alt="eth" /></div>
                                <div className='w-[2px] h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[233px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Compare</p>
                                        </div>
                                    </div>
                                    <img className="h-[28px] w-[auto] p-[4px]" src={f4} alt="eth" /></div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[0px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Compare</p>
                                        </div>
                                    </div>
                                   </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Geniusbeige2;