
import Footer from '../components/footer';
import Headerbeige from '../components/headerbeige';
import Homeheadernew from '../components/homeheadernew';
import eth from "../images/eth.svg";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
import smll1 from "../images/sma2.jpg";


export const Geniusbeige = () => {
    return (
        <>
            <div className='bg-[#d3d3d3] bg-gray'>

                <div className="App">
                    <Headerbeige name="John" />
                </div>

                <div className='mx-auto px-2 sm:px-4 lg:px-4 w-11/12 py-0 text-center h-screen'>
                <div className='h-full w-full flex justify-center items-center'>

                </div>
                    
                    <div className='fixed bottom-0 left-0 right-0 footer-icons text-center mt-44 mb-2'>
                        <div className='mx-auto max-w-[370px] max-h-[82px] border border-[#404043] rounded-3xl bg-[#212125] p-[16px] px-[10px]  backdrop-sepia flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#779ef9] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[-2px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Ethereum</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </div>
                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#f1b90c] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[35px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Binance Smart Chain</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[5px]" src={f2} alt="eth" /></div>
                                
                                <div className='eth w-[60px] h-[60px] rounded-[22px] bg-[#8147e5] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-50px] left-[137px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Polygon</p>
                                        </div>
                                    </div>
                                <img className="h-[38px] w-[auto] p-[4px]" src={f3} alt="eth" /></div>
                                <div className='w-[2px] h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
                                <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Compare</p>
                                        </div>
                                    </div>
                                <img className="h-[28px] w-[auto] p-[4px]" src={f4} alt="eth" /></div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#212125] hover:border-black cursor-pointer'>
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
        </>
    )
}
export default Geniusbeige;