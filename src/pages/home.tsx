
import Footer from '../components/footer';
import Header from '../components/header';
import Headerfull from '../components/headerfull';
import ethsmall from "../images/ethereum.webp";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
import smll1 from "../images/sma2.jpg";
import { useAccount, useChainId, useSwitchNetwork } from 'wagmi';
import { useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';

export const Home = () => {


    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    
    const useAccount_ = useAccount();
    console.log("🚀 ~ Home ~ useAccount:", useAccount_);
    const chainId = useChainId();
    console.log("🚀 ~ Home ~ chainId:", chainId);
    const { chains, switchNetwork } = useSwitchNetwork();
    console.log("🚀 ~ Home ~ switchNetwork:", chains);
    const networkName = (chains: any) => {
        
        const foundChain = chains.find((chains: any) => chains.id === chainId);
        console.log("🚀 ~ networkName ~ foundChain:", foundChain)
        if (foundChain) {
            return foundChain.network;
        } else {
            return '';
        }
    }

    const networkName_1 = networkName(chains);
    console.log("🚀 ~ networkName ~ networkName:", networkName_1)


    return (
        <>
            <div className='main'>

                <div className="App">
                    <Headerfull name="John" />
                </div>

               <div className='py-[50px] md:pt-[108px]'>
               <div className='mx-auto px-[0px] sm:px-[16px] lg:px-[16px] w-11/12 text-center pb-[2px]'>
                        <div className='bg-[#292929] text-white text-[12px] sm:text-[16px] px-4 py-2 pb-2.5 rounded-full inline text-center font-normal pt-[9px]'>Oh hey 👋🏽
                            {useAccount_.status === 'disconnected' ?
                                (<span className='font-[Lausanne] text-[11px] md:text-[15px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>!Wallet not connected. </span>) :
                                (<span className='font-[Lausanne] text-[11px] md:text-[15px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>{useAccount_.address}</span>)
                            }
                            </div>
                    {/* <div className='mt-10 sm:mt-14'>
                        <div className='font-[Lausanne] text-5xl font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#ffd85a] to-[#e9ff7c] inline-block text-transparent bg-clip-text'>Medium <span className='text-4xl font-bold'>Risk</span></div>
                        <div className='downloadcode mt-4 max-w-[360px] max-h-[100px] items-center mx-auto rounded-[20px] border border-[#ffffff12] bg-[#1b1b1b] flex'>
                            <div className='p-[15px] bg-[#9383ff] rounded-s-[20px]'><img className="h-[70px] w-[75px] " src={eth} alt="Your Company" /></div>
                            <div className='p-4 py-4.5 pr-0 pt-5 pl-[14px] text-left'>
                                <p className='text-left text-sm font-semibold text-white pb-1.5'>Buy Crypto Safely</p>
                                <p className='text-[11px] text-left  text-[#9b9b9b] leading-3'>Trade on the go. Anywhere, anytime. - Get it now.</p>
                                <p className='text-left text-xs font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text leading-3'>G<i>Y</i> Ads</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='option box mb-[20px] mt-[50px] md:mt-[100px]'>
                        <div className='border border-[#34373F] bg-[#18191B]  rounded-2xl  lg:w-6/12 sm:w-10/12 w-12/12 mx-auto p-3 sm:p-6'>
                            <div className='choose head pb-6 flex items-center justify-between'>
                                <div className='flex gap-4'><p className='text-left text-white text-md font-semibold'>Swap</p><p className='text-left text-[#9b9b9b] text-md font-semibold'>Buy</p></div>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 MenuButton__Icon-sc-7e635c1d-0 dLgZFm"><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor"></path></svg></div>
                            </div>
                            <div className='relative option-content rounded-2xl w-full p-0.5 inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff]'>
                            {useAccount_.status === 'disconnected' ?
                                        (<div className='bg-[#17181d] p-4 rounded-2xl' >
                                            <div className='h-32 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You Pay</label>
                                                <div className="relative">
                                                    <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                        <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                    <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                </div>
                                            </div>
                                            <div className='p-2 bg-[#18191B] border-black border-4 rounded-xl absolute left-[46%] top-[36%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                            <div className='h-32 mt-1 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You receive</label>
                                                <div className="relative">
                                                    <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                        <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                    <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                </div>

                                            </div>
                                            <div><button onClick={openConnectModal} className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#311c31]'>Connect Wallet</button></div>
                                        </div>
                                            
                                        ) : (
                                    
                                            <div className='bg-[#17181d] p-4 rounded-2xl'>
                                                <div className='h-32 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                    <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You Pay</label>
                                                    <div className="relative">
                                                        <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                            <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                        <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                    </div>
                                                </div>
                                                <div className='p-2 bg-[#18191B] border-black border-4 rounded-xl absolute left-[46%] top-[36%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                                <div className='h-32 mt-1 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                    <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You receive</label>
                                                    <div className="relative">
                                                        <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                            <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                        <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                    </div>

                                                </div>
                                                <div><button className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#311c31]'>Swap</button></div>
                                            </div>
                                        )}     
                            </div>
                        </div>
                    </div>
                    {/* <div className='option box my-10'>
                        <div className='border border-[#34373F] bg-[#18191B]  rounded-2xl  md:w-6/12 w-12/12 mx-auto p-3 sm:p-6'>
                            <div className='choose head pb-6 flex items-center justify-between'>
                                <div className='flex gap-4'><p className='text-left text-white text-md font-semibold'>Swap</p><p className='text-left text-[#9b9b9b] text-md font-semibold'>Buy</p></div>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 MenuButton__Icon-sc-7e635c1d-0 dLgZFm"><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor"></path></svg></div>
                            </div>
                            <div className='relative option-content rounded-2xl w-full p-0.5 inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff]'>
                                    {useAccount_.status === 'disconnected' ?
                                        (<div className='bg-[#17181d] p-4 rounded-2xl' >
                                            <div className='h-32 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You Pay</label>
                                                <div className="relative">
                                                    <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                        <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                    <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                </div>
                                            </div>
                                            <div className='p-2 bg-[#18191B] border-black border-4 rounded-xl absolute left-[46%] top-[36%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                            <div className='h-32 mt-1 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You receive</label>
                                                <div className="relative">
                                                    <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                        <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                    <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                </div>

                                            </div>
                                            <div><button onClick={openAccountModal} className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#311c31]'>Connect Wallet</button></div>
                                        </div>
                                            
                                        ) : (
                                    
                                            <div className='bg-[#17181d] p-4 rounded-2xl'>
                                                <div className='h-32 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                    <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You Pay</label>
                                                    <div className="relative">
                                                        <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                            <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                        <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                    </div>
                                                </div>
                                                <div className='p-2 bg-[#18191B] border-black border-4 rounded-xl absolute left-[46%] top-[36%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                                <div className='h-32 mt-1 you-pay bg-[#18191B] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                                    <label className="block text-left text-sm font-medium leading-6 text-[#9b9b9b]">You receive</label>
                                                    <div className="relative">
                                                        <input type="text" name="text" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" />
                                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" absolute right-0 top-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-sm sm:text-lg font-semibold text-white uppercase border-[#34373F]  border  hover:bg-black" type="button">
                                                            <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                                        <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                                    </div>

                                                </div>
                                                <div><button className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#311c31]'>Swap</button></div>
                                            </div>
                                        )}        
                                    
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='option box my-10'>
                        <div className='border border-[#34373F] bg-[#141616]  rounded-2xl  md:w-6/12 w-12/12 mx-auto p-3 sm:p-6'>
                            <div className='choose head pb-6 flex items-center justify-between'>
                                <div className='flex gap-4'><p className='text-left text-white text-md font-semibold'>Swap</p><p className='text-left text-[#9b9b9b] text-md font-semibold'>Buy</p></div>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 MenuButton__Icon-sc-7e635c1d-0 dLgZFm"><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor"></path></svg></div>
                            </div>
                            <div className='relative option-content rounded-2xl w-full p-0.5 inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff]'>
                                <div className='bg-[#000] p-1 rounded-2xl'>
                                    <div className='you-pay bg-[#141616] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                        <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                        <div className="relative">
                                            <label className='text-left block text-lg sm:text-4xl text-white leading-[44px]'>7,658</label>
                                          <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2 md:gap-4'>
                                         <div className=''>
                                           <svg className='md:h-5 md:w-5 h-4 w-4'  version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 30 30"><g><path d="M15 6a17.88 17.88 0 0 1 12.735 5.28l1.415-1.414C25.372 6.083 20.347 4 15 4S4.634 6.078.865 9.851l1.415 1.413C5.67 7.87 10.188 6 15 6z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M26.32 12.693C23.297 9.666 19.277 8 15 8S6.707 9.663 3.692 12.681l1.415 1.413C7.744 11.454 11.257 10 15 10s7.26 1.458 9.905 4.106z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M23.49 15.52C21.223 13.25 18.208 12 15 12s-6.22 1.247-8.481 3.511l1.415 1.413C9.817 15.04 12.327 14 15 14s5.186 1.041 7.075 2.933z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M20.66 18.346C19.148 16.833 17.139 16 15 16s-4.147.832-5.655 2.341l1.415 1.413C11.89 18.623 13.396 18 15 18s3.111.625 4.245 1.76zM12.879 21.879C12.312 22.445 12 23.199 12 24s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-1.133-1.134-3.11-1.134-4.242 0zM16 24a.993.993 0 0 1-.293.707 1.024 1.024 0 0 1-1.414 0c-.189-.189-.293-.44-.293-.707s.104-.518.293-.707S14.733 23 15 23s.518.104.707.293.293.44.293.707z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path></g></svg>                                           </div>
                                          <p className='text-sm md:text-md text-[#9b9b9b]'>Chain:</p>
                                

                                          <button id="dropdownDefaultButton111" data-dropdown-toggle="dropdown111" className=" text-lg text-[#9b9b9b] font-no rmal pl-[5px] md:pl-[7px] pr-[6px] md:pr-[9px] py-[2px] bg-[#1A1B1E] border border-[#34373F] rounded-lg flex items-center gap-1" type="button">
                                            <img className="w-6 h-6 p-[4px]" src={ethsmall} alt="eth" />
                                               <p className="text-[14px]">Ethereum</p>
                                               <svg className="-mr-1 md:h-5 md:w-5 h-4 w-4 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                          </button>
                                            <div id="dropdown111" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton111"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                          </div>
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center bg-transparent px-3 py-1 text-sm sm:text-xl font-semibold text-[#9b9b9b] uppercase  border-0  hover:bg-black" type="button">
                                            <img className="md:w-8 md:h-8 h-6 w-6 p-[4px] mr-1" src={ethsmall} alt="eth" />   <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                            <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-2 bg-[#141616] border-black border-4 rounded-xl absolute left-[46%] top-[39%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                    <div className='you-pay bg-[#141616] rounded-2xl border-transparent p-3 md:p-5 hover:border-gray-700 mt-[3px]'>
                                        <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                        <div className="relative">
                                            <label className='text-left block text-lg sm:text-4xl text-white leading-[44px]'>7,658</label>
                                          <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2 md:gap-4'>
                                         <div className=''>
                                           <svg className='md:h-5 md:w-5 h-4 w-4'  version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 30 30"><g><path d="M15 6a17.88 17.88 0 0 1 12.735 5.28l1.415-1.414C25.372 6.083 20.347 4 15 4S4.634 6.078.865 9.851l1.415 1.413C5.67 7.87 10.188 6 15 6z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M26.32 12.693C23.297 9.666 19.277 8 15 8S6.707 9.663 3.692 12.681l1.415 1.413C7.744 11.454 11.257 10 15 10s7.26 1.458 9.905 4.106z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M23.49 15.52C21.223 13.25 18.208 12 15 12s-6.22 1.247-8.481 3.511l1.415 1.413C9.817 15.04 12.327 14 15 14s5.186 1.041 7.075 2.933z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M20.66 18.346C19.148 16.833 17.139 16 15 16s-4.147.832-5.655 2.341l1.415 1.413C11.89 18.623 13.396 18 15 18s3.111.625 4.245 1.76zM12.879 21.879C12.312 22.445 12 23.199 12 24s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-1.133-1.134-3.11-1.134-4.242 0zM16 24a.993.993 0 0 1-.293.707 1.024 1.024 0 0 1-1.414 0c-.189-.189-.293-.44-.293-.707s.104-.518.293-.707S14.733 23 15 23s.518.104.707.293.293.44.293.707z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path></g></svg>                                           </div>
                                          <p className='text-sm md:text-md text-[#9b9b9b]'>Chain:</p>
                                

                                          <button id="dropdownDefaultButton111" data-dropdown-toggle="dropdown111" className=" text-lg text-[#9b9b9b] font-no rmal pl-[5px] md:pl-[7px] pr-[6px] md:pr-[9px] py-[2px] bg-[#1A1B1E] border border-[#34373F] rounded-lg flex items-center gap-1" type="button">
                                            <img className="w-6 h-6 p-[4px]" src={ethsmall} alt="eth" />
                                               <p className="text-[14px]">Ethereum</p>
                                               <svg className="-mr-1 md:h-5 md:w-5 h-4 w-4 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                          </button>
                                            <div id="dropdown111" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton111"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                          </div>
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center bg-transparent px-3 py-1 text-sm sm:text-xl font-semibold text-[#9b9b9b] uppercase  border-0  hover:bg-black" type="button">
                                            <img className="md:w-8 md:h-8 h-6 w-6 p-[4px] mr-1" src={ethsmall} alt="eth" />   <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                            <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div><button className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#292929]'><span className='font-[Lausanne] text-[11px] md:text-[18px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>Connect Wallet</span></button></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='option box my-10'>
                        <div className='border border-[#34373F] bg-[#141616]  rounded-2xl  md:w-6/12 w-12/12 mx-auto p-3 sm:p-6'>
                            <div className='choose head pb-6 flex items-center justify-between'>
                                <div className='flex gap-4'><p className='text-left text-white text-md font-semibold'>Swap</p><p className='text-left text-[#9b9b9b] text-md font-semibold'>Buy</p></div>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 MenuButton__Icon-sc-7e635c1d-0 dLgZFm"><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor"></path></svg></div>
                            </div>
                            <div className='relative option-content rounded-2xl w-full p-0.5 inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff]'>
                                <div className='bg-[#000] p-1 rounded-2xl'>
                                    <div className='you-pay bg-[#141616] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                        <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                        <div className="relative">
                                            <label className='text-left block text-lg sm:text-4xl text-white leading-[44px]'>7,658</label>
                                          <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2 md:gap-4'>
                                         <div className=''>
                                           <svg className='md:h-5 md:w-5 h-4 w-4'  version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 30 30"><g><path d="M15 6a17.88 17.88 0 0 1 12.735 5.28l1.415-1.414C25.372 6.083 20.347 4 15 4S4.634 6.078.865 9.851l1.415 1.413C5.67 7.87 10.188 6 15 6z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M26.32 12.693C23.297 9.666 19.277 8 15 8S6.707 9.663 3.692 12.681l1.415 1.413C7.744 11.454 11.257 10 15 10s7.26 1.458 9.905 4.106z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M23.49 15.52C21.223 13.25 18.208 12 15 12s-6.22 1.247-8.481 3.511l1.415 1.413C9.817 15.04 12.327 14 15 14s5.186 1.041 7.075 2.933z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M20.66 18.346C19.148 16.833 17.139 16 15 16s-4.147.832-5.655 2.341l1.415 1.413C11.89 18.623 13.396 18 15 18s3.111.625 4.245 1.76zM12.879 21.879C12.312 22.445 12 23.199 12 24s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-1.133-1.134-3.11-1.134-4.242 0zM16 24a.993.993 0 0 1-.293.707 1.024 1.024 0 0 1-1.414 0c-.189-.189-.293-.44-.293-.707s.104-.518.293-.707S14.733 23 15 23s.518.104.707.293.293.44.293.707z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path></g></svg>                                           </div>
                                          <p className='text-sm md:text-md text-[#9b9b9b]'>Chain:</p>
                                

                                          <button id="dropdownDefaultButton111" data-dropdown-toggle="dropdown111" className=" text-lg text-[#9b9b9b] font-no rmal pl-[5px] md:pl-[7px] pr-[6px] md:pr-[9px] py-[2px] bg-[#1A1B1E] border border-[#34373F] rounded-lg flex items-center gap-1" type="button">
                                            <img className="w-6 h-6 p-[4px]" src={ethsmall} alt="eth" />
                                               <p className="text-[14px]">Ethereum</p>
                                               <svg className="-mr-1 md:h-5 md:w-5 h-4 w-4 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                          </button>
                                            <div id="dropdown111" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton111"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                          </div>
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center bg-transparent px-3 py-1 text-sm sm:text-xl font-semibold text-[#9b9b9b] uppercase  border-0  hover:bg-black" type="button">
                                            <img className="md:w-8 md:h-8 h-6 w-6 p-[4px] mr-1" src={ethsmall} alt="eth" />   <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                            <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-2 bg-[#141616] border-black border-4 rounded-xl absolute left-[46%] top-[39%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                    <div className='you-pay bg-[#141616] rounded-2xl border-transparent p-3 md:p-5 hover:border-gray-700 mt-[3px]'>
                                        <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                        <div className="relative">
                                            <label className='text-left block text-lg sm:text-4xl text-white leading-[44px]'>7,658</label>
                                          <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2 md:gap-4'>
                                         <div className=''>
                                           <svg className='md:h-5 md:w-5 h-4 w-4'  version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 30 30"><g><path d="M15 6a17.88 17.88 0 0 1 12.735 5.28l1.415-1.414C25.372 6.083 20.347 4 15 4S4.634 6.078.865 9.851l1.415 1.413C5.67 7.87 10.188 6 15 6z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M26.32 12.693C23.297 9.666 19.277 8 15 8S6.707 9.663 3.692 12.681l1.415 1.413C7.744 11.454 11.257 10 15 10s7.26 1.458 9.905 4.106z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M23.49 15.52C21.223 13.25 18.208 12 15 12s-6.22 1.247-8.481 3.511l1.415 1.413C9.817 15.04 12.327 14 15 14s5.186 1.041 7.075 2.933z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M20.66 18.346C19.148 16.833 17.139 16 15 16s-4.147.832-5.655 2.341l1.415 1.413C11.89 18.623 13.396 18 15 18s3.111.625 4.245 1.76zM12.879 21.879C12.312 22.445 12 23.199 12 24s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-1.133-1.134-3.11-1.134-4.242 0zM16 24a.993.993 0 0 1-.293.707 1.024 1.024 0 0 1-1.414 0c-.189-.189-.293-.44-.293-.707s.104-.518.293-.707S14.733 23 15 23s.518.104.707.293.293.44.293.707z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path></g></svg>                                           </div>
                                          <p className='text-sm md:text-md text-[#9b9b9b]'>Chain:</p>
                                

                                          <button id="dropdownDefaultButton111" data-dropdown-toggle="dropdown111" className=" text-lg text-[#9b9b9b] font-no rmal pl-[5px] md:pl-[7px] pr-[6px] md:pr-[9px] py-[2px] bg-[#1A1B1E] border border-[#34373F] rounded-lg flex items-center gap-1" type="button">
                                            <img className="w-6 h-6 p-[4px]" src={ethsmall} alt="eth" />
                                               <p className="text-[14px]">Ethereum</p>
                                               <svg className="-mr-1 md:h-5 md:w-5 h-4 w-4 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                          </button>
                                            <div id="dropdown111" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton111"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                          </div>
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center bg-transparent px-3 py-1 text-sm sm:text-xl font-semibold text-[#9b9b9b] uppercase  border-0  hover:bg-black" type="button">
                                            <img className="md:w-8 md:h-8 h-6 w-6 p-[4px] mr-1" src={ethsmall} alt="eth" />   <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                            <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div><button className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#141616]'><span className='font-[Lausanne] text-[11px] md:text-[18px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>Connect Wallet</span></button></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='option box my-10'>
                        <div className='border border-[#34373F] bg-[#141616]  rounded-2xl  md:w-6/12 w-12/12 mx-auto p-3 sm:p-6'>
                            <div className='choose head pb-6 flex items-center justify-between'>
                                <div className='flex gap-4'><p className='text-left text-white text-md font-semibold'>Swap</p><p className='text-left text-[#9b9b9b] text-md font-semibold'>Buy</p></div>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 MenuButton__Icon-sc-7e635c1d-0 dLgZFm"><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor"></path></svg></div>
                            </div>
                            <div className='relative option-content rounded-2xl w-full p-0.5 inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff]'>
                                <div className='bg-[#000] p-1 rounded-2xl'>
                                    <div className='you-pay bg-[#141616] rounded-2xl border-transparent p-5 hover:border-gray-700'>
                                        <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                        <div className="relative">
                                            <label className='text-left block text-lg sm:text-4xl text-white leading-[44px]'>7,658</label>
                                            {/* <input type="email" name="email" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" /> */}
                                          <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2 md:gap-4'>
                                         <div className=''>
                                           <svg className='md:h-5 md:w-5 h-4 w-4'  version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 30 30"><g><path d="M15 6a17.88 17.88 0 0 1 12.735 5.28l1.415-1.414C25.372 6.083 20.347 4 15 4S4.634 6.078.865 9.851l1.415 1.413C5.67 7.87 10.188 6 15 6z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M26.32 12.693C23.297 9.666 19.277 8 15 8S6.707 9.663 3.692 12.681l1.415 1.413C7.744 11.454 11.257 10 15 10s7.26 1.458 9.905 4.106z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M23.49 15.52C21.223 13.25 18.208 12 15 12s-6.22 1.247-8.481 3.511l1.415 1.413C9.817 15.04 12.327 14 15 14s5.186 1.041 7.075 2.933z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M20.66 18.346C19.148 16.833 17.139 16 15 16s-4.147.832-5.655 2.341l1.415 1.413C11.89 18.623 13.396 18 15 18s3.111.625 4.245 1.76zM12.879 21.879C12.312 22.445 12 23.199 12 24s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-1.133-1.134-3.11-1.134-4.242 0zM16 24a.993.993 0 0 1-.293.707 1.024 1.024 0 0 1-1.414 0c-.189-.189-.293-.44-.293-.707s.104-.518.293-.707S14.733 23 15 23s.518.104.707.293.293.44.293.707z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path></g></svg>                                           </div>
                                          <p className='text-sm md:text-md text-[#9b9b9b]'>Chain:</p>
                                

                                          <button id="dropdownDefaultButton111" data-dropdown-toggle="dropdown111" className=" text-lg text-[#9b9b9b] font-no rmal pl-[5px] md:pl-[7px] pr-[6px] md:pr-[9px] py-[2px] bg-[#1A1B1E] border border-[#34373F] rounded-lg flex items-center gap-1" type="button">
                                            <img className="w-6 h-6 p-[4px]" src={ethsmall} alt="eth" />
                                               <p className="text-[14px]">Ethereum</p>
                                               <svg className="-mr-1 md:h-5 md:w-5 h-4 w-4 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                          </button>
                                            <div id="dropdown111" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton111"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                          </div>
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center bg-transparent px-3 py-1 text-sm sm:text-xl font-semibold text-[#9b9b9b] uppercase  border-0  hover:bg-black" type="button">
                                            <img className="md:w-8 md:h-8 h-6 w-6 p-[4px] mr-1" src={ethsmall} alt="eth" />   <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                            <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-2 bg-[#141616] border-black border-4 rounded-xl absolute left-[46%] top-[39%]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                                    <div className='you-pay bg-[#141616] rounded-2xl border-transparent p-3 md:p-5 hover:border-gray-700 mt-[3px]'>
                                        <label className="block text-left text-sm font-medium  text-[#9b9b9b]">You Pay</label>
                                        <div className="relative">
                                            <label className='text-left block text-lg sm:text-4xl text-white leading-[44px]'>7,658</label>
                                            {/* <input type="email" name="email" id="email" className="block px-0 text-lg sm:text-4xl bg-transparent w-full rounded-md border-0 py-0.5 text-white shadow-sm ring-1 ring-transparent ring-gray-300 text-[#9b9b9b] placeholder:text-[#9b9b9b] focus:transparent focus:ring-transparent  sm:leading-1" placeholder="0" /> */}
                                          <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2 md:gap-4'>
                                         <div className=''>
                                           <svg className='md:h-5 md:w-5 h-4 w-4'  version="1.1"  width="512" height="512" x="0" y="0" viewBox="0 0 30 30"><g><path d="M15 6a17.88 17.88 0 0 1 12.735 5.28l1.415-1.414C25.372 6.083 20.347 4 15 4S4.634 6.078.865 9.851l1.415 1.413C5.67 7.87 10.188 6 15 6z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M26.32 12.693C23.297 9.666 19.277 8 15 8S6.707 9.663 3.692 12.681l1.415 1.413C7.744 11.454 11.257 10 15 10s7.26 1.458 9.905 4.106z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M23.49 15.52C21.223 13.25 18.208 12 15 12s-6.22 1.247-8.481 3.511l1.415 1.413C9.817 15.04 12.327 14 15 14s5.186 1.041 7.075 2.933z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path><path d="M20.66 18.346C19.148 16.833 17.139 16 15 16s-4.147.832-5.655 2.341l1.415 1.413C11.89 18.623 13.396 18 15 18s3.111.625 4.245 1.76zM12.879 21.879C12.312 22.445 12 23.199 12 24s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-1.133-1.134-3.11-1.134-4.242 0zM16 24a.993.993 0 0 1-.293.707 1.024 1.024 0 0 1-1.414 0c-.189-.189-.293-.44-.293-.707s.104-.518.293-.707S14.733 23 15 23s.518.104.707.293.293.44.293.707z" fill="#9b9b9b" opacity="1" data-original="#000000" className=""></path></g></svg>                                           </div>
                                          <p className='text-sm md:text-md text-[#9b9b9b]'>Chain:</p>
                                

                                          <button id="dropdownDefaultButton111" data-dropdown-toggle="dropdown111" className=" text-lg text-[#9b9b9b] font-no rmal pl-[5px] md:pl-[7px] pr-[6px] md:pr-[9px] py-[2px] bg-[#1A1B1E] border border-[#34373F] rounded-lg flex items-center gap-1" type="button">
                                            <img className="w-6 h-6 p-[4px]" src={ethsmall} alt="eth" />
                                               <p className="text-[14px]">Ethereum</p>
                                               <svg className="-mr-1 md:h-5 md:w-5 h-4 w-4 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                          </button>
                                            <div id="dropdown111" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton111"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                          </div>
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center bg-transparent px-3 py-1 text-sm sm:text-xl font-semibold text-[#9b9b9b] uppercase  border-0  hover:bg-black" type="button">
                                            <img className="md:w-8 md:h-8 h-6 w-6 p-[4px] mr-1" src={ethsmall} alt="eth" />   <p className="mr-2 xl:mr-3">eth</p><svg className="-mr-1 h-6 w-6 text-[#9b9b9b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button>
                                            <div id="dropdown" className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden" data-popper-placement="bottom"><ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">Support</a></li><li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white">License</a></li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div><button className='w-full rounded-xl p-4 mt-1 text-[#fc72ff] font-bold text-sm sm:text-lg bg-[#311c31]'>Connect Wallet</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fixed bottom-0 left-0 right-0 footer-icons text-center mt-44 mb-2'>
                        <div className='mx-auto max-w-[304px] max-h-[82px] border border-[#404043] rounded-3xl bg-[#17181d54] p-[16px] px-[10px]  backdrop-blur-[2px] flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#779ef9] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Ethereum</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#f1b90c] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='w-[170px] absolute top-[-65px] left-[-45px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Binance Smart Chain</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[5px]" src={f2} alt="eth" /></div>

                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#8147e5] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[3px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Polygon</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f3} alt="eth" /></div>
                                <div className='w-[2px] h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Compare</p>
                                        </div>
                                    </div>
                                    <img className="h-[28px] w-[auto] p-[4px]" src={f4} alt="eth" /></div>

                            </div>

                        </div>
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}
export default Home;