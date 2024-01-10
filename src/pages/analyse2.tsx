
import { useEffect, useState } from 'react';
import Dropfinal from '../components/dropdownfinalstep';
import Headerfull from '../components/headerfull';
import f2 from "../images/f21.png";
import Footerlinksfixed from '../components/footerlinks';
export const Analyse2 = () => {


    
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
              <div className='h-full'>
              <div className='h-full flex justify-center items-center mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0 text-center'>
                    <div className='md:mt-[-30px] max-w-[600px] mx-auto text-center'>
                        <p className='relative  font-grok leading-none pr-[30px] pl-[20px] mb-[-1px] sm:text-[100px] pb-[10px] text-[60px] font-bold text-gradient inline'>Analyse</p>
                        <p className='text-sm font-light leading-5 tracking-[.2px] text-[#E7E8DE] mt-[16px] mb-[20px]'>Objects's scanner rigorously evaluates key parameters to provide an initial investment risk analysis for your chosen token. It conducts extra checks to minimize false results and enhance accuracy</p>
                        <div className='relative'>
                            <div
                                className={`hidden sm:flex absolute top-[-1px] right-[69px] sm:w-[462px]  h-[57px] z-10 bg_g mb-[26px] inline-block p-[1px] back-gradient rounded-lg ${isFocused ? 'opacity-100' : 'opacity-0'}`}
                            ></div>
                            <div className='absolute right-[5px] md:right-[75px] top-[5px] z-[99] bg-[#1d1d22]'>       <Dropfinal /></div>
                            {/* <img className="h-[25px] w-[25px] absolute left-[10px] sm:left-[83px] top-[15px] z-30" src={f2} alt="eth" /> */}
                            <input
                            
                                className='border-[#81bac8] sm:border-1 pl-[15px]  z-20 relative input_token w-full  sm:w-[460px] h-[55px] text-[#8e8e91] bg-[#1d1d20] text-[15px] font-medium placeholder:text-[#8e8e91] px-[12px] py-[8px] border sm:border-[#343434] rounded-lg max-w-[460px]'
                                placeholder='Enter Token Address'
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='mt-[20px]'>
                            <button className='w-[220px] md:max-w-[300px] md:w-[250px] sm:w-[300px] h-[46px]  md:h-[56px] bg-[#424242] border border-[#38a3bf] text-[#38a3bf] px-[20px] sm:px-[40px] py-[9px] text-base rounded-xl font-bold'>Check Credibility</button>
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
export default Analyse2;