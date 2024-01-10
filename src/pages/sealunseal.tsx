
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


export const Sealunseal = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <Headerfull name="John" />
                </div>
                <div className='max-w-[1200px] mx-auto pt-[100px] md:pt-[150px] px-[20px] pb-[100px] font-[Inter] text-[#E7E8DE]'>
                    <div className='flex md:flex-row flex-col gap-[28px] justify-center items-start'>
                        <div className='rounded-[10px] bg-[#272727] p-[17px] w-[370px] md:w-[400px]'>
                            <div className='flex justify-between items-center'><p className='text-[#E7E8DE] font-[600] text-[14px]'>Unseal Pool</p>
                                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                            </div>
                            <div className='mt-[23px] bg-[#2F2F2F] rounded-md py-[6px] px-[10px] flex justify-between items-center'>
                                <p className='text-[12px]'>Linear1</p>
                                <div className="rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]"><p className="text-[12px] font-[600] font-[Inter] text-[#E7E8DE]">L90..09</p></div>

                            </div>
                            <div className='mt-[25px]'>
                                <p className='text-[14px]'>Solve X</p>
                                <div className='flex justify-end gap-[12px] items-center'>
                                    <span className='text-[18px] text-[#8B6BE3] font-[500]'>X=</span>
                                    <textarea className='w-[75%] text-[10px] font-[400] bg-[#181819] border border-[#323232] h-[175px] rounded-[6px] p-[15px] placeholder:text-[#FFFFFFA3] focus:ring-0 focus:border-[#323232] dark:bg-transparent dark:border-[#323232]' placeholder='Type X (X=Information)'>

                                    </textarea>
                                </div>
                                <div className='mt-[11px]'>
                                    <input className='text-[11px] p-[12px] w-full placeholder:text-[#FFFFFF57] border border-[#323232] border border-[#323232] rounded-[6px] bg-[#212121] focus:outline-0 ' placeholder='Withdrawal wallet address' />
                                    <button className='mt-[11px] uppercase rounded-full p-[11px] text-[12px] text-[#8B6BE3] font-[600] border border-[#8B6BE3] w-full'>UNSEAL</button>
                                    <p className='mt-[16px] text-center text-[#E7E8DE8A] text-[12px] text-[500]'>Unseal Fees<span className='text-[#E7E8DE] pl-[13px]'>0.001 ETH (2USD)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[10px] bg-[#272727] p-[17px] w-[370px] md:w-[400px]'>
                            <div className='flex justify-between items-center'><p className='text-[#E7E8DE] font-[600] text-[14px]'>Seal Pool</p>
                                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                            </div>
                            <div className='mt-[23px] bg-[#2F2F2F] rounded-md py-[6px] px-[10px] flex justify-between items-center'>
                                <p className='text-[12px]'>Pool Name</p>
                                <div className="rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]"><p className="text-[12px] font-[600] font-[Inter] text-[#E7E8DE]">Auto-Ge</p></div>

                            </div>
                            <div className='mt-[25px]'>
                                <p className='text-[14px]'>Seal “X=Information” with Ethereum or Dai </p>
                                <div className='mt-[21px] flex justify-between gap-[12px] items-start'>
                                    <div className='w-[45%] text-[10px] text-[#E7E8DE] font-[500] bg-[#212121] border border-[#323232] rounded-[6px] p-[9px] flex justify-between items-center'><p>Choose amount</p><img className='w-[25px] h-[25px] border  border-[#8B6BE3]' src={dai} /></div>
                                    <div className=' w-[55%] text-[12px] font-[400] bg-[#212121] border border-[#323232] h-[175px] rounded-[6px] p-[15px] placeholder:text-[#FFFFFFA3]'>
                                        <div className='flex flex-col justify-between text-[10px] h-full'>
                                            <p>Type X (X=Information)</p>
                                            <div className='text-[#FF7676] '><p>Important:</p>
                                                <ul>
                                                    <li>
                                                        “X” can be any text you choose
                                                    </li>
                                                    <li>Save “X” safely as otherwise the seal can not be undone. If you lose “X” the pool can not be unsealed</li>
                                                </ul></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[11px] flex justtify-between gap-[12px]'>
                                    <div className='w-[45%] text-[10px] text-[#E7E8DE] font-[500] bg-[#212121] border border-[#323232] rounded-[6px] p-[9px] flex justify-between items-center'>
                                        <p>Timeless</p>
                                        <div className='flex items-center gap-2'>
                                            <div className="flex items-center">
                                                <input id="default-checkbox" type="checkbox" value="" className="h-[13px] w-[13px] text-blue-600 bg-transparent border-[#5E5E5E] rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-1 font-medium text-[#5E5E5E] text-[10px]">Yes</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="default-checkbox" type="checkbox" value="" className="h-[13px] w-[13px] text-blue-600 bg-transparent border-[#5E5E5E] rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-1  font-medium text-[#5E5E5E] text-[10px]">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[55%] text-[10px] text-[#E7E8DE] font-[500] bg-[#212121] border border-[#323232] rounded-[6px] p-[9px] flex justify-between items-center'>
                               
                                        <div className='flex items-center gap-2'>
                                            <div className="flex items-center">
                                                <input id="default-checkbox" type="checkbox" value="" className="h-[13px] w-[13px] text-blue-600 bg-transparent border-[#5E5E5E] rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-1  font-medium text-[#5E5E5E] text-[10px]">Burn</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="default-checkbox" type="checkbox" value="" className="h-[13px] w-[13px] text-blue-600 bg-transparent border-[#5E5E5E] rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="ms-1  font-medium text-[#5E5E5E] text-[10px]">Withdraw</label>
                                            </div>
                                            <span className='text-[#5E5E5E]'>in</span>
                                            <span className='text-[#E7E8DE]'>50 Days </span>
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-[11px]'>
                                    <input className='text-[12px] p-[12px] w-full text-[#E7E8DE] placeholder:text-[#E7E8DE] border border-[#323232] border border-[#323232] rounded-[6px] bg-[#212121] focus:outline-0' placeholder='Pool Note (Note to the world)' />
                                    <textarea className='h-[95px] mt-[11px] text-[12px] p-[12px] w-full text-[#E7E8DE] placeholder:text-[#E7E8DE] border border-[#323232] border border-[#323232] rounded-[6px] bg-[#212121] focus:ring-0 focus:border-[#323232] dark:bg-transparent dark:border-[#323232]' placeholder='Pool Letter (Letter to the recipient)'>

                                    </textarea>
                                    <button className='mt-[11px] uppercase rounded-full p-[11px] text-[12px] text-[#8B6BE3] font-[600] border border-[#8B6BE3] w-full'>SEAL</button>
                                    <p className='mt-[16px] text-center text-[#E7E8DE8A] text-[12px] text-[500]'>Seal Fees<span className='text-[#E7E8DE] pl-[13px]'>0.001 ETH (2USD)</span></p>
                                </div>
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
export default Sealunseal;