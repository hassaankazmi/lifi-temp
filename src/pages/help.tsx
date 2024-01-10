
import { useState } from 'react';
import logo from "../images/Objects Logo.png";
import Homeheader2 from '../components/homeheader2';
import Footerbottom from '../components/footerbottom';
export const Help = () => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <>
            <div className='main'>

                <div className="App">
                    <Homeheader2 name="John" />
                </div>

                <div className='pt-[150px] md:pt-[150px] mx-auto px-[20px] sm:px-[20px] lg:px-4 w-11/12 py-0 text-center w-full flex justify-center items-center flex-col'>
                    <div className='mb-[30px]'>                        <h1 className='font-grok inline text-[31px] leading-[36px] lg:leading-[50px] pb-2 sm:text-3xl xl:text-[48px] font-semibold mb-4 text-gradient'>Help Center</h1>
</div>
                    <div className=' max-w-[900px] mx-auto text-center '>

                        <p className='px-[15px] py-[5px] text-[16px] pb-[8px]  font-normal leading-8 tracking-[.2px] text-[#d8d8d8] mt-[16px] mb-[20px] bg-[#292929] text-[#E7E8DE] rounded-full inline text-center'>Help Section</p>
                        <p className='text-[24px] md:text-[29px] font-normal leading-[34px] text-[#E7E8DE] mt-[16px] mb-[20px]'>We've compiled a list of frequently asked questions. If you can't find the help you need, don't hesitate to contact us</p>
                    </div>
                    <div className='mt-[75px] faq md:max-w-[1200px]'>
                        <div className='flex md:flex-row flex-col justify-between gap-[10px] lg:gap-[20px] mb-[20px]'>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>How do I make a swap on Objects?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'>Swapping on Objects is a simple process. Visit our platform, connect your preferred wallet, and choose the tokens you want to swap. Follow the on-screen instructions to confirm the transaction, and that's it! Your swap will be executed through decentralized protocols seamlessl</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>Which wallets are supported for swaps?
</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'>Objects supports a range of decentralized wallets. Currently, we are compatible with wallets like MetaMask, Trust Wallet, and Coinbase Wallet. Ensure your wallet is connected to our platform to initiate swaps.</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>What cryptocurrencies can I swap on Objects?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'> Objects offers a diverse range of cryptocurrencies for swapping. Our platform supports various tokens based on the decentralized protocols we integrate with. Check the available tokens on the swapping interface for the latest options.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-[20px] mb-[20px]'>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>How do I use the Token Analyser for token analysis?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'> The Token Analyser on Objects is a powerful tool for analyzing tokens. Enter the token address or name into the scanner, select the chain and it will provide you with key information such as historical performance, market sentiment, and other relevant data. Use this tool to make informed decisions before engaging in any transactions.</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>What information does the Token Analyser provide?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'>The Token Analyser offers comprehensive insights, including historical price charts, market sentiment analysis, and key metrics related to the selected token. It helps users assess the potential risks and rewards associated with a particular token.</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>Can I use the Token Scanner for any token on the blockchain?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'>The Token Analyser on Objects is designed to work with tokens that are supported by the decentralized protocols integrated into our platform. Check the Analyser for the list of available tokens and ensure the token you are interested in is included.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-[20px] mb-[20px]'>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>How often is the Token Analyser updated?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'> The Token Analyser is regularly updated to provide users with the latest and most accurate information. The frequency of updates depends on the decentralized protocols and data sources we integrate with.</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>Is there a fee for using the Token Analyser?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'> No, the Token Analyser is a free tool provided by Objects to empower users with valuable information for token analysis. There are no additional fees associated with using the Token Analyser.</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>How can I stay informed about new features and updates on Objects?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'>Stay connected with us! Follow our official social media channels and check our blog for the latest updates, feature releases, and announcements. We are committed to keeping our community informed and engaged.
</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-[20px] mb-[20px]'>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'> What should I do if I encounter any issues during a swap or while using the Token Scanner?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'> If you face any issues or have questions, reach out to our support team at <a href='mailto:support@objects.com'>support@objects.com</a>. Our team is here to assist you and ensure a smooth experience on Objects.</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] shadow-sm border border-[#333] rounded-md bg-[#2222268a]'>
                                <div className=' '>
                                    <p className=' text-left font-medium text-[#E7E8DE] text-[14px] lg:text-[15px] p-[15px] lg:p-[24px] border-b border-[#333] h-auto sm:h-[100px] lg:h-[80px] flex items-center justify-start'>How can I buy cryptocurrencies on Objects?</p>
                                </div>
                                <div>
                                    <p className='text-left font-normal text-[#E7E8DE] text-[15px] p-[24px]'>Buying cryptocurrencies on Objects is a straightforward process. Simply connect your compatible wallet, navigate to the buying section, and choose the cryptocurrency you wish to purchase. Follow the prompts to confirm your transaction. Objects supports a variety of payment methods for a seamless buying experience.
</p>
                                </div>
                            </div>
                            <div className='md:w-[33%] '>
                               
                            </div>
                        
                        </div>
                        <p className='text-left text-[18px] font-normal leading-[24px] text-[#d8d8d8] mt-[16px] mb-[20px]'>Feel free to integrate this question and answer into your FAQ section, and if you have any specific details regarding payment methods or other features related to the buying process, you can customize the answer accordingly.</p>


                    </div>
              
               
                </div>
                <div className='py-[20px] md:pt-[30px] pb-[10px] flex justify-center'>
                        <a  href='./home' className='flex items-center gap-2.5 font-semibold text-[#E7E8DE] py-[8px] px-[15px] md:py-[12px] md:px-[24px] border border-[#525252] bg-[#424242] rounded-md'>
                            <svg className='w-[18px] h-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" fill="currentColor"></path></svg>
                            Back</a></div>
                            <div className="App">
                    <Footerbottom name="John" />
                </div> 
            </div>
        </>
    )
}
export default Help;