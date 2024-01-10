
import Footer from '../components/footer';
import Header from '../components/header';
import Headerfull from '../components/headerfull';
import eth from "../images/eth.svg";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
import smll1 from "../images/sma2.jpg";
import Footerlinksfixed from '../components/footerlinks';
export const Genius3 = () => {
    return (
        <>
            <div className='main h-screen'>

                <div className="App">
                    <Headerfull name="John" />
                </div>

                <div className='pt-[250px] mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0 text-center'>
                <div className='h-full w-full flex justify-center items-center'>
                <p className='relative leading-none top-[-35px] font-[Lausanne] pr-[30px] pl-[20px] mb-[-1px] flex items-center text-[42px] md:text-[120px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text'>Objects</p>

                </div>
                    
                {/* <div className="App">
                    <Footerlinksfixed name="John" />

                </div> */}

                </div>
            </div>
        </>
    )
}
export default Genius3;