// src/MyComponent.tsx
import React from 'react';
import comm from "../images/comm.png";
interface MyComponentProps {
    name: string;
}

const Footer: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <>
            <footer className="mx-auto px-[8px] sm:px-[16px] lg:px-[16px] w-11/12  font-[Lausanne] " aria-labelledby="footer-heading">
                <div className='join-comm p-[32px] font-[Lausanne] flex justify-between items-center mb-[64px] border border-[#fffef11a] rounded-2xl'>
                    <div className='flex items-center gap-10'> <div className='bg-white p-1.5 rounded-md'>
                        <div className='img-comm'><img className='h-[38px] w-[38px]' src={comm} /></div>
                    </div>
                        <div>
                            <p className='text-[24px] text-white text-left font-semibold mb-1'>Be a Part of The Lattice Community. Join now! </p>
                            <p className='text-[16px] text-white'>Share work, seek support, vote on components, stay updated and network with other Lumers.</p>
                        </div></div>
                    <div className=''>
                        <button className='bg-white rounded-md py-[12px] px-[24px] leading-none'>Join our Community</button>
                    </div>
                </div>
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="flex pb-[60px]">
                    <div className="md:pr-11 pb-4 lg:pb-0 w-[45%]">  <div className="">
                        <h3 className="text-base font-medium mb-[32px] leading-6 text-white text-left">Join our community!</h3>
                        <div className='social flex gap-3 items-center'>
                            <div className='h-[32px] w-[32px] rounded-md bg-[#d8d5d2]'></div>
                            <div className='h-[32px] w-[32px] rounded-md bg-[#d8d5d2]'></div>
                            <div className='h-[32px] w-[32px] rounded-md bg-[#d8d5d2]'></div>
                        </div>
                        <div className='mt-[40px] flex gap-2 items-center'><span className='h-2 w-2 bg-[#4bae4f] rounded-full block ml-1'></span><p className='text-[#8f8f8f] text-[12.8px]'>All systems operational</p></div>
                        <div>
                            <p className='text-left text-[14px] text-white font-medium mt-[20px]'>Contract address</p>
                            <p className='text-left text-[#8f8f8f] text-[11.2px] py-[8px]'>0xc8809F6C743179e794c4D9B95Ca862aA24976e74</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-span-2 w-[55%]">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4">
                            <div className=""> <div>
                                <h3 className="text-[18px] font-medium mb-[25px] leading-6 text-white text-left">About The Lattice   </h3>
                                <ul role="list" className="mt-3 space-y-4">
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Whitepaper</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Roadmap</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Token</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Audit</a>
                                    </li>
                                </ul>
                            </div></div>
                            <div className="">  <div className="">
                                <h3 className="text-[18px] font-medium mb-[25px] leading-6 text-white text-left">Partnership</h3>
                                <ul role="list" className="mt-3 space-y-4">
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Submit Ticket</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Support</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">TRADE LATI/USDT</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">TRADE LATI/ ETH</a>
                                    </li>
                                </ul>
                            </div></div>
                            <div className=""> <div>
                                <h3 className="text-[18px] font-medium mb-[25px] leading-6 text-white text-left">knowledge Base</h3>
                                <ul role="list" className="mt-3 space-y-4">

                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Blog</a>
                                    </li>
                                </ul>
                            </div></div>
                            <div className=""> <div>
                                <h3 className="text-[18px] font-medium mb-[25px] leading-6 text-white text-left">Verified Cryptocurrencies</h3>
                                <ul role="list" className="mt-3 space-y-4">
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Bitcoin (BTC)</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Ethereum (ETH)</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Ripple (XRP)</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">Solana (SOL)</a>
                                    </li>
                                    <li className='text-left'>
                                        <a href="#" className="text-f15 leading-6 text-[#8f8f8f] hover:text-white font-medium">More..</a>
                                    </li>
                                </ul>
                            </div></div>
                        </div>
                    </div>
                </div>
                <footer className="pb-[48px] mt-[40px] border-t border-[#16161626]">
                    <div className="mx-auto  overflow-hidden  font-[Lausanne]">
                        <nav className="flex justify-between items-center " aria-label="Footer">
                            <div className='f-left'>
                                <div className="">
                                    <a href="#" className="leading-10 text-sm leading-6 text-white">© 2022 TheLattice. All rights reserved.</a>
                                </div>
                            </div>
                            <div className='f-right pr-[87px]'>
                                <ul className='flex gap-5'>
                                    <li>
                                        <a href="#" className=" leading-10 text-sm leading-6 text-[#8f8f8f] hover:text-white ">Cookie Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className=" leading-10 text-sm leading-6 text-[#8f8f8f] hover:text-white ">Privacy Policy </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" leading-10 text-sm leading-6 text-[#8f8f8f] hover:text-white ">Terms & Conditions </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" leading-10 text-sm leading-6 text-[#8f8f8f] hover:text-white ">Disclaimer </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </footer>
            </footer>
        </>
    );
};

export default Footer;
