
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Dropfinal from '../components/dropdownfinalstep';
import Headerfull from '../components/headerfull';
import { Loader } from '../components/Loader';
import eth from "../images/eth.svg";
import f1 from "../images/f11.png"
import f2 from "../images/f21.png";
import f3 from "../images/f31.png";
import f4 from "../images/Design_Colored 16x16.svg";

export const Genius4 = () => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
   
    return (
        <>
            <div className='main h-screen'>
                <div className="App">
                    <Headerfull name="John" />
                </div>
              <div className='pt-[200px] md:pt-[120px]'>
              <div className='mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0 text-center'>
                    <div className=' max-w-[600px] mx-auto text-center'>
                        <p className='relative  font-[Lausanne] leading-none pr-[30px] pl-[20px] mb-[-1px] sm:text-[120px] text-[60px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Objects</p>
                        <p className='text-sm font-light leading-5 tracking-[.2px] text-[#d8d8d8] mt-[16px] mb-[20px]'>Objects's scanner rigorously evaluates key parameters to provide an initial investment risk analysis for your chosen token. It conducts extra checks to minimize false results and enhance accuracy</p>
                        <div className='relative'>
                            <div
                                className={`hidden sm:flex absolute top-[-1px] right-[69px] sm:w-[462px]  h-[52px] z-10 bg_g mb-[26px] inline-block p-[1px] bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] rounded-lg ${isFocused ? 'opacity-100' : 'opacity-0'}`}
                            ></div>
                            <div className='absolute right-[5px] md:right-[75px] top-[3px] z-[99] bg-[#1a1b1e]'>       <Dropfinal /></div>
                            <img className="h-[25px] w-[25px] absolute left-[10px] sm:left-[83px] top-[12px] z-30" src={f2} alt="eth" />
                            <input
                            
                                className='border-[#4bbcf9] sm:border-1 pl-[40px] sm:pl-[50px] font-[Lausanne] z-20 relative input_token w-full  sm:w-[460px] h-[50px] text-[#8e8e91] bg-[#1A1B1E] text-sm sm:text-lg font-medium placeholder:text-[#8e8e91] px-[12px] py-[8px] border sm:border-[#343434] rounded-lg max-w-[460px]'
                                placeholder='Enter Token Address'
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='mt-[20px]'>
                            <button className='w-[200px] md:max-w-[300px] md:w-[250px] sm:w-[300px] h-[46px]  md:h-[56px] bg-[#4bf8ff75] text-[#0fedf5] px-[20px] sm:px-[40px] py-[9px] text-base rounded-xl font-bold'>Check Credibility</button>
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
export default Genius4;