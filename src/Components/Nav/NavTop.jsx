import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faContactBook } from "@fortawesome/free-solid-svg-icons/faContactBook";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons/faFlagUsa";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavTop = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-14 py-3 text-xs font-light text-grey lg:px-5 sm:px-2 sm:hidden">
        {/* left side */}
      <div className=" flex items-center gap-2">
        {/* location */}
        <div className=" flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Location</p>
        </div>
        {/* line */}
        <div className=" w-[1.5px] h-3 bg-grey"></div>
        {/* language dropdown */}
        <div className=" flex items-center gap-2">
          <p>English</p>
          <FontAwesomeIcon icon={faFlagUsa} />
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>

      {/* right side */}
      <div className=" flex items-center gap-2">
        {/* Search */}
        <div className=" flex items-center gap-2">
          <FontAwesomeIcon icon={faSearch} />
          <p>Search</p>
        </div>
        {/* line */}
        <div className=" w-[1.5px] h-3 bg-grey"></div>
        {/* contact */}
        <div className=" flex items-center gap-2">
          <FontAwesomeIcon icon={faContactBook} />
          <p>Contact Us</p>
        </div>
      </div>
      </div>
      
      <hr className=' border-none bg-grey bg-opacity-30 h-[0.5px]'/>
    </div>
  );
};

export default NavTop;
