

import Homeheader2 from '../components/homeheader2';
import genbig from "../images/Objects Logo.png";
import Footersmall from '../components/footersmall';
export const Creditstext = () => {
    return (
        <>
            <div className='main'>
                <div className="App">
                    <Homeheader2 name="John" />
                </div>
                <div className='pt-[140px]'>
                    <div className='mx-auto px-[20px] sm:px-[20px] lg:px-[28px] max-w-[1120px] text-center '>
                        <div className=' bg-[#292929] text-[#E7E8DE] font-semibold text-[12px] sm:text-[16px] px-4 py-2 pb-2.5 rounded-full inline text-center font-normal pt-[9px] '> Oh hey 👋🏽 <span className='font-bold text-gradient'>This is us!</span> </div>
                        <div className='mt-[50px] view_section md:flex justify-between'>
                            <div className='w-full md:max-w-[400px] lg:max-w-[450px] text-left'>
                                <p className='inline text-left font-grok text-[31px] leading-[34px] md:leading-[35px] md:text-[33px] font-bold text-gradient '>Pioneering Change in Crypto: The Objects Difference</p>

                                <div className="font-medium text-[12px] mt-[10px] sm:text-[16px] text-[#919193] text-left" >Welcome to Objects, the vanguard of transformation in the cryptocurrency landscape. Beyond being a platform, we are on a mission to challenge the prevailing issues within Web3, redefining the crypto investment experience, and arming our users against scams.
                                </div>
                                <div className='mt-[32px] text-left'>
                                    {/* <a href='#aboutdel' className='px-[15px] py-[9.5px] pb-[11px] bg-[#313136] font-semibold rounded-full h-[40px] border border-[#ffffff1a] text-[#E7E8DE] '>Learn More</a> */}
                                </div>
                            </div>
                            <div className='mx-auto w-[300px] lg:w-[500px] xl:w-[600px] flex items-center mt-[80px] md:mt-5 pl-0 lg:pl-[80px]'>
                        <img className='w-[100%] lg:w-[80%] mx-auto' src={genbig} />
                              
                            </div>
                        </div>
                 <div className='mt-[80px] md:mt-[100px] lg:flex justify-between' id='aboutdel'>
                 <div className='mt-[54px]'>
                            <h1 className='text-[#97e15f] text-[22px] md:text-[25px] leading-1 font-semibold font-grok'>Our Vision</h1>
                            <p className='text-[14px] md:text-[18px] text-[#E7E8DE] font-normal leading-6 md:leading-8 mt-2'>Objects was born out of a vision to disrupt the status <br className='md:flex hidden' />  quo and elevate the crypto investment journey. <br className='md:flex hidden' />  We are driven by the belief that navigating the  <br className='md:flex hidden' /> complexities of Web3 should be <br className='md:flex hidden' /> empowering,  secure, and devoid <br className='md:flex hidden' /> of the common pitfalls that <br className='md:flex hidden' />  often hinder progress. </p>
                        </div>
                        <div className='mt-[54px]'>
                            <h1 className='text-[#9383ff] text-[22px] md:text-[25px] leading-[28px] font-semibold font-grok'>The Guardians of Your Crypto Journey</h1>
                            <p className='text-[14px] md:text-[18px] text-[#E7E8DE] font-normal leading-6 md:leading-8 mt-2'>Objects is more than a team; we are the guardians <br className='md:flex hidden' /> of your crypto aspirations. Our collective expertise <br className='md:flex hidden' /> spans technology, finance, and security. <br className='md:flex hidden' /> Together,  we stand united against the challenges <br className='md:flex hidden' /> that have become synonymous with the <br className='md:flex hidden' /> crypto world, advocating for a safer,<br className='md:flex hidden' /> more transparent future. </p>
                        </div>
                 </div>
                 <div className='mt-[54px] lg:mt-[80px] max-w-[470px] mx-auto'>
                            <h1 className='text-[#38adcc] text-[22px] md:text-[25px] leading-[28px] font-semibold font-grok'>What Sets Us Apart</h1>
                            <div className='text-[14px] md:text-[18px] text-[#E7E8DE] font-normal leading-6 md:leading-8 mt-2'>
                            <p><b>Challenge Accepted:</b> We fearlessly challenge the common issues within Web3. From security concerns to user experience, we tackle them head-on, constantly <br className='md:flex hidden' /> innovating for a brighter crypto future.<br className='md:flex hidden' /></p>
                            <p><b>Empowerment Through Education:</b> Knowledge is power, and we empower our users with the education they need to make informed decisions. Say goodbye to the era of uncertainty and embrace the era of enlightenment.</p>
                            <p><b>Guardians Against Scams:</b> Scams have no place in our community. We employ robust measures to safeguard <br className='md:flex hidden' /> our users, ensuring that their crypto journey <br className='md:flex hidden' /> is free from malicious actors.</p>
                             </div>
                        </div>
                        <div className='mt-[54px] lg:mt-[80px] max-w-[420px] mx-auto'>
                            <h1 className='text-[#c394b3] text-[22px] md:text-[25px] leading-[28px] font-semibold font-grok'>Join the Vanguard</h1>
                            <div className='text-[14px] md:text-[18px] text-[#E7E8DE] font-normal leading-6 md:leading-8 mt-2'>
                            <p>Objects invites you to join the vanguard of change. Whether you're an experienced trader seeking a  more secure platform or a newcomer eager to explore the vast potential of crypto, Objects  <br className='md:flex hidden' />is your ally in this transformative journey.
                            <br className='md:flex hidden' />
Thank you for choosing Objects the    <br className='md:flex hidden' />platform where challenges become    <br className='md:flex hidden' />opportunities and the crypto    <br className='md:flex hidden' /> investment experience is redefined.
</p>
                             </div>
                            <div className='py-[48px] pb-0 flex justify-center'><a href='./home' className='flex items-center gap-2.5 font-semibold text-[#E7E8DE] py-[8px] px-[15px] md:py-[12px] md:px-[24px] border border-[#525252] bg-[#424242] rounded-md'><svg className='w-[18px] h-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" fill="currentColor"></path></svg>Back</a></div>
                        </div>
                    </div>
                </div>
                <div className="App">
                    <Footersmall name="John" />
                </div>
            </div>
        </>
    )
}
export default Creditstext;