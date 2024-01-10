import React, { useState } from 'react';
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
import ava from "../images/ava.jpeg";
function DropdownComponent() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      {/* <button
        id="dropdownDefaultButtonhead"
        data-dropdown-toggle="dropdownhead"
        className={`h_drop right-0 top-1 inline-flex items-center rounded-full ${
          isDropdownVisible ? 'bg-[#202027]' : 'bg-transparent hover:bg-[#202027]'
        } text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-1 focus:outline-none focus-visible:outline-none `}
        type="button"
        onClick={toggleDropdown}
      >
    <p className=""><img className="h-5.5 w-5 " src={eth} alt="Your Company" /></p><svg className="-mr-1 h-6 w-6 text-[#919192]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
      </button>
      {isDropdownVisible && (
        <div
          id="dropdownhead"
          className="z-10 bg-[#202027] divide-y divide-gray-100 rounded-b-xl shadow w-44 dark:bg-gray-700 w-[64px] top-[-22px] -translate-y-6 block"
          data-popper-placement="bottom"
          style={{
            position: 'absolute',
            inset: '0px auto auto 0px',
            margin: '0px',
            transform: 'translate(0px, 54px)',
          }}
        >
        <ul className="py-2.5 px-2.5 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonhead">
                                <li className='mb-2'><a href="#" className=""><img className="h-5.5 w-5 " src={eth1} alt="Your Company" /></a></li>
                                <li><a href="#" className=""><img className="h-5.5 w-5 " src={eth2} alt="Your Company" /></a></li>
                            </ul>
        </div>
      )} */}


      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
        className=" h_drop right-0 top-1 inline-flex items-center rounded-full text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-1 focus:outline-none focus-visible:outline-none" type="button">
        <p className=""><img className="h-5.5 w-5 " src={eth} alt="Your Company" /></p><svg className="-mr-1 h-6 w-6 text-[#919192]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
      </button>


      <div id="dropdown" className="z-10 hidden  border border-[#34373F] z-10 bg-[#222226fa] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 translate-x-[-42px]">
        <ul className="py-[5px] text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownDefaultButton">
          <li className='px-[10px] py-[10px] hover:bg-[#424242]'>
            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth} alt="Your Company" />BNB Chain
              {/* <svg className="h-5 w-6 text-white" xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24"><g><path d="M18.7 7.2c-.4-.4-1-.4-1.4 0l-7.5 7.5-3.1-3.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.8 3.8c.2.2.4.3.7.3s.5-.1.7-.3l8.2-8.2c.4-.4.4-1 0-1.4z" fill="#919192" opacity="1" data-original="#000000"></path></g></svg> */}
            </a>
          </li>
          <li className='px-[10px] py-[10px] hover:bg-[#424242] '>
            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth1} alt="Your Company" />Ethereum</a>
          </li>
          <li className='px-[10px] py-[10px] hover:bg-[#424242] '>
            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={eth2} alt="Your Company" />Polygon</a>
          </li>
          <li className='px-[10px] py-[10px] hover:bg-[#424242] '>
            <a href="#" className="flex gap-3 text-white text-[16px] font-normal"><img className="h-5.5 w-5 rounded-md" src={ava} alt="Your Company" />Avalanche</a>
          </li>

        </ul>
      </div>

    </div>

  );
}

export default DropdownComponent;
