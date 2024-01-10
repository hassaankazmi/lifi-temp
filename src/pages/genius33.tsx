
import { useState } from 'react';
import Footer from '../components/footer';
import Header2 from '../components/header2';
import eth from "../images/eth.svg";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";

export const Genius33 = () => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <>
            <div className='main'>

                <div className="App">
                    <Header2 name="John" />
                </div>

                <div className='mx-auto px-5 sm:px-4 lg:px-4 w-11/12 py-0 text-center h-screen h-full w-full flex justify-center items-center flex-col'>
                <div className=' max-w-[600px] mx-auto text-center relative top-[-28px]'>
                <p className='relative  font-[Lausanne] leading-none pr-[30px] pl-[20px] mb-[-1px] sm:text-[120px] text-[52px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Objects</p>
<p className='text-sm font-light leading-5 tracking-[.2px] text-[#d8d8d8] mt-[16px] mb-[20px]'>Objects's scanner rigorously evaluates key parameters to provide an initial investment risk analysis for your chosen token. It conducts extra checks to minimize false results and enhance accuracy</p>
<div className='relative'>
                            <div
                                className={`sm:flex hidden absolute top-[-1px] right-[69px] w-[462px] h-[52px] z-10 bg_g mb-[26px] inline-block p-[1px] bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] rounded-xl ${isFocused ? 'opacity-100' : 'opacity-0'}`}
                            ></div>
                            <input
                                className='font-[Lausanne] z-20 relative input_token w-full md:w-[460px] h-[50px] text-[#8e8e91] bg-[#27272a] text-lg font-medium placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#505051] rounded-xl max-w-[460px]'
                                placeholder='Enter Token Address'
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
               
                <div className='mt-[20px]'>
                    <button className='max-w-[300px] w-[200px] md:w-[300px] h-[46px] md:h-[56px] bg-pink text-white px-[10px] py-[9px] text-base rounded-xl font-bold '>Check Credibility</button>
                </div> 
                </div>
                    
               
                <div className='fixed bottom-0 left-0 right-0 footer-icons text-center mt-44 mb-2'>
                        <div className='mx-auto max-w-[304px] max-h-[82px] border border-[#404043] rounded-3xl bg-[#17181d54] p-[16px] px-[10px]  backdrop-blur-[2px] flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#779ef9] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Ethereum</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#f1b90c] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='w-[170px] absolute top-[-65px] left-[-45px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Binance Smart Chain</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[5px]" src={f2} alt="eth" /></div>

                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#8147e5] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[3px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Polygon</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f3} alt="eth" /></div>
                                <div className='w-[2px] h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
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
        </>
    )
}
export default Genius33;