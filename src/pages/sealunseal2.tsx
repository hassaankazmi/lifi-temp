
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import eth from '../images/eth.png';
import Footerlinksfixed from '../components/footerlinks';
import fuel from '../images/fuel 1.svg';
import gp from "../images/gp.svg";
import dai2 from "../images/dai.png";
import dai1 from "../images/dai1.svg";
import glink1 from "../images/greenlink.png";


export const Sealunseal2 = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <Headerfull name="John" />
                </div>
                <div className='max-w-[1200px] mx-auto pt-[100px] md:pt-[150px] px-[20px] pb-[100px] font-[Inter] text-[#E7E8DE]'>
                    <div className='flex md:flex-row flex-col gap-[10px] lg:gap-[28px] justify-center items-start'>
                        <div className='rounded-[10px] bg-[#2222268a] border border-[#34373F] p-[17px] w-[370px] w-full md:w-[500px]'>
                            <div className='flex justify-between items-center'><p className='text-[#E7E8DE] font-[600] text-[16px]'>Unseal Treasure</p>
                                <svg className="h-5 w-5 text-[#676767]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                            </div>
                            <div className='mt-[23px] bg-[#2F2F2F] rounded-md py-[6px] px-[10px] flex justify-between items-center'>
                                {/* <div className='text-[13px] text-[12px] p-[0px] w-full placeholder:text-[#E7E8DE] border border-transparent rounded-[6px] bg-transparent focus:outline-0 '> </div> */}
                                <div className="rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]"><p className="text-[13px] font-[600] font-[Inter] text-[#E7E8DE]">Linear1</p></div>

                                <div className="rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]"><p className="text-[13px] font-[600] font-[Inter] text-[#E7E8DE]">L90..09</p></div>

                            </div>
                            <div className='mt-[25px]'>
                                <p className='text-[16px]'>Solve X</p>
                                <div className='flex justify-end gap-[12px] items-center'>
                                    <span className='text-[18px] text-[#8B6BE3] font-[500]'>X=</span>
                                    <textarea className='w-[75%] text-[13px] font-[400] bg-[#181819] border border-[#323232] h-[175px] rounded-[6px] p-[15px] placeholder:text-[#FFFFFFA3] focus:ring-0 focus:border-[#323232] dark:bg-transparent dark:border-[#323232]' placeholder='Type X (X=Information)'>

                                    </textarea>
                                </div>
                                <div className='mt-[11px]'>
                                    <input className='text-[12px] p-[12px] w-full placeholder:text-[#FFFFFF57] border border-[#323232] border border-[#323232] rounded-[6px] bg-[#212121] focus:outline-0 ' placeholder='Withdrawal wallet address' />
                                    <button className='mt-[11px] uppercase rounded-full p-[11px] text-[13px] text-[#8B6BE3] font-[600] border border-[#8B6BE3] w-full'>UNSEAL</button>
                                    <p className='mt-[16px] text-center text-[#E7E8DE8A] text-[13px] text-[500]'>Unseal Fees<span className='text-[#E7E8DE] pl-[13px]'>0.001 ETH (2USD)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[10px] bg-[#2222268a] border border-[#34373F] p-[17px] w-full md:w-[500px]'>
                            <div className='flex justify-between items-center'><p className='text-[#E7E8DE] font-[600] text-[16px]'>Seal Treasure</p>
                                <svg className="h-5 w-5 text-[#676767]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                            </div>
                            <div className='mt-[23px] bg-[#2F2F2F] rounded-md py-[6px] px-[10px] flex justify-between items-center'>
                            <input className='text-[13px] text-[12px] p-[0px] w-full placeholder:text-[#E7E8DE] border border-transparent rounded-[6px] bg-transparent focus:outline-0 ' placeholder='Pool Name ' />

                                <div className="rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]"><p className="text-[13px] font-[600] font-[Inter] text-[#E7E8DE] whitespace-nowrap">Auto-Ge</p></div>

                            </div>
                            <div className='mt-[25px]'>
                                <p className='text-[16px]'>Seal “X=Information” with Ethereum or Dai </p>
                                <div className='mt-[21px] flex md:flex-row flex-col justify-between gap-[12px] items-start'>
                                    <div className='w-full md:w-[45%] text-[12px] lg:text-[13px] text-[#E7E8DE] font-[500] bg-[#212121] border border-[#323232] rounded-[6px] p-[9px] flex justify-between items-center'>
                                        <p>Choose amount</p>
                                        <button id="dropdownDefaultButtoncoin" data-dropdown-toggle="dropdowncoin" className="lg:text-[12px] text-[12px] flex justify-between  text-[#9b9b9b] leading-[20px] bg-transparent  focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-[0px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-transparent border border-transparent hover:border-transparent" type="button">
                                        <img className='w-[25px] h-[25px] border  border-[#40C5E8]' src={dai} />
                                        <svg className="w-2.5 h-2.5 ms-2 lg:ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>


                                    <div id="dropdowncoin" className="w-[110px] border border-[#34373F] z-10 hidden bg-[#212121] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="text-left py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtoncoin">
                                            <li className='hover:bg-[#424242]'>
                                                <a href="#" className="text-[12px] text-[#E7E8DE] block px-3 py-1 flex items-center gap-2 ">  <img className='w-[25px] h-[25px]' src={dai} />Dai</a>
                                            </li>
                                            <li className='hover:bg-[#424242]'>
                                                <a href="#" className="text-[12px] text-[#E7E8DE] block px-3 py-1 flex items-center gap-2">  <img className='w-[25px] h-[25px]' src={eth} />Etherum</a>
                                            </li>


                                        </ul>
                                    </div>
                                        </div>
                                    <div className='w-full md:w-[55%]'>
                                <div className=' mt-[11px] md:mt-0 text-[12px] lg:text-[13px] font-[400] bg-[#212121] border border-[#323232] h-[200px] rounded-[6px] pt-[10px] p-[15px] placeholder:text-[#FFFFFFA3]'>
                                        <div className='flex flex-col justify-between text-[12px] lg:text-[13px] h-full'>
                                            <textarea placeholder='Type X (X=Information)' className='resize-none p-0 text-[13px] bg-transparent border-transparent placeholder:text-[#FFFFFFA3] focus:ring-0 focus:border-transparent dark:bg-transparent dark:border-transparent'></textarea>
                                     
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
                                </div>
                                <div className='mt-[11px] flex lg:flex-row flex-col justtify-between gap-[12px]'>
                                    <div className='w-full lg:w-[45%] text-[12px] lg:text-[13px] text-[#E7E8DE] font-[500] bg-[#212121] border border-[#323232] rounded-[6px] p-[9px] flex justify-between items-center'>
                                        <p>Timeless</p>
                                        <div className='flex items-center gap-2'>
                                        <div className="flex items-center">
                                        <input id="checked-checkbox" type="checkbox" className=" bg-transparent input-shadow h-[13px] w-[13px] text-[#6b8ada]  border-[#514e4e] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" value="" />
    <label className="ms-1 font-medium text-[#5E5E5E] text-[13px]">Yes</label>
</div>
                                            <div className="flex items-center">
                                                <input id="default-checkbox" type="checkbox" value="" className="bg-transparent input-shadow h-[13px] w-[13px] text-[#6b8ada]  border-[#514e4e] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                <label className="ms-1  font-medium text-[#5E5E5E] text-[12px] lg:text-[13px]">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center gap-1 lg:w-[55%] text-[12px] lg:text-[13px] text-[#E7E8DE] font-[500] bg-[#212121] border border-[#323232] rounded-[6px] p-[9px] flex justify-between items-center'>
                               
                                      
                                           <div className='flex gap-1 items-center'> <div className="flex items-center">
                                                <input id="default-checkbox" type="checkbox" value="" className="bg-transparent input-shadow h-[13px] w-[13px] text-[#6b8ada]  border-[#514e4e] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                <label className="ms-1  font-medium text-[#5E5E5E] text-[12px] lg:text-[13px]">Burn</label>
                                            </div>
                                            <div className="flex items-center ml-1">
                                                <input id="default-checkbox" type="checkbox" value="" className="bg-transparent input-shadow h-[13px] w-[13px] text-[#6b8ada]  border-[#514e4e] rounded focus:[#9383ff] dark:focus:[#9383ff] dark:ring-offset-[#9383ff] focus:ring-0 dark:bg-[#9383ff] dark:border-[#c59eb8]" />
                                                <label className="ms-1  font-medium text-[#5E5E5E] text-[12px] lg:text-[13px]">Withdraw</label>
                                            </div>
                                            <span className='text-[#5E5E5E] pl-2'>in</span></div>
                                            <button id="dropdownDefaultButtonDays" data-dropdown-toggle="dropdownDays" className="lg:text-[12px] text-[12px] flex justify-between  text-[#9b9b9b] leading-[20px] bg-transparent  focus:none focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-[0px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-transparent border border-transparent hover:border-transparent" type="button">50 Days
                                        <svg className="w-2.5 h-2.5 ms-2 lg:ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>


                                    <div id="dropdownDays" className="w-[100px] border border-[#34373F] z-10 hidden bg-[#212121] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="text-left py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonDays">
                                            <li className='hover:bg-[#424242]'>
                                                <a href="#" className="text-[12px] text-[#E7E8DE] block px-3 py-1 ">Hours</a>
                                            </li>
                                            <li className='hover:bg-[#424242]'>
                                                <a href="#" className="text-[12px] text-[#E7E8DE] block px-3 py-1">Days</a>
                                            </li>


                                        </ul>
                                    </div>                              
                                    </div>

                                </div>
                                <div className='mt-[11px]'>
                                    <input className='text-[13px] p-[12px] w-full text-[#E7E8DE] placeholder:text-[#E7E8DE] border border-[#323232] border border-[#323232] rounded-[6px] bg-[#212121] focus:outline-0' placeholder='Pool Note (Note to the world)' />
                                    <textarea className='h-[95px] mt-[11px] text-[13px] p-[12px] w-full text-[#E7E8DE] placeholder:text-[#E7E8DE] border border-[#323232] border border-[#323232] rounded-[6px] bg-[#212121] focus:ring-0 focus:border-[#323232] dark:bg-transparent dark:border-[#323232]' placeholder='Pool Letter (Letter to the recipient)'>

                                    </textarea>
                                    <button className='mt-[11px] uppercase rounded-full p-[11px] text-[13px] text-[#8B6BE3] font-[600] border border-[#8B6BE3] w-full'>SEAL</button>
                                    <p className='mt-[16px] text-center text-[#E7E8DE8A] text-[13px] text-[500]'>Seal Fees<span className='text-[#E7E8DE] pl-[13px]'>0.001 ETH (2USD)</span></p>
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
export default Sealunseal2;