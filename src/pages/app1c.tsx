import HeaderfullConnected from '../components/headerfullconnected';
import Footerlinksfixed from '../components/footerlinks';
import logo from "../images/Objects Logo.png";

export const App1c = () => {
    return (
        <>
            <div className='main h-screen'>

                <div className="App">
                    <HeaderfullConnected name="John" />
                </div>

                <div className='h-full mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0 text-center '>
                <div className='h-full w-full flex justify-center items-center'>
                {/* <p className='relative leading-none top-[-35px] font-grok pb-[20px] pr-[30px] pl-[20px] mb-[-1px] flex items-center text-[52px] sm:text-[72px] md:text-[120px] font-bold text-gradient'>Ob<span className='font-sans'>j</span>ects</p> */}
                <img className='ml-[-15px] md:ml-0 h-[70px] lg:h-[130px] relative top-[-35px]' src={logo} />
                </div>
                    
                {/* <div className="App">
                    <Footerlinksfixed name="John" />
                </div> */}

                </div>
            </div>
        </>
    )
}
export default App1c;
