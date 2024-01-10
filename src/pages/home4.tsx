
import wallet from "../images/wallets.svg";
import Homeheader2 from '../components/homeheader2';
import homenew from "../images/homeimg.svg";
import genbig from "../images/geniusy swap.png";

export const Home4 = () => {
    return (
        <>
            <div className='main'>

                <div className="App">
                    <Homeheader2 name="John" />
                </div>

                <div className='pt-[160px] font-[Inter]'>
                    <div className='mx-auto px-[20px] sm:px-[20px] lg:px-[30px] max-w-[1120px] text-center  '>
                        <div className='view_section md:flex justify-between'>
                            <div className='max-w-[450px] text-left'>
                                <p className='inline text-left font-grok text-[31px] md:text-[50px] leading-[50px] font-bold  text-gradient'>Challeng<span className='font-sans'>i</span>ng Web3</p>
                                <div className="font-medium text-[18px] mt-[10px] max-sm:text-[18px] text-[#919193] text-left" >Objects is a foundation designed to challenge the common barriers of Web3. <br /> We're on a mission to enhance the crypto investment experience, providing innovative solutions that empower users and safeguard against scams <span className="text-[#E7E8DE] dark:text-[#E7E8DE]"> in the promising, yet brutal cryptomarket.</span><br />
                                </div>
                                <div className='mt-[32px] text-left'>
                                    <a href='/swap' className='gradient_btn p-[0.2rem] px-[1rem] px-[20px] py-[10px] bg-[#313136] border border-[#ffffff1a] font-semibold rounded-full h-[40px] mr-2'><span className=' font-grok text-[16px] md:text-[16px] font-bold text-gradient'>Launch dApp</span></a>
                                    <a href='/about-us' className='px-[15px] py-[9.5px] bg-[#424242] font-semibold rounded-full h-[40px] border border-[#ffffff1a] text-[#E7E8DE] '>Why Objects<span className='font-[Inter]'>?</span></a>
                                </div>
                            </div>
                            <div className='sm:max-w-[330px] lg:max-w-[600px] p-2'>
                                <img className='mt-[40px] md:mt-0' src={homenew} />

                            </div>
                        </div>
                        <div className='flex-col flex md:flex-row justify-between gap-[16px] mt-[64px]' id="whygen">
                            <div className='md:w-[24%] border border-[#ffffff1a] bg-[#2222268a] p-[15px] lg:py-[24px] lg:px-[20px] rounded-md text-left'>
                                <p className='font-grok  text-[20px] font-bold  text-[#c59eb8] '>
                                    Safe
                                </p>
                                <p className='pt-[15px] lg:pt-[20px] text-[#919193] text-[14px] lg:text-[17px] font-semibold '>Fostering Seamless and Reliable Crypto Journeys</p>
                            </div>
                            <div className='md:w-[24%] border border-[#ffffff1a] bg-[#2222268a] p-[15px] lg:py-[24px] lg:px-[20px] rounded-md text-left'>
                                <p className='font-grok  text-[20px] font-bold  text-[#c59eb8]   '>
                                    Reliable
                                </p>
                                <p className='pt-[15px] lg:pt-[20px] text-[#919193] text-[14px] lg:text-[17px] font-semibold '>Uncompromised Security for Your Crypto Ventures</p>
                            </div>
                            <div className='md:w-[24%] border border-[#ffffff1a] bg-[#2222268a] p-[15px] lg:py-[24px] lg:px-[20px] rounded-md text-left'>
                                <p className='font-grok  text-[20px] font-bold  text-[#c59eb8]   '>
                                    Smooth
                                </p>
                                <p className='pt-[15px] lg:pt-[20px] text-[#919193] text-[14px] lg:text-[17px] font-semibold '>Effortless Transactions Redefined</p>
                            </div>
                            <div className='md:w-[24%] border border-[#ffffff1a] bg-[#2222268a] p-[15px] lg:py-[24px] lg:px-[20px] rounded-md text-left'>
                                <p className='font-grok  text-[20px] font-bold  text-[#c59eb8]   '>
                                    Intelligent API
                                </p>
                                <p className='pt-[15px] lg:pt-[20px] text-[#919193] text-[14px] lg:text-[17px] font-semibold '>Strategic Empowerment through APIs
                                </p>
                            </div>
                        </div>
                        <div className='text-overlay pt-[70px] pb-[35px] md:py-[70px]'>
                            <p className="relative inline-block  font-grok leading-none pr-[30px] pl-[20px] mb-[-1px] text-[42px] sm:text-[52px] lg:text-[80px] py-[10px] font-bold text-gradient ">Why Ob<span className='font-sans'>j</span>ects<span className='font-sans'>?</span></p>

                        </div>
                        <div className='three_Sections flex md:flex-row flex-col justify-between gap-[20px]'>
                            <div className='md:w-[50%]'>
                                <div className='bg-[#424242] px-[20px] lg:px-[40px] border border-[#ffffff1a] overflow-hidden pr-[15px] text-left relative flex justify-between gap-[15px] lg:gap-[40px] rounded-xl'>
                                    <div className='w-[50%] py-[20px] lg:py-[36px]'>
                                        <p className='text-[18px] lg:text-[24px] leading-[22px] text-[#E7E8DE] font-grok'>Credibility is non-negotiable.</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#c8c7d8] py-[20px] font-medium'>Our platform provides robust tools for users to verify the legitimacy of assets and transactions.
                                        </p>
                                        <a href="/analyse" className="inline-block mt-[0px] px-[20px] py-[10px] bg-[#000000] text-[#b1b2ff] font-semibold rounded-md "><span className="text-gradient">Analyse Now</span></a>
                                    </div>
                                    <div className='w-[50%] flex items-center'>
                                        <img className='object-cover' src={wallet} />
                                    </div>
                                </div>
                                <div className='mt-[20px] bg-[#424242] border border-[#ffffff1a] p-[20px] lg:px-[40px] lg:py-[36px] text-left relative flex justify-between gap-[10px] lg:gap-[40px] rounded-xl'>
                                    <div className='w-[70%]'>
                                        <p className='text-[18px] lg:text-[24px] leading-[22px] text-[#E7E8DE] font-grok'>Buy crypto with a click</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Our user-centric platform allows you to initiate crypto purchases securely and effortlessly, providing a seamless and instantaneous experience.</p>
                                    </div>
                                    <div className='w-[40%] text-right'>
                                    <a href="/buy" className="inline-block mt-[0px] px-[20px] py-[10px] bg-[#000000] text-[#b1b2ff] font-semibold rounded-md "><span className="text-gradient">Buy Now</span></a>
                                       
                                    </div>
                                </div>
                            </div>

                            <div className='md:w-[50%] bg-[#424242] border border-[#ffffff1a] p-[20px] lg:px-[40px] lg:py-[36px] text-left relative justify-between gap-[20px] rounded-xl'>
                                <div className=' flex justify-between flex-col items-start'>
                                    <div>
                                        <p className='text-[18px] lg:text-[24px] leading-[22px] text-[#E7E8DE] font-grok'>The best in the market, right now!</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#c8c7d8] pt-[20px] font-medium'> You decide what to trade, we find the right option.<br />
                                            We browse the best DEXs to pick the best routes and provide you with the cheapest, fastest and smoothest option.</p>
                                    </div>
                                    <a href="/swap" className="inline-block mt-[30px] px-[20px] py-[10px] bg-[#000000] text-[#b1b2ff] font-semibold rounded-md "><span className="text-gradient">Swap Now</span></a>


                                </div>
                                <div className='w-[90%] mx-auto'>
                                    <img className=' ' src={genbig} />

                                </div>
                            </div>

                        </div>
                        <div className='w-full flex md:flex-row flex-col justify-between gap-[20px]'>
                            <div className='md:w-[50%] mt-[20px] bg-[#424242] border border-[#ffffff1a] p-[20px] lg:px-[40px] lg:py-[36px] text-left relative flex justify-between gap-[10px] lg:gap-[40px] rounded-xl'>
                                <div className='w-[70%]'>
                                    <p className='text-[18px] lg:text-[24px] leading-[22px] text-[#E7E8DE] font-grok'>Community and Partnership</p>
                                    <p className='text-[14px] lg:text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Whether you're a blockchain project, developer, or industry enthusiast, a partnership with Objects means unlocking new possibilities through mutual growth</p>
                                </div>
                                <div className='w-[35%] md:w-[40%] text-right flex flex-col items-end justify-between'>
                                <a href="/contact" className="inline-block px-[20px] py-[10px] bg-[#1d1d20] text-[#E7E8DE] font-semibold rounded-md "><span className="">Contact</span></a>
                                <div className="flex items-center gap-3 justify-end">
                                    <a href="https://t.me/objects_community" target="blank" className="inline-block"><svg className="h-[30px] w-[30px]" xmlns="http://www.w3.org/2000/svg" version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 176 176"  ><g><g data-name="Layer 2"><rect width="176" height="176" fill="#1d1d20" rx="24" opacity="1" data-original="#1c8adb"  ></rect><path fill="#ffffff" d="m135.94 45.5-1.82.66-98.78 35.59a3.31 3.31 0 0 0 .29 6.4l25.57 7 4.77 14 4.77 14a4.54 4.54 0 0 0 7.32 1.63l13.21-12.48 25.94 17.59c3.17 2.16 7.69.56 8.5-3l17.18-75.91c.84-3.76-3.12-6.85-6.95-5.48zm-12.61 16.85L78.7 98.83l-2.1 1.72a2.27 2.27 0 0 0-.84 1.48l-.47 3.88-1.29 10.9a.5.5 0 0 1-1 .08L69.37 106l-3.75-11.15a2.26 2.26 0 0 1 1.08-2.67l46.44-26.62 8.74-5c1.27-.74 2.57.87 1.45 1.79z" opacity="1" data-original="#ffffff"  ></path></g></g></svg></a>
                                    <a href="https://twitter.com/objects_fi" target="blank"  className="inline-block bg-[#ffff] rounded-md"><svg className="h-[30px] w-[30px]" xmlns="http://www.w3.org/2000/svg" version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 1227 1227"  ><g><path d="M654.53 592.55 930.65 987.5H817.33L592.01 665.22v-.02l-33.08-47.31-263.21-376.5h113.32l212.41 303.85z" fill="#1d1d20" opacity="1" data-original="#000000"  ></path><path d="M1094.42 0H132.58C59.36 0 0 59.36 0 132.58v961.84C0 1167.64 59.36 1227 132.58 1227h961.84c73.22 0 132.58-59.36 132.58-132.58V132.58C1227 59.36 1167.64 0 1094.42 0zm-311.8 1040.52L554.61 708.68l-285.47 331.84h-73.78l326.49-379.5-326.49-475.17h249.02l215.91 314.23 270.32-314.23h73.78l-311.33 361.9h-.02l338.6 492.77z" fill="#1d1d20" opacity="1" data-original="#000000"  ></path></g></svg></a>

                                </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] md:mt-[20px] bg-[#424242] border border-[#ffffff1a] p-[20px] lg:px-[40px] lg:py-[36px] text-left relative flex justify-between gap-[10px] lg:gap-[40px] rounded-xl'>
                                <div className='w-[70%]'>
                                    <p className='text-[18px] lg:text-[24px] leading-[22px] text-[#E7E8DE] font-grok'>Help</p>
                                    <p className='text-[14px] lg:text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Navigate through our FAQ to get quick, reliable assistance and empower your crypto journey with knowledge.</p>
                                </div>
                                <div className='w-[35%] md:w-[40%] text-right '>
                                <a href="/help" className="inline-block px-[20px] py-[10px] bg-[#1d1d20] text-[#E7E8DE] font-semibold rounded-md "><span className="">Help</span></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] mt-[20px] bg-[#424242] border border-[#ffffff1a] p-[20px] lg:px-[40px] lg:py-[36px] text-left relative flex justify-between gap-[10px] lg:gap-[40px] rounded-xl'>
                            <div className='w-[70%]'>
                                <p className='text-[18px] lg:text-[24px] leading-[22px] text-[#E7E8DE] font-grok'>Donate and Support the Project</p>
                                <p className='text-[14px] lg:text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Objects is on a mission to revolutionize the crypto space by challenging Web3’s major problems, and we invite you to be a part of this exciting journey.</p>
                            </div>
                            <div className='w-[35%] md:w-[40%] text-right '>
                            <a href="/donate" className="inline-block px-[20px] py-[10px] bg-[#1d1d20] text-[#E7E8DE] font-semibold rounded-md "><span className="">Donate</span></a>

                                
                            </div>
                        </div>

                        {/* <div className=''>
<button className="mt-[100px] px-[20px] py-[1px] bg-[#00000000] rounded-full h-[40px] border border-[#ebebf599]   font-bold mr-2 ">Become a sponsor</button>

</div>                */}
                    </div>

                    <div className=" w-full footer_links font-[Inter] flex md:flex-row flex-col gap-[10px] justify-between items-center max-w-full px-[20px] lg:px-[30px] mx-auto mt-[50px] md:mt-[96px] py-[20px]">
                        <p className="text-[#ffffff80] text-xs font-medium flex items-center gap-3 uppercase"><a href='/termsofuse'>Terms of Use</a><a href='/privacypolicy'>Privacy Policy</a><a href='/dyor'>DYOR</a></p>
                        <p className="md:ml-[-125px] text-[#ffffff80] text-xs font-medium">©2024 Objects.</p>
                        {/* <button className=" ml-[-70px] px-[20px] py-[1px] bg-[#00000000] rounded-full h-[40px] border border-[#ebebf599] inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text font-bold mr-2 ">Become a sponsor</button> */}

                        <p className="text-[#ffffff80] text-xs font-medium flex items-center">System Operational<span className="h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1"></span></p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home4;