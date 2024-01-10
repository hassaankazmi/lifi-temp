
import Footer from '../components/footer';
import Homeheaderweb from '../components/headerweb3';
import Footersmall from '../components/footersmall';
import ethsmall from "../images/ethereum.webp";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
import view from "../images/view.svg";
import wallet from "../images/wallets 1.png";
import brack from "../images/bracket-order.png";
import Homeheader2 from '../components/homeheader2';
import fav from "../images/Design_GY 16x16.svg";
import logo from "../images/Genius Y (1).svg";
export const Home3 = () => {
    return (
        <>
            <div className='main'>

                <div className="App">
                    <Homeheaderweb name="John" />
                </div>

                <div className='pt-[100px] font-[Lausanne]'>
                    <div className='mx-auto px-[8px] sm:px-[16px] lg:px-[28px] w-[1120px] text-center  '>
                        <div className='view_section flex justify-between'>
                            <div className='max-w-[500px] text-left'>
                                <p className='text-left font-[Lausanne] text-[11px] md:text-[50px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>Challengin Web3</p>
                                <div className="font-medium text-[21px] mt-[10px] max-sm:text-[18px] text-[#919193] text-left" >Build reliable apps &amp; libraries with<br />
                                    <span className="text-white dark:text-white" >lightweight</span>, <span className="text-white dark:text-white" >composable</span>
                                    , and <span className="text-white dark:text-white">type-safe</span><br />
                                    modules that interface with Ethereum</div>
                                <div className='mt-[32px] text-left'>
                                    <button className='px-[20px] py-[1px] bg-[#ffc517] font-semibold rounded-full h-[40px] mr-2'>Get Started</button>
                                    <button className='px-[20px] py-[1px] bg-[#313136] font-semibold rounded-full h-[40px] border border-[#ffffff1a] text-white mr-2'>Why viem?</button>

                                    <button className='px-[20px] py-[1px] bg-[#313136] font-semibold rounded-full h-[40px] border border-[#ffffff1a] text-white'>View on GitHub</button>

                                </div>
                            </div>
                            <div className='w-[440px] bg-[#000] p-2'>

                                <div className="sm:hidden">
                                    <label className="sr-only">Select a tab</label>
                                    <select id="tabs" name="tabs" className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option>My Account</option>
                                        <option>Company</option>
                                        <option selected>Team Members</option>
                                        <option>Billing</option>
                                    </select>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="border-b border-[#222529]">
                                        <nav className="-mb-px flex space-x-8 px-[12px]" aria-label="Tabs">
                                            <a href="#" className="border-[#ffc517] text-white whitespace-nowrap border-b-2 py-2 px-1 text-[16px] font-bold" aria-current="page" >npm</a>
                                            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2 px-1 text-[16px] font-bold">pnpm</a>
                                            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2 px-1 text-[16px] font-bold" >bun</a>
                                        </nav>
                                       
                                    </div>
                                    <div className='py-4 px-[20px] text-left font-mono'>
                                        <p className='text-right text-xs text-[#ebebf561]'>bash</p>
                                            <p className=' text-[22px] text-[#9ECBFF] font-medium'><span className='text-[#B392F0] pr-2'>npm</span>i view</p>
                                        </div>
                                </div>
                            </div>
                        </div>
<div className='flex justify-between gap-[16px] mt-[64px]'>
    <div className='border border-[#ffffff1a] bg-[#2222268a] py-[24px] px-[20px] rounded-md text-left'>
        <p className='text-[20px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>
        Modular
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
    <div className='border border-[#ffffff1a] bg-[#2222268a] py-[24px] px-[20px] rounded-md text-left'>
        <p className='text-[20px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>
        Modular
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
    <div className='border border-[#ffffff1a] bg-[#2222268a] py-[24px] px-[20px] rounded-md text-left'>
        <p className='text-[20px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>
        Modular
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
    <div className='border border-[#ffffff1a] bg-[#2222268a] py-[24px] px-[20px] rounded-md text-left'>
        <p className='text-[20px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>
        Modular
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
</div>
{/* <p className="relative  font-[Lausanne] leading-none pr-[30px] pl-[20px] mb-[-1px] text-[120px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text">404=<i>Y</i></p> */}
<div className='text-overlay py-[70px]'>
</div>
<div className='three_Sections flex justify-between gap-[20px]'>
    <div className='w-[50%]'>
        <div className='bg-[#17181d] px-[40px] border border-[#34373F] overflow-hidden pr-[0px] text-left relative flex justify-between gap-[40px] rounded-xl'>
         <div className='w-[50%] py-[36px]'>
         <p className='text-[26px] text-white'>Self custody</p>
            <p className='text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Your funds are yours. Trade with no risk of bank runs.</p>
         </div>
            <div className='w-[50%]'>
            <img className='object-cover' src={wallet} />

            </div>
        </div>
        <div className='mt-[20px] bg-[#17181d] border border-[#34373F] px-[40px] py-[36px] text-left relative flex justify-between gap-[40px] rounded-xl'>
         <div className='w-[70%]'>
         <p className='text-[26px] text-white'>Simple onboarding</p>
            <p className='text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Get started with dYdX Chain in seconds, with your existing crypto wallet.</p>
            <p className='pt-[10px] text-[#807e98] text-[15px]'>You can use various frontends to access dYdX<span className='text-[#fff] pl-1'>Learn more  →</span></p>
         </div>
            <div className='w-[40%] text-right'>
            <button className="px-[20px] py-[1px] bg-[#878cfe38] text-[#b1b2ff] font-semibold rounded-md h-[40px] mr-2">Get Started</button>
            </div>
        </div>
    </div>

    <div className='w-[50%] bg-[#17181d] border border-[#34373F] px-[30px] py-[26px] text-left relative flex justify-between gap-[20px] rounded-xl'>
         <div className='w-[50%] flex justify-between flex-col items-start'>
<div>
<p className='text-[26px] text-white'>Self custody</p>
            <p className='text-[16px] text-[#c8c7d8] pt-[20px] font-medium'>Your funds are yours. Trade with no risk of bank runs.</p>
</div>
            <button className="mt-[30px] px-[20px] py-[1px] bg-[#4bf8ff75] text-[#0fedf5] font-semibold rounded-md h-[40px] mr-2">Trade Now</button>

         </div>
            <div className='w-[50%]'>
            <img className=' ' src={brack} />

            </div>
        </div>

</div>
        {/* <div className=''>
        <button className="mt-[100px] px-[20px] py-[1px] bg-[#00000000] rounded-full h-[40px] border border-[#ebebf599] inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text font-bold mr-2 ">Become a sponsor</button>

        </div>                */}
                    </div>
                    <div className="bg-transparent px-[30px]  bottom-0 w-full footer_links font-[Lausanne] md:flex justify-between items-center max-w-full px-[30px] mx-auto pt-[50px] py-[20px]">
                        <p className="text-[#ffffff80] text-xs font-medium">©2024 Objects.</p>

                        <p className="text-[#ffffff80] text-xs font-medium flex justify-center md:pt-0 pt-4 md:justify-end items-center">System Operational<span className="h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1"></span></p>
                        </div>  

                </div>
            </div>
        </>
    )
}
export default Home3;