
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import fuel from '../images/fuel 1.svg';
import search from "../images/search.svg";
import dai2 from "../images/dai.png";
import dai1 from "../images/dai1.svg";
import trinew from "../images/trinew.svg";
import link from "../images/link.svg";
import linkblue from "../images/linkblue.svg";
import linkwhite from "../images/linkwhite.svg";
import Footerlinksnotfixed from '../components/footerlinksnotfixed';
import Footersmall from '../components/footersmall';
import Footersmallnobutton from '../components/footersmallnobutton';
import HeaderNew from '../components/HeaderN';
export const Triangulartreasures = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <HeaderNew name="John" />

                </div>

                <div className='max-w-[1280px] mx-auto pt-[100px] md:pt-[150px] px-[20px] pb-[100px] font-[Inter]'>
                    <div>
                        <h1 className='text-[#E7E8DE] text-[32px] md:text-[50px] leading-[56px]'>triangular Treasures</h1>
                        <p className='text-[#686868] text-[16px] md:text-[20px] max-w-[900px] font-[500] pt-[10px]'>A triangular Treasure is a a digital piles of cryptocurrency locked in a smart contract for a condition. This results in locking liquidity for the one one who can solve the maker’s myth.</p>
                        {/* <span className='text-[#40C5E8] pl-1 font-[500]'>Learn more</span> */}
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between items-left gap-[20px] lg:items-center mt-[34px] mb-[29px]">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2 liactive" role="presentation">
                                <button className="inline-block bg-[#212121] font-[500] text-gray-200 border border-neutral-500 rounded-full text-[11px] md:text-[14px] md:text-[20px] px-[10px] md:px-[20px] py-[5px] md:py-[10px] " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">All Treasures</button>
                            </li>
                            <li className="me-2 liactive" role="presentation">
                                <button className="inline-block bg-[#212121] font-[500] text-gray-200 border border-neutral-500 rounded-full text-[11px] md:text-[14px] md:text-[20px] px-[10px] md:px-[20px] py-[5px] md:py-[10px]" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">l-Treasures</button>
                            </li>
                            <li className="me-2 liactive" role="presentation">
                                <button className="inline-block bg-[#212121] font-[500] text-gray-200 border border-neutral-500 rounded-full text-[11px] md:text-[14px] md:text-[20px] px-[10px] md:px-[20px] py-[5px] md:py-[10px] " id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="true">t-Treasures</button>
                            </li>
                            <li className='liactive' role="presentation">
                                <button className="inline-block bg-[#212121] font-[500] text-gray-200 border border-neutral-500 rounded-full text-[11px] md:text-[14px] md:text-[20px] px-[10px] md:px-[20px] py-[5px] md:py-[10px]" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">My Treasures</button>
                            </li>
                        </ul>

                        <div className='relative w-full lg:max-w-[174px]'>
                            <img src={search} className='h-[16px] w-[16px] absolute left-[15px] top-[14px] z-30 brightness-50' />
                            <input
                                className='pl-[40px]  input_token w-full h-[42px] text-[#E7E8DE] bg-[#212121] text-md font-light placeholder:text-[#8e8e91] px-[12px] py-[5px] border border-neutral-500 rounded-full lg:max-w-[460px]'
                                placeholder='Search'

                            />
                        </div>
                    </div>
                    <div id="default-tab-content">
                        <div className="hidden " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='py-[9px] flex justify-between gap-[10px] xl:gap-[15px] flex-wrap'>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-[10px] items-center pt-[18px]'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                      
                                       <div className='flex items-center gap-3'>
                                       <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Burn</span>50 Days  </p>
                                        <div className="w-[50px] mt-[10px] bg-[#40C5E93B] rounded-full h-2 dark:bg-gray-700">
                                            <div className="bg-[#40C5E9] h-2 rounded-full w-[50%]"></div>
                                        </div>
                                       </div>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>

                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <div className='py-[9px] flex justify-between gap-[10px] xl:gap-[15px] flex-wrap'>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-[10px] items-center pt-[18px]'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>X
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                           
  <div className='flex items-center gap-3'> <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2 '><span className='text-[#B0B0B0] pr-1 font-[400]'>Burn</span>50 Days</p>
                                        <div className="w-[50px] mt-[10px] mr-[3px] bg-[#8B6BE33D] rounded-full h-2 dark:bg-gray-700">
                                            <div className="bg-[#8B6BE3] h-2 rounded-full w-[50%]"></div>
                                        </div>
                                    </div>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>For you my dear.</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[9px] inline-flex leading-[20px] justify-center gap-2 items-center'>unseal<img className='mt-[3px]' src={link} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>X
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>For you my dear.</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[9px] inline-flex leading-[20px] justify-center gap-2 items-center'>unseal<img className='mt-[3px]' src={link} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>X
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>For you my dear.</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[9px] inline-flex leading-[20px] justify-center gap-2 items-center'>unseal<img className='mt-[3px]' src={link} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>

                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>X
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>For you my dear.</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[9px] inline-flex leading-[20px] justify-center gap-2 items-center'>unseal<img className='mt-[3px]' src={link} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>X
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>For you my dear.</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[9px] inline-flex leading-[20px] justify-center gap-2 items-center'>unseal<img className='mt-[3px]' src={link} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={dai1} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>X
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span>  </p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>For you my dear.</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#8B6BE3] rounded-full text-[20px] text-[#8B6BE3] px-[15px] py-[5px] pb-[9px] inline-flex leading-[20px] justify-center gap-2 items-center'>unseal<img className='mt-[3px]' src={link} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='text-left bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-end '>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>Create</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px]'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[22px] flex items-center gap-[6px]'>Create an l-Treasure</p>
                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px] leading-[17px]'>Become a liquidity provider to send funds to someone you choose for a specific reason</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-white rounded-full text-[20px] text-[#E7E8DE] px-[15px] py-[7px] pb-[7px] inline-flex leading-[20px] justify-center gap-2 items-center'>Seal<img className='mt-[3px]' src={linkwhite} /></a>
                                    </div>
                                </div>
                          
                           
                          
                            </div>
                        </div>
                        <div className="hidden" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <div className='py-[9px] flex justify-between gap-[10px] xl:gap-[15px] flex-wrap'>
                            <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-[10px] items-center pt-[18px]'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                          <div className='flex items-center gap-3'>
                                          <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Burn</span>50 Days  </p>
                                        <div className="w-[50px] mt-[10px] bg-[#40C5E93B] rounded-full h-2 dark:bg-gray-700">
                                            <div className="bg-[#40C5E9] h-2 rounded-full w-[50%]"></div>
                                        </div>
                                          </div>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span></p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span></p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-[10px] items-center pt-[18px]'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                            <div className='flex items-center gap-3'><p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Withdraw</span> 50 Days </p>
                                        <div className="w-[50px] mt-[10px] bg-[#40C5E93B] rounded-full h-2 dark:bg-gray-700">
                                            <div className="bg-[#40C5E9] h-2 rounded-full w-[50%]"></div>
                                        </div></div>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>
                                <div className='bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-between '>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src={trinew} className='h-[30px] w-[30px] rounded-full border border-[#34373f]' />
                                            <img src={dai2} className='h-[30px] w-[30px] rounded-full' />
                                            <span className='text-[20px] font-[500] text-[#E7E8DE]'>Linear1</span>
                                        </div>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>L90..09</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] justify-between'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>y
                                            <svg className='h-[20px] w-[20px] text-[#939191] text-[#E7E8DE]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"  ><g><path d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" fill="#939191" opacity="1" data-original="#000000"></path></g></svg>
                                            500k DAI</p>
                                        <p className='text-[14px] font-[600] text-[#E7E8DE] pt-2'><span className='text-[#B0B0B0] pr-1 font-[400]'>Timeless</span></p>

                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px]'>Can you decrypt this?</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-[#40C5E9] rounded-full text-[20px] text-[#40C5E9] px-[15px] py-[5px] pb-[8px] inline-flex leading-[20px] justify-center gap-2 items-center'>decrypt<img className='mt-[3px]' src={linkblue} /></a>
                                        <span className='text-[#5E5E5E] text-[14px] pl-[19px] font-[500]'>Enter </span>
                                    </div>
                                </div>


                                <div className='text-left bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-end '>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>Create</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[12px]'>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>Create a t-Treasure</p>
                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[10px] leading-[17px]'>Become a liquidity provider to send funds to someone who can decrypt your message</p>
                                    <div className='pt-[28px]'>
                                        <a className='bg-[#212121] border border-white rounded-full text-[20px] text-[#E7E8DE] px-[15px] py-[7px] pb-[7px] inline-flex leading-[20px] justify-center gap-2 items-center'>encrypt<img className='mt-[3px]' src={linkwhite} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden text-center flex justify-center pt-[70px]" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                          <div>
                          <p className='pb-4 text-[#E7E8DE] text-[20px]'>You do not have any  Pools</p>    
                          <div className='text-left bg-[#272727] p-[18px] rounded-2xl w-full md:w-[49%] xl:w-[400px]'>
                                    <div className='flex justify-end '>
                                        <div className='rounded-full bg-[#212121] pt-[6px] py-[5px] px-[20px]'>
                                            <p className='text-[12px] font-[600] font-[Inter] text-[#E7E8DE]'>Create</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[19px] items-center pt-[18px] '>
                                        <p className='text-[#E7E8DE] font-[500] text-[20px] md:text-[24px] leading-[26px] flex items-center gap-[6px]'>Create a t-Treasure</p>
                                    </div>
                                    <p className='text-[14px] leading-[14px] text-[#B0B0B0] pt-[13px] leading-[17px]'>Become a liquidity provider to send funds to someone who can decrypt your message</p>
                                    <div className='pt-[33px]'>
                                        <a className='bg-[#212121] border border-white rounded-full text-[20px] text-[#E7E8DE] px-[15px] py-[7px] pb-[7px] inline-flex leading-[20px] justify-center gap-2 items-center'>encrypt<img className='mt-[3px]' src={linkwhite} /></a>
                                    </div>
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
export default Triangulartreasures;