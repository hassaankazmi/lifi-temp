
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import usdt from "../images/usdt.webp";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import bnc from '../images/eth.svg';
import HeaderfullConnected from '../components/headerfullconnected';
import tc from "../images/tc.png";
export const Wallet = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <HeaderfullConnected name="John" />

                </div>
            <div className='pt-[90px] flex flex-col justify-end items-end max-w-[1420px]'>
             <div className='pr-[20px] md:pr-[10px]'>
                  <div className='wallet bg-[#424242] rounded-2xl p-[10px]  w-[370px] md:w-[400px] mb-[20px]'>
                  
                        <div className="">
                            <ul className="flex justify-between items-center -mb-px text-sm font-medium text-center bg-[#ff76764d] p-[15px] rounded-2xl">
                              
                                <li className='text-[#FF7676] text-[16px]' role="presentation">
                                    Error:<span className='pl-2 text-[14px]'>You don't have enough gas.</span>
                                </li>                             
                            </ul>
                        </div>               

                </div>
                <div className='wallet bg-[#424242] rounded-2xl p-[10px]  w-[370px] md:w-[400px] mb-[20px]'>
                  
                  <div className="">
                      <ul className="flex justify-between items-center -mb-px text-sm font-medium text-center bg-[#50b15a5c] p-[15px] rounded-2xl">
                        
                          <li className='text-[#54B35E] text-[16px]' role="presentation">
                              Successful:<span className='pl-2 text-[14px]'>Transaction successfully done.</span>
                          </li>                             
                      </ul>
                  </div>               

          </div>
            
              
            
                      
                {/* <div className='mt-[20px] wallet border border-[#34373F] bg-[#2222268a] rounded-2xl text-[#E7E8DE] p-[10px] min-h-[300px] w-[370px] md:w-[400px]'>
                    <div className=''>
                        <div className=" mb-[15px]">
                            <div className="flex justify-between items-center -mb-px text-sm font-medium text-center bg-[#424242] py-2 px-2 rounded-2xl">
                                <div className="me-2 " role="presentation">
                                    <button className="inline-block  font-[500] text-[#E7E8DE] border border-0 rounded-2xl text-[14px] md:text-[16px] " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">             <div className="text-white text-[8px] sm:text-[16px] py-[10px] px-[15px] bg-transparent inline text-center font-normal  flex items-center gap-[8px]"><img className='h-[20px] w-[20px] md:h-[20px] md:w-[20px] rounded-full' src={tc} /> <span className="font-[Inter] text-[12px] md:text-[14px] font-bold text-gradient ">0xFe3c...2418</span></div></button>
                                </div>
                              <div className='flex items-center'>
                             <img className='mr-[5px]' src={bnc} />
                            <p className='px-[10px] md:px-[15px] py-[5px] md:py-[10px] '>
                            <svg className="h-5 w-5 text-[#E7E8DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="1" y1="1" x2="23" y2="23" />  <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />  <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />  <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />  <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />  <line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                            </p>
                              </div>
                            </div>


                        </div>
                        <div >
                           
                            
                            <div className=" " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <div className='rounded-2xl border-[1px] bg-[#424242] border-transparent py-[10px] px-[15px]'>
                                    <p className='text-[18px] font-[400]'>My balance</p>
                                    <div className='flex justify-between gap-[50px] items-center mt-[10px]'>
                                        <p className='text-[34px]'>$187,567.<span>76</span></p>
                                        <div className='flex items-center gap-2 bg-[#1d1d20e8] rounded-xl px-4 py-2'><span>USD</span></div>
                                    </div>
                                </div>
                                <div className='bg-[#424242] rounded-2xl mt-[15px] p-[10px] px-[15px]'>
                                    <div className='flex items-center justify-between border-b border-[#34373F]'>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-2 border-r border-[#34373F]'><svg className="h-5 w-5 text-[#E7E8DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</a>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-5'><svg className="h-5 w-5 text-[#E7E8DE]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>Explorer</a>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-2 border-r border-[#34373F]'><svg className="h-5 w-5 text-[#E7E8DE]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />  <line x1="8" y1="6" x2="8" y2="18" />  <line x1="8" y1="12" x2="14" y2="12" />  <line x1="9" y1="3" x2="9" y2="6" />  <line x1="13" y1="3" x2="13" y2="6" />  <line x1="9" y1="18" x2="9" y2="21" />  <line x1="13" y1="18" x2="13" y2="21" /></svg>Buy Crypto</a>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-5'><svg className="h-5 w-5 text-[#E7E8DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="1" y1="1" x2="23" y2="23" />  <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />  <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />  <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />  <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />  <line x1="12" y1="20" x2="12.01" y2="20" /></svg>Disconnect</a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </div>

                </div> */}
               <div className='wallet border border-[#34373F] bg-[#2222268a] rounded-2xl text-[#E7E8DE] p-[10px] min-h-[300px] w-[370px] md:w-[400px]'>
                    <div className=''>
                        <div className=" mb-[15px]">
                            <div className="flex justify-between items-center -mb-px text-sm font-medium text-center bg-[#424242] py-2 px-2 rounded-2xl">
                                <div className="me-2 " role="presentation">
                                    <button className="inline-block  font-[500] text-[#E7E8DE] border border-0 rounded-2xl text-[14px] md:text-[16px] " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">             <div className="text-white text-[8px] sm:text-[16px] py-[10px] px-[15px] bg-transparent inline text-center font-normal  flex items-center gap-[8px]"><img className='h-[20px] w-[20px] md:h-[20px] md:w-[20px] rounded-full' src={tc} /> <span className="font-[Inter] text-[12px] md:text-[13px] font-bold text-gradient ">0xFe3c...2418</span></div></button>
                                </div>
                              <div className='flex items-center'>
                             <img className='mr-[5px]' src={bnc} />
                            <p className='px-[10px] md:px-[15px] py-[5px] md:py-[10px] '>
                            <svg className="h-5 w-5 text-[#E7E8DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="1" y1="1" x2="23" y2="23" />  <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />  <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />  <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />  <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />  <line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                            </p>
                              </div>
                            </div>


                        </div>
                        <div >
                           
                            
                            <div className=" " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <div className='rounded-2xl border-[1px] border-[#34373F] py-[10px] px-[15px]'>
                                    <p className='text-[18px] font-[400]'>My balance</p>
                                    <div className='flex justify-between gap-[50px] items-center mt-[10px]'>
                                        <p className='text-[34px]'>$187,567.<span>76</span></p>
                                        <div className='flex items-center gap-2 bg-[#424242] rounded-xl px-4 py-2'><span>USD</span></div>
                                    </div>
                                </div>
                                <div className='bg-[#424242] rounded-2xl mt-[15px] p-[10px] px-[15px]'>
                                    <div className='flex items-center justify-between border-b border-[#34373F]'>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-2 border-r border-[#34373F]'><svg className="h-5 w-5 text-[#E7E8DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</a>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-5'><svg className="h-5 w-5 text-[#E7E8DE]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>Explorer</a>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-2 border-r border-[#34373F]'><svg className="h-5 w-5 text-[#E7E8DE]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />  <line x1="8" y1="6" x2="8" y2="18" />  <line x1="8" y1="12" x2="14" y2="12" />  <line x1="9" y1="3" x2="9" y2="6" />  <line x1="13" y1="3" x2="13" y2="6" />  <line x1="9" y1="18" x2="9" y2="21" />  <line x1="13" y1="18" x2="13" y2="21" /></svg>Buy Crypto</a>
                                        <a className='w-[50%] text-center text-[16px] font-[500] flex items-center gap-3 justify-start py-3 px-5'><svg className="h-5 w-5 text-[#E7E8DE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="1" y1="1" x2="23" y2="23" />  <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />  <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />  <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />  <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />  <line x1="12" y1="20" x2="12.01" y2="20" /></svg>Disconnect</a>
                                    </div>
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
export default Wallet;