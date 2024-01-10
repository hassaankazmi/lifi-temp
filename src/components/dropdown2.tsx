import React, { useState } from 'react';
import eth from "../images/eth.svg";
import eth1 from "../images/ethdrop.svg";
import eth2 from "../images/ethdrop1.svg";
function DropdownComponent2() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative mr-[12px]">
      <button
        id="dropdownDefaultButtonhead"
        data-dropdown-toggle="dropdownhead"
        className={`h_drop right-0 top-1 inline-flex items-center rounded-full ${
          isDropdownVisible ? 'bg-[#202027]' : 'bg-transparent hover:bg-[#202027]'
        } text-white rounded-xl px-2.5 py-2.5 text-md font-medium flex gap-1 focus:outline-none focus-visible:outline-none`}
        type="button"
        onClick={toggleDropdown}
      >
    <p className=""><img className="h-5.5 w-5 " src={eth2} alt="Your Company" /></p>
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
      )}
    </div>
  );
}

export default DropdownComponent2;
