
import Headerfull from '../components/headerfull';
import ethsmallnew from "../images/ethnew.png";
import dai from "../images/dai.png";
import ardown from '../images/arrdown.svg';
import Footerlinksfixed from '../components/footerlinks';
import fuel from '../images/fuel 1.svg';
import uni from '../images/uni.png';
export const Remote = () => {
    return (
        <>
            <div className='main min-h-screen'>
                <div className="App">
                    <Headerfull name="John" />

                </div>

                <div className='pt-[100px] md:pt-[140px]'>
                    <div className='mx-auto px-[20px] sm:px-[16px] lg:px-[16px] w-12/12 md:w-11/12 text-center'>
                      
                        <div className="App">
                    <Footerlinksfixed name="John" />
                </div>
                      
                    </div>
                </div>
            </div>




        </>
    )
}
export default Remote;