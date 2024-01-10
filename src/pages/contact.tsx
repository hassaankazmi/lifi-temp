import Footersmall from '../components/footersmall';
import Homeheader2 from '../components/homeheader2';
export const Contact = () => {
    return (
        <>
            <div className='main'>
                <div className="App">
                    <Homeheader2 name="John" />
                </div>
                <div className='pt-[100px] md:pt-[200px] text-[#E7E8DE] grid grid-cols-1 gap-[40px] lg:gap-[70px] md:grid-cols-2 mx-auto p-[20px] md:px-[35px] 2xl w-12/12 md:w-12/12'>
                    <div className='lg:py-10 py-2  text-left pr-0 xl:pr-20 pl-0 xl:pl-[100px]'>
                        <h1 className='font-grok inline text-[31px] leading-[36px] lg:leading-[50px] pb-2 sm:text-3xl xl:text-[48px] font-semibold mb-4 text-gradient'>Support Objects - Challenging Web3
                        </h1>
                        <p className='text-sm sm:text-md xl:text-lg font-medium my-[20px]'>Objects is on a mission to revolutionize the crypto space by <span className='inline-grid my-2 bg-[#424242] md:py-[3px] px-[5px] py-[3px] md:pb-[4px] md:px-[10px] rounded-full text-[14px] md:text-[15px] whitespace-nowrap text-[#97e15f]'>challenging Web3’s</span>  major problems, and we invite you to be a part of this exciting journey. </p>
                        <p className='text-sm sm:text-md xl:text-lg font-medium leading-[26px] md:leading-0'><span className='inline-grid my-0.5 bg-[#424242] text-[#c394b3] md:py-[3px] px-[5px] py-[3px] md:pb-[4px] md:px-[10px] rounded-full text-[14px] md:text-[15px] whitespace-nowrap leading-0'>Your support</span>  fuels our commitment to providing cutting-edge features, unparalleled user experiences, and a platform that empowers the future of crypto enthusiasts.</p>
                    </div>
                    <div className='grid lg:grid-cols-2 py-2 pb-8 lg:py-10 gap-10'>
                        <div ><p className='text-lg xl:text-2xl font-semibold mb-3 font-grok'>Innovation</p>
                            <p className='text-lg xl:text-xl text-[#919193]'>Drive the innovation that shapes the future of crypto.</p></div>
                        <div ><p className='text-lg xl:text-2xl font-semibold mb-3 font-grok'>Community Growth</p>
                            <p className='text-lg xl:text-xl text-[#919193]'>Support a thriving community of like-minded individuals.</p></div>
                        <div ><p className='text-lg xl:text-2xl font-semibold mb-3 font-grok'>Continuous Development</p>
                            <p className='text-lg xl:text-xl text-[#919193]'>Contribute to ongoing enhancements and new features.</p></div>
                        <div ><p className='text-lg xl:text-2xl font-semibold mb-3 font-grok'>Web3 Challenges</p>
                            <p className='text-lg xl:text-xl text-[#919193]'>Support a community that aims to make the brutal crypto ecosystem easier for new as well as experienced crypto investors.</p></div>
                    </div>
                </div>
                <div className='px-[20px] md:px-0 mt-[50px] md:mt-[100px]  max-w-[500px] mx-auto text-center'>
                    <h1 className='text-[#E7E8DE] text-[25px] font-semibold font-grok'>How to Contribute:</h1>
                    <p className='text-[16px] md:text-[18px] text-[#E7E8DE] font-normal leading-8 dm:leading-10 mt-2'><span className='mb-2 block'>Send your donation to our Ethereum address:</span>
                        <div className='my-[10px] bg-[#292929] text-[#E7E8DE] font-semibold text-[12px] sm:text-[16px] px-4 py-2 pb-2.5 rounded-full inline text-center font-normal pt-[9px]'><span className='text-gradient font-bold '>0xCf6fDAa140c1c438c634ce041f4F5AC2F18ddBDd</span>
                        </div>
                        <br className='md:flex hidden' />
                        <span className='mt-8 block'> Be a catalyst for change in the crypto world.</span>
                        Every contribution, big or small, powers Objects's evolution and strengthens our commitment to excellence. Thank you for being a vital part of our journey! <br className='md:flex hidden' />
                        <p className='mt-3 font-bold'> Ready to Fuel the Revolution? </p></p>
                    <div className='py-[30px] md:py-[48px] pb-0 flex justify-center'>
                        <a href='./home' className='flex items-center gap-2.5 font-semibold text-[#E7E8DE] py-[10px] px-[20px] md:py-[12px] md:px-[24px] border border-[#525252] bg-[#424242] rounded-md'><svg className='w-[18px] h-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" fill="currentColor"></path></svg>Back</a></div>
                </div>

               
                <div className="App">
                    <Footersmall name="John" />
                </div>
            </div>
        </>
    )
}
export default Contact;