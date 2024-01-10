// src/MyComponent.tsx
import React from 'react';
import f1 from "../images/f11.png"
import f2 from "../images/f21.png";
import f3 from "../images/f31.png";
import f4 from "../images/Design_Colored 16x16.svg";
interface MyComponentProps {
    name: string;
}

const Footerlinksnotfixed: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <>  
    <div className=' bottom-0 left-0 right-0 footer-icons text-center mt-[50px] mb-2'>
                        <div className='mx-auto max-w-max md:max-w-[304px] max-h-[82px] border border-[#404043] rounded-2xl md:rounded-3xl bg-[#2222268a] p-[5px] md:p-[16px] md:px-[10px]  backdrop-blur-[2px] flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-0 md:gap-2'>
                                <a href='/swap' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[-7px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p className='text-[12px] md:text-[14px]'>Swap</p>
                                        </div>
                                    </div>
                                    <img className="h-[35px] md:h-[50px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </a>
                                <a href='/analyse' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[-10px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p className='text-[12px] md:text-[14px]'>Analyse</p>
                                        </div>
                                    </div>
                                    <img className="h-[45px] md:h-[55px] w-[auto] p-[5px]" src={f2} alt="eth" /></a>                                
                                <a href='/buy' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[0px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p className='text-[12px] md:text-[14px]'>Buy</p>
                                        </div>
                                    </div>
                                <img className="h-[15px] w-[30px] md:h-[17px] md:w-[36px] p-[4px]" src={f3} alt="eth" /></a>
                                <div className='w-[2px] h-[35px] md:h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <a href='/compare' className='relative eth w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[15px] md:rounded-[22px] bg-[#424242] flex items-center justify-center border-[3px] md:border-[7px] border-[#1d1d20] hover:border-[#000000] cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] md:top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p className='text-[12px] md:text-[14px]'>Compare</p>
                                        </div>
                                    </div>
                                <img className="h-[23px] md:h-[28px] w-[auto] p-[4px]" src={f4} alt="eth" /></a>

                            </div>

                        </div>
                    </div>







                    
        </>
    );
};

export default Footerlinksnotfixed;
