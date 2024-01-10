
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import imagin1 from "../images/imagin1.svg";
import imagin2 from "../images/imagin2.svg";
import imagin3 from "../images/imagin3.svg";
import imagin4 from "../images/imagin4.svg";
import eth from '../images/ethnew.png';
import dai from '../images/dai.png';
import HeaderfullConnected from '../components/headerfullconnected';
import imaginary from "../images/imaginary.svg";
export const Noimaginary1 = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <HeaderfullConnected name="John" />

                </div>
                <div className='max-w-[1170px] mx-auto pt-[100px] md:pt-[100px] px-[20px] pb-[40px] font-[Inter]'>
                    <div>
                        <h1 className="flex items-center gap-2 text-[#71FF3F] text-[24px] sm:text-[32px] lg:text-[50px] md:leading-[56px]">imaginary Protocol <img className='h-[40px] w-[40px] lg:h-[55px] lg:w-[55px]' src={imaginary} />  </h1>
                        <p className="text-[#686868] text-[14px] lg:text-[16px]  font-[500] py-[1px] lg:py-[10px]">imaginary protocol executes your swap on your behalf.<br /> This helps you when you have 0 ETH for gas fees (Coming soon)</p>
                    </div>
                    <div className='flex md:flex-row flex-col justify-between gap-[10px] sm:gap-[50px] lg:gap-[100px]'>
                        <div className='sm:w-[40%] lg:w-[50%]'>
                            <div className='w-auto lg:w-[360px] pt-[40px] md:pt-[50px] pb-[40px] pl-[0px] lg:pl-[65px] flex flex-col justify-between h-full'>
                                <div className=''>
                                    <p className='text-[14px] lg:text-[16px] text-[#808080] flex items-center gap-2'>Your swap <svg className='h-[15px] w-[15px] mt-[2px]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" ><g><path d="M256 0C114.509 0 0 114.496 0 256c0 141.489 114.496 256 256 256 141.491 0 256-114.496 256-256C512 114.511 397.504 0 256 0zm26.289 357.621c0 8.088-11.794 16.174-26.284 16.174-15.164 0-25.946-8.086-25.946-16.174V229.234c0-9.435 10.783-15.839 25.946-15.839 14.49 0 26.284 6.404 26.284 15.839v128.387zm-26.283-175.225c-15.501 0-27.631-11.457-27.631-24.263 0-12.805 12.131-23.925 27.631-23.925 15.164 0 27.296 11.12 27.296 23.925 0 12.806-12.133 24.263-27.296 24.263z" fill="#808080" opacity="1" data-original="#000000" ></path></g></svg></p>
                                    <div className='flex justify-between items-center py-[5px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='h-[22px] w-[22px]' src={dai} /><p className='text-[#E7E8DE] text-[18px]'>DAI</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[18px]'>-2300</p>
                                            <p className='text-[12px] text-[#808080]'>Balance: 2300</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center py-[5px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='h-[22px] w-[22px]' src={eth} /><p className='text-[#E7E8DE] text-[18px]'>ETH</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[18px]'>+1</p>
                                            <p className='text-[12px] text-[#808080]'>Balance: 0</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center py-[5px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='h-[22px] w-[22px]' src={eth} /><p className='text-[#E7E8DE] text-[18px]'>ETH</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[18px]'>-0.001</p>
                                            <p className='text-[12px] text-[#808080]'>Gas fees</p>
                                        </div>
                                    </div>
                                </div>
                          
                                <div className=''>
                                    <p className='text-[14px] lg:text-[16px] text-[#808080] flex items-center gap-2'>You will receive <svg className='h-[15px] w-[15px] mt-[2px]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" ><g><path d="M256 0C114.509 0 0 114.496 0 256c0 141.489 114.496 256 256 256 141.491 0 256-114.496 256-256C512 114.511 397.504 0 256 0zm26.289 357.621c0 8.088-11.794 16.174-26.284 16.174-15.164 0-25.946-8.086-25.946-16.174V229.234c0-9.435 10.783-15.839 25.946-15.839 14.49 0 26.284 6.404 26.284 15.839v128.387zm-26.283-175.225c-15.501 0-27.631-11.457-27.631-24.263 0-12.805 12.131-23.925 27.631-23.925 15.164 0 27.296 11.12 27.296 23.925 0 12.806-12.133 24.263-27.296 24.263z" fill="#808080" opacity="1" data-original="#000000" ></path></g></svg></p>

                                    <div className=' py-[5px]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center gap-2'>
                                                <img className='h-[22px] w-[22px]' src={eth} /><p className='text-[#E7E8DE] text-[18px]'>ETH</p>
                                            </div>
                                            <div className='text-right'>
                                                <p className='text-[#E7E8DE] text-[18px]'>+0.979</p>

                                            </div>
                                        </div>
                                        <p className='pt-[10px] text-[#808080]'> Gas fees</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className='right_side_content sm:w-[60%] lg:w-[50%]'>
                           <div className='sm:h-[500px] overflow-auto'>
                      
                            <div className='text-[14px] lg:text-[16px] flex justify-between items-center gap-[10px] lg:gap-[30px] mb-[20px]'>
                                <div className='w-[20%] sm:w-[10%] lg:w-[20%]'><img className='h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]' src={imagin2} /></div>
                                <div className='w-[80%] sm:w-[90%] lg:w-[80%] bg-[#222226fa] rounded-md py-[10px] px-[13px] border border-[#34373F] '>
                                    <div className='flex justify-between items-center '>
                                        <p className='text-[#000000] bg-[#40C5E9] min-w-[90px] max-w-[90px] text-[12px] rounded-md text-center px-[2px] py-[3px]'>Funds</p>
                                        <p className='text-[#E7E8DE] text-[14px] ml-[-45px]'>maker (u)</p>
                                        <p></p>
                                    </div>
                                    <div className='flex justify-between items-center pt-[6px] pb-[10px] pl-[10px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='h-[18px] w-[18px]' src={dai} /><p className='text-[#E7E8DE] text-[13px]'>DAI</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[14px]'>2300</p>

                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center text-[11px] text-[#8B8B85]'>
                                        <p>
                                        Estimate (~$2196.37)
                                        </p>
                                        <p>Balance: 2300</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-[14px] lg:text-[16px] flex justify-between items-center gap-[10px] lg:gap-[30px] mb-[20px]'>
                                <div className='w-[20%] sm:w-[10%] lg:w-[20%]'><img className='h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]' src={imagin3} /></div>
                                <div className='w-[80%] sm:w-[90%] lg:w-[80%] bg-[#222226fa] rounded-md py-[10px] px-[13px] border border-[#34373F] '>
                                    <div className='flex justify-between items-center '>
                                        <p className='text-[#ffffff] bg-[#8B6BE3] min-w-[90px] max-w-[90px] text-[12px] rounded-md text-center px-[2px] py-[3px]'>Swap X for Y</p>
                                        <p className='text-[#E7E8DE] text-[14px] ml-[-45px]'>Uniswap V2</p>
                                        <p></p>
                                    </div>
                                    <div className='flex justify-between items-center pt-[6px] pb-[10px] pl-[10px]'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex'><img className='h-[18px] w-[18px] relative z-[10]' src={dai} /> <img className='h-[18px] w-[18px] ml-[-5px] z-[0px] relative' src={eth} /></div><p className='text-[#E7E8DE] text-[13px]'>DAI for ETH</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[14px]'>1</p>

                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center text-[11px] text-[#8B8B85]'>
                                        <p>
                                        Gas  |  <span className='text-[#F35E67]'>-$49</span> or Free execution with <span className='text-[#71FF3F]'>imaginary </span>
                                        </p>
                                        {/* <p>Balance: 2300</p> */}
                                    </div>
                                </div>
                            </div>
                           
                            <div className='text-[14px] lg:text-[16px] flex justify-between items-center gap-[10px] lg:gap-[30px] mb-[20px]'>
                                <div className='w-[20%] sm:w-[10%] lg:w-[20%]'><img className='h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]' src={imagin4} /></div>
                                <div className='w-[80%] sm:w-[90%] lg:w-[80%] bg-[#222226fa] rounded-md py-[10px] px-[13px] border border-[#34373F] '>
                                    <div className='flex justify-between items-center '>
                                        <p className='text-[#ffffff] bg-[#F35E67] min-w-[90px] max-w-[90px] text-[12px] rounded-md text-center px-[2px] py-[3px]'>Pay gas</p>
                                        <p className='text-[#E7E8DE] text-[14px] ml-[-45px]'>Uniswap V2</p>
                                        <p></p>
                                    </div>
                                    <div className='flex justify-between items-center pt-[6px] pb-[10px] pl-[10px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='h-[18px] w-[18px]' src={eth} /><p className='text-[#E7E8DE] text-[13px]'>ETH</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[14px]'>0.001</p>

                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center text-[11px] text-[#8B8B85]'>
                                        <p>
                                        Gas fees  |  <span className='text-[#F35E67]'>-$49</span>
                                        </p>
                                        {/* <p>Balance: 2300</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='text-[14px] lg:text-[16px] flex justify-between items-center gap-[10px] lg:gap-[30px] mb-[20px]'>
                                <div className='w-[20%] sm:w-[10%] lg:w-[20%]'><img className='h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]' src={imagin2} /></div>
                                <div className='w-[80%] sm:w-[90%] lg:w-[80%] bg-[#222226fa] rounded-md py-[10px] px-[13px] border border-[#34373F] '>
                                    <div className='flex justify-between items-center '>
                                        <p className='text-[#000000] bg-[#40C5E9] min-w-[90px] max-w-[90px] text-[12px] rounded-md text-center px-[2px] py-[3px]'>Funds</p>
                                        <p className='text-[#E7E8DE] text-[14px] ml-[-45px]'>maker (u)</p>
                                        <p></p>
                                    </div>
                                    <div className='flex justify-between items-center pt-[6px] pb-[10px] pl-[10px]'>
                                        <div className='flex items-center gap-2'>
                                            <img className='h-[18px] w-[18px]' src={eth} /><p className='text-[#E7E8DE] text-[13px]'>ETH</p>
                                        </div>
                                        <div className='text-right'>
                                            <p className='text-[#E7E8DE] text-[14px]'>0.979</p>

                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center text-[11px] text-[#8B8B85]'>
                                        <p>
                                        Estimate (~$2196.37)
                                        </p>
                                        {/* <p>Balance: 2300</p> */}
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>

                    </div>
                    <div className='mt-[20px] sm:mt-[0px] buttons_bottom w-full' >
                                <a href='/imaginary' className='text-[20px] rounded-full text-[#686868] border border-[#686868] bg-[#212121] py-[5px]  px-[18px] text-center'>On</a>
                                <a href='/noimaginary' className='text-[20px] rounded-full text-[#F35E67] border border-[#F35E67] bg-[#212121] py-[5px]  px-[18px] text-center ml-[8px]'>Off</a>
                                <a className='text-[20px] rounded-full text-[#F35E67] border border-[#F35E67] bg-[#212121] py-[5px]  px-[18px] text-center ml-[20px] lg:ml-[95px]'>Execute</a>

                            </div>
                </div>

            </div>




        </>
    )
}
export default Noimaginary1;