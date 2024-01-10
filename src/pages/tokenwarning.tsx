
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import danger from '../images/danger.svg';
export const Tokenwarning = () => {
    return (
        <>
            <div className='main h-screen'>
                <div className="App">
                    <Headerfull name="John" />

                </div>

                <div className='h-full'>
                    <div className='h-full w-full flex justify-center items-center mx-auto px-[20px] sm:px-[16px] lg:px-[16px] w-12/12 md:w-11/12 text-center'>
                            <div className='mt-[-30px] border border-[#34373F] bg-[#2222268a]  w-full sm:w-8/12 xl:w-5/12 rounded-2xl p-[20px] text-center'>
                               <div className='flex items-center justify-center'>
<div className='relative'>
<img className='h-[40px] w-[40px]' src={dai} /><span className='absolute top-[8px] left-[40px] text-[#B0B0B0] pr-1 font-[400] pl-[10px]'>DAI</span>
</div>                               </div>
                               <div className='mt-[10px] text-[#FF7676] bg-[#ff76764d] border-0  rounded-md inline-flex items-center gap-2 px-[8px] py-[3px] font-medium text-[12px]'>Warning<svg className="h-[13px] w-[13px] text-[FF7676] mt-[2px]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 9v2m0 4v.01" />  <path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" /></svg></div>
                              <div className='mt-[20px] relative option-content rounded-2xl w-full p-0.5 '>
                              <div className='border-[1px] border-[#424242] bg-[#181819] rounded-2xl p-6'>
<p className='text-[14px] md:text-[15px] text-[#E7E8DE] font-normal'>This token isn't traded on leading U.S. centralized exchanges or frewuently swapped on uniswap. Always conduct your own research before trading. <br /><span className='text-[#c59eb8] font-[400]'>Learn more </span></p>
                                <p className='mt-[20px] inline-flex items-center  gap-2 justify-center bg-[#b995ad6e] px-[10px] py-[4px] rounded-lg font-medium text-[14px]'><span className='text-[12px] md:text-[14px] text-[#c59eb8]'>https://etherscan.io/token7634h841c</span>
                                <svg className="h-4 w-4 text-[#c59eb8]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg>
                                <svg className="h-4 w-4 text-[#c59eb8]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                </p>
                               <div className='mt-[20px]'>
                               <button className='w-[100%] md:w-[80%] rounded-lg text-[16px] font-medium bg-[#424242] py-[13px] gradient_btn border'><span className='text-gradient '>I Understand</span></button>
                                <button className='w-[100%] md:w-[80%] rounded-lg text-[16px] font-medium  py-[13px]'><span className='text-[#E7E8DE] '>cancel</span></button>
                               </div>

                                </div>
                              </div>
                                

                            </div>


{/*               
                        <div className="App">
                    <Footerlinksfixed name="John" />
                </div> */}
                        
                 









                    </div>
                </div>
            </div>




        </>
    )
}
export default Tokenwarning;