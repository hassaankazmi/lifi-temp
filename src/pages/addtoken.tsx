
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import fuel from '../images/fuel 1.svg';
import uni from '../images/uni.png';
export const Addtoken = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <Headerfull name="John" />

                </div>

                <div className='pt-[100px] md:pt-[140px]'>
                    <div className='mx-auto px-[20px] sm:px-[16px] lg:px-[16px] w-12/12 md:w-11/12 text-center'>
                        <div className='option box mt-8 pb-[100px] mt-[0px] flex gap-10 justify-center items-start'>
                            <div className='border border-[#34373F] bg-[#2222268a]  w-full min-h-[500px] sm:w-8/12 xl:w-5/12 rounded-2xl p-[10px] sm:p-5'>
                                <div className='choose head  md:pt-0 pt-[3px] pb-[15px] md:pb-5'>
                                    <div className='flex gap-4 items-center justify-between'>
                                    <svg className="h-7 w- text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                                        <p className='text-left text-[#E7E8DE] text-md font-semibold ml-[-25px]'>Add a Token</p>
                                  <div></div>
                                  </div>
                                  <div className="relative my-[20px]"> <svg className="text-[#E7E8DE] h-[20px] w-[20px] absolute left-[15px] top-[15px] z-30 brightness-50"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                                  <input className="pl-[45px] font-[Inter]  input_token w-full h-[50px] text-[#E7E8DE] bg-[#1A1B1E] text-md font-light placeholder:text-[#8e8e91] px-[12px] py-[8px] border border-[#343434] rounded-xl" placeholder="Search"/></div>
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
export default Addtoken;