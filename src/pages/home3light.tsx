
import Footer from '../components/footer';
import Homeheaderweblight from '../components/headerweb3light';
import Footersmalllight from '../components/footersmalllight';
import ethsmall from "../images/ethereum.webp";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
import view from "../images/view.svg";
import wallet from "../images/wallets 1.png";
import brack from "../images/bracket-order.png";
import Homeheader2 from '../components/homeheader2';


import view1 from "../images/view.png";
export const Home3light = () => {
    return (
        <>
            <main className='bg-w text-black'>

                <div className="App">
                    <Homeheaderweblight name="John" />
                </div>

                <div className='mt-[85px] font-[Lausanne]'>
                    <div className='mx-auto px-[8px] sm:px-[16px] lg:px-[28px] w-[1120px] text-center  '>
                        <div className='view_section flex justify-between'>
                            <div className='max-w-[500px] text-left'>
                                <p className='text-left font-[Lausanne] text-[11px] md:text-[50px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>Objects</p>

                                <div className="font-medium text-[21px] mt-[10px] max-sm:text-[18px] text-[#919193] text-left" >We contribute to Web3's investment facilities &amp;<br />
                                    <span className="text-black dark:text-white" >securities in the promising,</span> <span >yet challenging</span>
                                    , <span className="text-black dark:text-white">blockchain ecosystem</span><br />
                                </div>
                                <div className='mt-[32px] text-left'>
                                    <button className='px-[20px] py-[1px] bg-[#ebebef] border border-[#0000000d] font-semibold rounded-full h-[40px] mr-2'><span className=' font-[Lausanne] text-[11px] md:text-[16px] font-bold bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>Get Started</span></button>
                                    <a href='#whygen' className='px-[15px] py-[9.5px] bg-[#ebebef] font-semibold rounded-full h-[40px] border border-[#0000000d] text-[#3c3c43]'>Why Objects?</a>

                                </div>
                            </div>
                            <div className='w-[440px] p-2'>
                                <img src={view1} />
                                {/* <div className="sm:hidden">
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
                                </div> */}
                            </div>
                        </div>
<div className='flex justify-between gap-[16px] mt-[64px]' id="whygen">
    <div className='border border-[#e5e5e5] bg-[#e9e9e98f] py-[24px] px-[20px] rounded-md text-left'>
        <p className=' text-[20px] font-bold text-[#8a8afe] '>
        Safe 
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
    <div className='border border-[#e5e5e5] bg-[#e9e9e98f] py-[24px] px-[20px] rounded-md text-left'>
        <p className=' text-[20px] font-bold text-[#8a8afe] '>
        Reliable 
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
    <div className='border border-[#e5e5e5] bg-[#e9e9e98f] py-[24px] px-[20px] rounded-md text-left'>
        <p className=' text-[20px] font-bold text-[#8a8afe] '>
        Smooth 
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
    <div className='border border-[#e5e5e5] bg-[#e9e9e98f] py-[24px] px-[20px] rounded-md text-left'>
        <p className=' text-[20px] font-bold text-[#8a8afe] '>
        Intelligent API
        </p>
        <p className='pt-[20px] text-[#919193] text-[17px] font-semibold '>Composable modules to build apps & libraries with speed</p>
    </div>
</div>
<div className='text-overlay py-[70px]'>
<p className="relative  font-[Lausanne] leading-none pr-[30px] pl-[20px] mb-[-1px] text-[80px] py-[10px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text">Why Genius Y?</p>

</div>
<div className='three_Sections flex justify-between gap-[20px]'>
    <div className='w-[50%]'>
        <div className='bg-[#c1c1c18f] px-[40px] border border-[#e5e5e5] overflow-hidden pr-[0px] text-left relative flex justify-between gap-[40px] rounded-xl'>
         <div className='w-[50%] py-[36px]'>
         <p className='text-[24px] leading-[22px] text-black'>Verify credibility</p>
            <p className='text-[16px] text-[#919193] pt-[20px] font-medium'>Your funds are yours. Trade with no risk of bank runs.</p>
            <button className="mt-[20px] px-[20px] py-[1px] bg-[#5057ef38] text-[#6d6faf] font-semibold rounded-md h-[40px] mr-2">Analyse Now</button>
         </div>
            <div className='w-[50%]'>
            <img className='object-cover' src={wallet} />

            </div>
        </div>
        <div className='mt-[20px] bg-[#c1c1c18f] border border-[#e5e5e5] px-[40px] py-[36px] text-left relative flex justify-between gap-[40px] rounded-xl'>
         <div className='w-[70%]'>
         <p className='text-[24px] leading-[22px] text-black'>Buy crypto with a click</p>
            <p className='text-[16px] text-[#919193] pt-[20px] font-medium'>Get started with dYdX Chain in seconds, with your existing crypto wallet.</p>
            <p className='pt-[10px] text-[#919193] text-[15px]'>You can use various frontends to access dYdX<span className='text-[#fff] pl-1'>Learn more  →</span></p>
         </div>         
            <div className='w-[40%] text-right'>
            <button className="px-[20px] py-[1px] bg-[#5057ef38] text-[#6d6faf] font-semibold rounded-md h-[40px] mr-2">Buy Now
</button>
            </div>
        </div>
    </div>

    <div className='w-[50%] bg-[#c1c1c18f] border border-[#e5e5e5] px-[30px] py-[26px] text-left relative flex justify-between gap-[20px] rounded-xl'>
         <div className='w-[50%] flex justify-between flex-col items-start'>
<div>
<p className='text-[24px] leading-[22px] text-black'>Simple but effective swapping</p>
            <p className='text-[16px] text-[#919193] pt-[20px] font-medium'>Your funds are yours. Trade with no risk of bank runs.</p>
</div>
            <button className="mt-[30px] px-[20px] py-[1px] bg-[#1ad5dd75] text-[#46a9ad] font-semibold rounded-md h-[40px] mr-2">Swap Now</button>

         </div>
            <div className='w-[50%]'>
            <img className=' ' src={brack} />

            </div>
        </div>


</div>
<div className='flex gap-[20px]'>
        <div className='mt-[20px] bg-[#c1c1c18f] border border-[#e5e5e5] px-[40px] py-[36px] text-left relative flex justify-between gap-[40px] rounded-xl'>
         <div className='w-[70%]'>
         <p className='text-[24px] leading-[22px] text-black'>Buy crypto with a click</p>
            <p className='text-[16px] text-[#919193] pt-[20px] font-medium'>Get started with dYdX Chain in seconds, with your existing crypto wallet.</p>
            <p className='pt-[10px] text-[#919193] text-[15px]'>You can use various frontends to access dYdX<span className='text-[#fff] pl-1'>Learn more  →</span></p>
         </div>         
            <div className='w-[40%] text-right'>
            <button className="px-[20px] py-[1px] bg-[#5057ef38] text-[#6d6faf] font-semibold rounded-md h-[40px] mr-2">Buy Now
</button>
            </div>
        </div>
        <div className='mt-[20px] bg-[#c1c1c18f] border border-[#e5e5e5] px-[40px] py-[36px] text-left relative flex justify-between gap-[40px] rounded-xl'>
         <div className='w-[70%]'>
         <p className='text-[24px] leading-[22px] text-black'>Buy crypto with a click</p>
            <p className='text-[16px] text-[#919193] pt-[20px] font-medium'>Get started with dYdX Chain in seconds, with your existing crypto wallet.</p>
            <p className='pt-[10px] text-[#919193] text-[15px]'>You can use various frontends to access dYdX<span className='text-[#fff] pl-1'>Learn more  →</span></p>
         </div>         
            <div className='w-[40%] text-right'>
            <button className="px-[20px] py-[1px] bg-[#5057ef38] text-[#6d6faf] font-semibold rounded-md h-[40px] mr-2">Buy Now
</button>
            </div>
        </div>

        </div>
{/* <div className=''>
<button className="mt-[100px] px-[20px] py-[1px] bg-[#00000000] rounded-full h-[40px] border border-[#ebebf599] inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text font-bold mr-2 ">Become a sponsor</button>

</div>                */}
                    </div>

                    {/* <div className="App">
                    <Footersmalllight name="John" />
                </div>     */}

                </div>
            </main>
        </>
    )
}
export default Home3light;