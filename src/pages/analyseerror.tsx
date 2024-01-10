import Headerfull from '../components/headerfull';
import Footerlinksfixed from '../components/footerlinks';
export const error = () => {
 
    return (
        <>
            <div className='main h-screen'>
                <div className="App">
                    <Headerfull name="John" />
                </div>
                <div className='h-full mx-auto px-[20px] sm:px-4 lg:px-4 w-11/12 py-0 text-center w-full flex justify-center items-center flex-col'>
                    <div className=' max-w-[600px] mx-auto text-center flex flex-col justify-center items-center'>
                        <p className='inline relative  font-grok leading-none pr-[30px] pl-[20px] mb-[-1px] text-[42px] sm:text-[52px] md:text-[72px] lg:text-[120px] font-bold text-gradient'>Error</p>
                        <div className="inline-flex mt-[20px] bg-[#292929] text-[#E7E8DE] text-[12px] sm:text-[16px] px-[10px] md:px-4 py-2 pb-2.5 rounded-full inline-block text-center font-normal pt-[9px]">Oh no 👋🏽 <span className="pl-1 font-[Inter] text-[12px] md:text-[15px] font-bold text-gradient flex gap-2 items-center">0x949d48eca67b17269629c7194f4b727d4ef9e5d6<svg className='h-3 w-3 md:h-4 md:w-4' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 488.3 488.3" ><g><path d="M314.25 85.4h-227c-21.3 0-38.6 17.3-38.6 38.6v325.7c0 21.3 17.3 38.6 38.6 38.6h227c21.3 0 38.6-17.3 38.6-38.6V124c-.1-21.3-17.4-38.6-38.6-38.6zm11.5 364.2c0 6.4-5.2 11.6-11.6 11.6h-227c-6.4 0-11.6-5.2-11.6-11.6V124c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.6z" fill="#919192" opacity="1" data-original="#000000" ></path><path d="M401.05 0h-227c-21.3 0-38.6 17.3-38.6 38.6 0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.7c0 6.4-5.2 11.6-11.6 11.6-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5c21.3 0 38.6-17.3 38.6-38.6V38.6c0-21.3-17.3-38.6-38.6-38.6z" fill="#919192" opacity="1" data-original="#000000"></path></g></svg></span></div>
                        <h1 className="mt-[20px] sm:mt-[50px] text-[#E7E8DE] text-[25px] font-semibold">Not possible this time..</h1>
                        <p className='max-w-[600px] mx-auto text-[13px] sm:text-[18px] text-[#E7E8DE] font-normal mt-2'>No pairs found for this address or Objects is unable to track it.</p>
                    
                        <div className="py-[30px] md:py-[48px] flex justify-center">
                        <a href='./home' className="bg-[#424242] flex items-center gap-2.5 font-semibold text-[#E7E8DE] py-[12px] px-[24px] border border-[#525252] rounded-md"><svg className="w-[18px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" fill="currentColor"></path></svg>Back</a>
                        </div>
                    </div>

           
                    {/* <div className="App">
                    <Footerlinksfixed name="John" />
                </div> */}
                </div>
            </div>
        </>
    )
}
export default error;