// src/MyComponent.tsx
import React from 'react';
import comm from "../images/comm.png";
interface MyComponentProps {
    name: string;
}

const Footersmall: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <>
                           <div className=" w-full footer_links font-[Lausanne] flex justify-between items-center max-w-full px-[20px] lg:px-[30px] mx-auto mt-[96px] py-[20px]">
                        <p className="text-[#ffffff80] text-xs font-medium">©2024 Objects.</p>
                        {/* <button className=" ml-[-70px] px-[20px] py-[1px] bg-[#00000000] rounded-full h-[40px] border border-[#ebebf599] inline-block bg-gradient-to-r bg-gradient-to-r from-[#03f6f4] to-[#9383ff] inline-block text-transparent bg-clip-text font-bold mr-2 ">Become a sponsor</button> */}

                        <p className="text-[#ffffff80] text-xs font-medium flex items-center">System Operational<span className="h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1"></span></p>
                        </div>
        </>
    );
};

export default Footersmall;
