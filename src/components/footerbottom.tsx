// src/MyComponent.tsx
import React from 'react';
import comm from "../images/comm.png";
interface MyComponentProps {
    name: string;
}

const Footerbottom: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <>   <div className=" w-full footer_links font-[Lausanne] flex justify-between items-center max-w-full px-5 mx-auto pt-[50px] py-[20px]">
        <p className="text-[#ffffff80] text-xs font-medium">©2024 Objects.</p>

        <p className="text-[#ffffff80] text-xs font-medium flex justify-center  md:justify-end items-center">System Operational<span className="h-1.5 w-1.5 bg-[#4bae4f] rounded-full block ml-1"></span></p>
        </div>
        </>
    );
};

export default Footerbottom;
