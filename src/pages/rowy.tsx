
import Footer from '../components/footer';
import Headerrowy from '../components/headerrowy';
import Headerfull from '../components/headerfull';
import tick from "../images/tick.svg";
import f1 from "../images/f1.png"
import f2 from "../images/footer2.png";
import f3 from "../images/footer3.svg";
import f4 from "../images/Design_Colored 16x16.svg";
export const Rowy = () => {
    return (
        <>
       <div className='main'>
       <div className="App">
            <Headerfull name="John" />
        </div>
            <div className='py-[100px]'>
                <div className='mx-auto px-[8px] sm:px-[16px] lg:px-[16px] w-11/12 text-center '>
                    <div className='bg-[#292929] text-white text-[8px] sm:text-[16px] px-4 py-2 pb-2.5 rounded-full inline text-center font-normal pt-[9px]'>Oh hey 👋🏽 <span className='font-[Lausanne] text-[11px] md:text-[15px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text '>0x949d48eca67b17269629c7194f4b727d4ef9e5d6</span></div>

                    <div className='demo-rowy bg-[#303030] rounded-lg border-4 border-[#303030] border-t-0 mt-[65px] font-[Lausanne]'>
                        <div className='rowy_head p-[12px] flex items-center justify-between'>
                            <div>
                                <ul className='flex gap-2'>
                                    <li className='w-[14px] h-[14px] rounded-full bg-[#0203081f] border border-[#ffffff1a]'></li>
                                    <li className='w-[14px] h-[14px] rounded-full bg-[#0203081f] border border-[#ffffff1a]'></li>
                                    <li className='w-[14px] h-[14px] rounded-full bg-[#0203081f] border border-[#ffffff1a]'></li>
                                </ul>
                            </div>
                            <div><p className='text-[12px] text-[#949494]'>demo.rowy.io</p></div>
                            <div></div>
                        </div>
                        <div className='p-4 bg-[#17181d] flex justify-between gap-5'>
                            <div className='bg-[#1d1d20] border border-[#ffffff1a] rounded-[10px] w-full'>
                                <div className='r_head text-left p-[20px] rounded-t-[10px] bg-[#18181b]'>
                                    <p className='text-[20px] font-bold text-white'>Objects Card:<span className=' pl-2 inline-block bg-gradient-to-r bg-gradient-to-r from-[#ffd85a] to-[#e9ff7c] text-transparent bg-clip-text'>Medium Risk</span> </p>
                                </div>
                                <div className='bg-[#202023] border-y border-[#ffffff1a] py-[10px] px-[20px]'>
                                    <div className='r_head text-left'>
                                        <p className='text-[14px] font-medium text-white'>Overview</p>
                                        <p className='text-[#adadae] text-[14px]'>Token Information:<span></span></p>
                                    </div>
                                </div>
                                <div className='p-[20px]'>
                                    <div className='max-h-[300px] h-[300px] overflow-auto bg-[#1d1d20] border border-[#2b2b2e] rounded-[7px] p-[16px]'>
                                        <div className="right_medium_list pr-[20px] text-left font-[Lausanne]"><div className="mb-[40px]">        <h1 className="font-semibold leading-none inline-block bg-gradient-to-r bg-gradient-to-r from-[#ffd85a] to-[#e9ff7c] inline-block text-transparent bg-clip-text text-[48px]">Medium <span className="text-[35px]">Risk</span></h1><p className="text-[15px] text-white text-left font-light">Investment Risk</p></div><div className="mb-[40px]">        <h1 className="font-semibold leading-none inline-block bg-gradient-to-r bg-gradient-to-r from-[#e4fe66] to-[#21fdc2] inline-block text-transparent bg-clip-text text-[48px]">True <span className="text-[35px]">Tone</span></h1><p className="text-[15px] text-white text-left font-light">Circulating Liquidity</p></div><div className="mb-[40px]">        <h1 className="font-semibold leading-none inline-block bg-gradient-to-r bg-gradient-to-r from-[#14e8ad] to-[#037aff] inline-block text-transparent bg-clip-text text-[48px]">ProMotion </h1><p className="text-[15px] text-white text-left font-light">Community Engagement</p></div></div>
                                    </div>
                                    <div>
                                        <button className='mt-[20px] bg-[#424245] text-[18px] font-medium text-white py-[10px] px-[20px] rounded-lg'>Trade</button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#1d1d20] border border-[#ffffff1a] rounded-[10px] w-full'>
                                <div className='r_head text-left p-[20px] rounded-t-[10px] bg-[#18181b]'>
                                    <p className='text-[20px] font-bold text-white'>Liquidity </p>
                                </div>
                                <div className='bg-[#202023] border-y border-[#ffffff1a] py-[10px] px-[20px]'>
                                    <div className='r_head text-left'>
                                        <p className='text-[14px] font-medium text-white'>Transactions History</p>
                                        <p className='text-[#adadae] text-[14px]'>Recent:<span></span></p>
                                    </div>
                                </div>
                                <div className='p-[20px]'>
                                    <div className=' max-h-[300px] h-[300px] overflow-auto bg-[#1d1d20] border border-[#2b2b2e] rounded-[7px] p-[16px]'>
                                        <div className="count-text text-left pl-[8px]">
                                            <div className="w-[220px] max-w-[220px] mb-4">
                                                <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">BUY TAX</h6>
                                                <p className="text-[30px] text-white">0.0%</p></div>
                                            <div className="w-[220px] max-w-[220px] mb-4">
                                                <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">BUY GAS</h6>
                                                <p className="text-[30px] text-white">145,734</p></div>
                                            <div className="w-[220px] max-w-[220px] mb-4">
                                                <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">BUY LIMIT</h6>
                                                <p className="text-[30px] text-white">$1.1K</p></div>
                                        </div>
                                        <div className="count-text text-left pl-[8px]"><div className="w-[220px] max-w-[220px] mb-4">
                                            <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">SELL TAX</h6>
                                            <p className="text-[30px] text-white">0.0%</p></div>
                                            <div className="w-[220px] max-w-[220px] mb-4">
                                                <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">SELL GAS</h6>
                                                <p className="text-[30px] text-white">145,734</p></div>
                                            <div className="w-[220px] max-w-[220px] mb-4">
                                                <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">sell LIMIT</h6>
                                                <p className="text-[30px] text-white">unkown</p></div>
                                        </div>
                                        <div className="count-text text-left pl-[8px]"><div className="w-[220px] max-w-[220px] mb-4">
                                            <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">TRANSFER TAX</h6>
                                            <p className="text-[30px] text-white">0.0%</p></div>
                                            <div className="w-[220px] max-w-[220px] mb-4 text-left">
                                                <h6 className="text-[16px] font-normal text-[#7d7d7d] uppercase font-[Lausanne]">SOURCE CODE</h6>
                                                <div className="flex justify-left items-center gap-2 pt-3 text-left">
                                                    <img className="h-[21px] w-[21px] " src={tick} alt="Your Company" />
                                                    <p className="text-[16px] text-white">OPEN SOURCE</p>
                                                </div></div>
                                            <div className="w-[220px] max-w-[220px]"></div>
                                        </div>
                                    </div>
                                    <div><button className="mt-[20px] bg-[#424245] text-[18px] font-medium text-white py-[10px] px-[20px] rounded-lg">Download</button></div>
                                </div>
                            </div>

                        </div>
                        <div className='p-4 pt-0 bg-[#17181d] flex justify-between gap-5'>
                            <div className='bg-[#1d1d20] border border-[#ffffff1a] rounded-[10px] w-full'>
                                <div className='r_head text-left p-[20px] rounded-t-[10px] bg-[#18181b]'>
                                    <p className='text-[20px] font-bold text-white'>Simulation Results</p>
                                </div>
                                <div className='bg-[#202023] border-y border-[#ffffff1a] py-[10px] px-[20px]'>
                                    <div className='r_head text-left'>
                                        <p className='text-[14px] font-medium text-white'>Derivative script</p>
                                        <p className='text-[#adadae] text-[14px]'>Available:<span></span></p>
                                    </div>
                                </div>
                                <div className='p-[20px] pb-[40px]'>
                                    <div className='max-h-[300px]  h-[300px] overflow-auto bg-[#1d1d20] border border-[#2b2b2e] rounded-[7px] p-[16px]'>
                                        <div className="right_medium_list pr-[20px] text-left font-[Lausanne]">
                                        <div className="language-json text-white">
<div><span><span className="text-white">[</span></span></div>
<div><span><span className="text-white">&#123;</span></span></div>
<div><span><span className="text-white">    </span><span className="text-[#7dd3fc]">"ChainID"</span><span>:</span><span className="text-white"> </span><span>1</span><span>,</span></span></div>
<div><span><span className="text-white">    </span><span className="text-[#7dd3fc]">"Pair"</span><span>:</span><span className="text-white"> &#123;</span></span></div>
<div><span><span className="text-white">        </span><span className="text-[#7dd3fc]">"Name"</span><span>:</span><span className="text-white"> </span><span className="text-[#6ee7b7]">"Uniswap V2: PEPE-WETH"</span><span>,</span></span>
<div></div><span><span className="text-white">        </span><span className="text-[#7dd3fc]">"Tokens"</span><span>:</span><span className="text-white"> [</span></span></div>
<div><span><span className="text-white">            </span><span className="text-[#6ee7b7]">"0x6982508145454ce325ddbe47a25d4ec3d2311933"</span><span>,</span></span></div>
<div><span><span className="text-white">            </span><span className="text-[#6ee7b7]">"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"</span></span></div>
<div><span><span className="text-white">        ]</span><span>,</span></span></div>
<div><span><span className="text-white">        </span><span className="text-[#7dd3fc]">"Address"</span><span>:</span><span className="text-white"> </span><span className="text-[#6ee7b7]">"0xa43fe16908251ee70ef74718545e4fe6c5ccec9f"</span></span></div>
<div><span><span className="text-white">   &#125;</span><span>,</span></span></div>
<div><span><span className="text-white">    </span><span className="text-[#7dd3fc]">"Reserves"</span><span>:</span><span className="text-white"> [</span></span></div>
<div><span><span className="text-white">        </span><span className="text-[#6ee7b7]">2309863147202366390632917740976</span><span>,</span></span></div>
<div><span><span className="text-white">        </span><span className="text-[#6ee7b7]">3657182645473588411835</span></span></div>
<div><span><span className="text-white">    ]</span><span>,</span></span></div>
<div><span><span className="text-white">    </span><span className="text-[#7dd3fc]">"Liquidity"</span><span>:</span><span className="text-white"> </span><span className="text-[#6ee7b7]">13795258.656990923</span><span>,</span></span></div>
<div><span><span className="text-white">    </span><span className="text-[#7dd3fc]">"Router"</span><span>:</span><span className="text-white"> </span><span className="text-[#6ee7b7]">"0x7a250d5630b4cf539739df2c5dacb4c659f2488d"</span></span></div>
<div><span><span className="text-white">&#125;</span><span>,</span></span></div>
<div><span><span className="text-white">]</span></span></div>
</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='bg-[#1d1d20] border border-[#ffffff1a] rounded-[10px] w-full'>
                                <div className='r_head text-left p-[20px] rounded-t-[10px] bg-[#18181b]'>
                                    <p className='text-[20px] font-bold text-white'>Recent Holder Analysis </p>
                                </div>
                                <div className='bg-[#202023] border-y border-[#ffffff1a] py-[10px] px-[20px]'>
                                    <div className='r_head text-left'>
                                        <p className='text-[14px] font-medium text-white'>Transactions History</p>
                                        <p className='text-[#adadae] text-[14px]'>Available:<span></span></p>
                                    </div>
                                </div>
                                <div className='p-[20px] pb-[40px]'>
                                    <div className=' max-h-[300px]  h-[300px] overflow-auto bg-[#1d1d20] border border-[#2b2b2e] rounded-[7px] p-[16px]'>
                                    <div className='text-left text-[#d6d6d6]'>
                                        <div className="text-[16px] pb-[10px]">Token Name: <strong className="text-[#2e90fa]">Ethereum</strong><a href="https://webflow.com/" target="_blank" className="text-style-link"></a></div>
                                        <div className="text-[16px] pb-[10px]">Token Symbol: <strong className="text-[#2e90fa]">ETH</strong></div>
                                        <div className="text-[16px] pb-[10px]">Token Chain: <strong className="text-[#2e90fa]">Ethereum Chain</strong></div>
                                        <div className="text-[16px]  pl-0">Contract Address: &nbsp;<span className="gradient-color"><strong id="textToCopy" className="text-[16px] font-[Lausanne] text-[11px] md:text-[16px] font-bold inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text ">0x949d48eca67b17269629c7194f4b727d4ef9e5d6</strong></span></div></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='fixed bottom-0 left-0 right-0 footer-icons text-center mt-44 mb-2'>
                        <div className='mx-auto max-w-[304px] max-h-[82px] border border-[#404043] rounded-3xl bg-[#17181d54] p-[16px] px-[10px]  backdrop-blur-[2px] flex items-center justify-center'>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#779ef9] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[-15px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Ethereum</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f1} alt="eth" />
                                </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#f1b90c] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='w-[170px] absolute top-[-65px] left-[-45px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Binance Smart Chain</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[5px]" src={f2} alt="eth" /></div>

                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#8147e5] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
                                    <div className='tooltip opacity-0'>
                                        <div className='absolute top-[-65px] left-[3px] border border-[#343438] bg-[#38393a99] rounded-[7px] px-[8px] p-[4px] text-center text-white'><p>Polygon</p>
                                        </div>
                                    </div>
                                    <img className="h-[38px] w-[auto] p-[4px]" src={f3} alt="eth" /></div>
                                <div className='w-[2px] h-[48px] bg-[#3e3e41] ml-[5px] mr-[5px] d-block'> </div>
                                <div className='relative eth w-[60px] h-[60px] rounded-[22px] bg-[#424242] flex items-center justify-center border-[7px] border-[#17181d] hover:border-black cursor-pointer'>
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
            <div className="App">
                <Footer name="John" />
            </div>
       </div>
        </>
    )
}
export default Rowy;