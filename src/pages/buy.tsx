import Headerfull from '../components/headerfull';
import Footerlinksfixed from '../components/footerlinks';

export const Buy = () => {
 
    return (
        <>
            <div className='main h-screen'>
                <div className="App">
                    <Headerfull name="John" />
                </div>
                <div className='h-full mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0 text-center w-full flex justify-center items-center flex-col'>
                    <div className=' max-w-[800px] mx-auto text-center flex flex-col justofy-center items-center'>
                        <p className='relative  font-grok leading-none pr-[30px] pb-[10px] pl-[20px] mb-[-1px] text-[42px] sm:text-[52px] md:text-[72px] lg:text-[100px] font-bold text-gradient'>Com<span className='font-sans'>i</span>ng Soon</p>
                        <div className="mt-[20px] bg-[#292929] text-[#E7E8DE] text-[14px] sm:text-[15px] px-4 py-2 pb-2.5 rounded-full inline-block text-center font-normal pt-[9px]">Hey there 👋🏽 <span className="font-[Inter] text-[14px] md:text-[15px] font-bold text-gradient"> Buy feature will be coming soon</span></div>
                       
                        <div className="pt-[30px] md:pt-[48px] flex justify-center">
                        <a href='./home' className="bg-[#424242] flex items-center gap-2.5 font-semibold text-[#E7E8DE] py-[10px] md:py-[12px] px-[20px] md:px-[24px] border border-[#525252] rounded-md"><svg className="w-[18px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" fill="currentColor"></path></svg>Back</a>
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
export default Buy;