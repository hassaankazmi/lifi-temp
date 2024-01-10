
import Homeheader2 from '../components/homeheader2';
import Footersmall from '../components/footersmall';

export const Creditstext2 = () => {
    return (
        <>
           <div className='main min-h-screen'>
           <div className="App">
                <Homeheader2 name="John" />
            </div>

            <div className='pt-[150px]'>
                <div className='mx-auto px-[8px]  sm:px-[16px] lg:px-[16px] w-10/12 sm:w-6/12 lg:w-11/12 text-center '>
                    <div className='inline-flex items-baseline bg-[#292929] text-[#E7E8DE] font-semibold text-[14px] sm:text-[16px] px-4 py-2 pb-2.5 rounded-full inline text-center font-normal pt-[9px]'>Oh hey 👋🏽 <span className='font-grok pr-2 mb-[-1px] flex items-center text-[16px] font-bold text-gradient pl-1'>Objects</span> here </div>
                    <div className='mt-[10px] md:mt-[54px]  mx-auto lg:flex  justify-between gap-[60px]'>
                        <div className='mt-20 lg:mt-0 lg:w-[33%]'><h1 className='text-[#E7E8DE] text-[22px] lg:text-[25px] font-semibold font-grok'>Contact</h1>
                        <p className='text-[16px] lg:text-[17px] text-[#E7E8DE] font-normal leading-7 xl:leading-10 mt-2'>
                       Have a question or feedback? Our team is here to help! Reach out through our contact form for a prompt response. </p>

                        </div>
                        <div className='mt-10 lg:mt-0 lg:w-[33%]'><h1 className='text-[#E7E8DE] text-[22px] lg:text-[25px] font-semibold font-grok'>Partnership</h1>
                        <p className='text-[16px] lg:text-[17px] text-[#E7E8DE] font-normal leading-7 xl:leading-10 mt-2'>
                        Interested in partnering with Objects? Let's explore collaboration opportunities. Connect with our partnership team via the contact form.</p>

                        </div>
                        <div className='mt-10 lg:mt-0 lg:w-[33%]'><h1 className='text-[#E7E8DE] text-[22px] lg:text-[25px] font-semibold font-grok'>Big Bounty</h1>
                        <p className='text-[16px] lg:text-[17px] text-[#E7E8DE] font-normal leading-7 xl:leading-10 mt-2'>
                        Calling all crypto enthusiasts! Join our Big Bounty program for exciting opportunities and substantial rewards. Connect with our team through the contact form and unleash your potential.</p>

                        </div>
                    </div>
                    <div className='mt-10'>
        <p className='text-md text-[#E7E8DE]'>Email:<a href="mailto:foundation@objects.fi?subject=Foundation" className='font-medium pl-2 inline-block text-[#03f6f4]'>foundation@objects.fi</a></p>
</div>
                    <div className='pt-[20px] flex justify-center mt-[20px] md:mt-[50px]'>
                        <a  href='./home' className='flex items-center gap-2.5 font-semibold text-[#E7E8DE] py-[8px] px-[15px] md:py-[12px] md:px-[24px] border border-[#525252] bg-[#424242] rounded-md'>
                            <svg className='w-[18px] h-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" fill="currentColor"></path></svg>
                            Back</a></div>

                </div>
            </div>
            <div className="lg:fixed bottom-0 w-full footer_links font-[Inter] flex justify-between items-center max-w-full px-[20px] lg:px-[30px] mx-auto mt-[70px] py-[20px]">
                        <p className="text-[#ffffff80] text-xs font-medium">©2024 Objects.</p>
                        <p className="text-[#ffffff80] text-xs font-medium flex items-center">System Operational<span className="h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1"></span></p>
                        </div>
           </div>
        </>
    )
}
export default Creditstext2;