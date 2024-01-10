import React, { useState } from 'react';
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
function Dropfinal() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButtonhead"
        data-dropdown-toggle="dropdownhead"
        className={`h_drop right-0 top-1 inline-flex items-center rounded-full ${
          isDropdownVisible ? 'bg-[#1d1d22] border border-[#343434] border-b-0' : 'bg-transparent'
        } text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-1 focus:outline-none focus-visible:outline-none `}
        type="button"
        onClick={toggleDropdown}
      >
    <p className=""><img className="h-5.5 w-5 " src={eth} alt="Your Company" /></p><svg className="-mr-1 h-6 w-6 text-[#919192]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
      </button>
      {isDropdownVisible && (
        <div
          id="dropdownhead"
          className="border border-[#343434] border-t-0 z-10 bg-[#1d1d22] divide-y divide-gray-100 rounded-b-xl shadow w-44 dark:bg-gray-700 w-[66px] top-[-22px] -translate-y-6 block"
          data-popper-placement="bottom"
          style={{
            position: 'absolute',
            inset: '0px auto auto 0px',
            margin: '0px',
            transform: 'translate(0px, 54px)',
          }}
        >
        <ul className="py-2.5 px-2.5 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonhead">
                                <li className='mb-3'><a href="#" className=""><img className="h-5.5 w-5 " src={eth1} alt="Your Company" /></a></li>
                                <li><a href="#" className=""><img className="h-5.5 w-5 " src={eth2} alt="Your Company" /></a></li>
        </ul>
        </div>
      )}
    </div>
  );
}

export default Dropfinal;
