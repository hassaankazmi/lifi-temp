
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import fuel from '../images/fuel 1.svg';
import gp from "../images/gp.svg";
import dai2 from "../images/dai.png";
import dai1 from "../images/dai1.svg";
import glink1 from "../images/greenlink.png";


export const Linear1 = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <Headerfull name="John" />
                </div>
                <div className='max-w-[1420px] mx-auto pt-[150px] px-[20px] pb-[100px] font-[Inter]'>
               <div className='text-center mb-[40px]'>
               <div className='flex justify-center gap-3 '>
                                        <div className='flex items-center justify-center gap-[10px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[40px] font-[500] text-[#8B6BE3] ml-[5px]'>Linear1</span>
                                            <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px] ml-[10px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                        </div>
                                     
                                    </div>
                                    <p className='text-[22px] text-[#717171]'>For my dear Kids</p>
               </div>
                    <div className='bg-[#272727] rounded-[22px] p-[30px]'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[28px] text-[#E7E8DE]'>Maker</p>
                            <a className="bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center">unseal</a>
                        </div>
                        <div className='mt-[35px] bg-[#000000] inline-flex items-center justify-between gap-[40px] p-[15px] rounded-2xl'><p className='text-[#E7E8DE] text-[19px]'>Address</p>
                            <p className='text-[#767676] text-[16px] font-[500]'>0x9er0..4rr9</p>
                        </div>
                        <span className='text-[#717171] text-[12px] pl-[20px]'>Open in explorer</span>

                    </div>
                    <div className='flex items-start justify-between gap-[10px]'>
                        <div className='w-[50%] mt-[10px] bg-[#272727] rounded-[22px] p-[30px]'>
                            <div className='flex justify-between items-center'><p className='text-[#E7E8DE]'>Treasure Liquidity</p>
                            <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            
                                        </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='text-[40px] text-[#E7E8DE]'>$500,000,50</p>
                                <div className='mt-[10px] flex items-center gap-1 bg-[#2A2A2A] rounded-[3px] px-2 py-1'><p className='text-[11px] text-[#E7E8DE]'>3.2%</p> <svg className="h-3 w-3 text-[#54B35E]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg></div>
                            </div>
                            <div className='mt-[30px]'>
                                <ul className='flex items-center gap-1'>
                                    <li className='text-[10px] text-[#898989] px-[13px] py-[7px]'>
                                    24 Hours
                                    </li>
                                    <li className='text-[10px] text-[#898989] px-[13px] py-[7px]'>
                                   1 Week
                                    </li>
                                    <li className='text-[10px] text-[#898989] px-[13px] py-[7px]'>
                                  1 Month
                                    </li>
                                    <li className='text-[10px] text-[#000000] px-[13px] py-[7px] rounded-md bg-[#ffffff] '>
                               1 Year
                                    </li>
                                    <li className='text-[10px] text-[#898989] px-[13px] py-[7px]'>
                          All
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-[30px]'>
                            <img src={gp} className='' />
                            </div>
                        </div>
                        <div className='w-[50%] mt-[10px] bg-[#272727] rounded-[22px] p-[30px]'>
                            <div className='flex justify-between items-center'><p className='text-[#E7E8DE] text-[28px]'>Maker’s letter:</p>
                         
                            </div>
                            <div className='mt-[25px] p-[30px] rounded-[12px] bg-[#8B6BE3] min-h-[350px]'>
                                <p className='text-[#E7E8DE] text-[34px]'>I love you my dear kids!</p>
                            </div>
                           
                         
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute z-10 bottom-0 w-full footer_links font-[Inter] flex justify-between items-center max-w-full px-[20px] md:px-[30px] mx-auto pt-[33px] py-[20px]">
                <p className="text-[#919193] text-xs font-medium">©2024 Objects.</p>

                <p className="text-[#919193] text-xs font-medium flex items-center">System Operational<span className="h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1"></span></p>
            </div>



        </>
    )
}
export default Linear1;