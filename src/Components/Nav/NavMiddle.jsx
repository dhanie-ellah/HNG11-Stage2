import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../Assets/logo.png";
import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { Link } from "react-router-dom";

const NavMiddle = () => {
  return (
    <div className=" sm:flex sm:flex-col sm:gap-2 sm:w-[90%] sm:m-auto mb-2">
      <div className=" px-14 flex justify-between items-center text-grey text-xs lg:px-5 sm:px-2 sm:text-base">
        <FontAwesomeIcon icon={faBars} />
        <Link to="/" className=" w-[20%] sm:w-[40%]">
          <img src={Logo} alt="Unbranded" className=" w-full" />
        </Link>
        <div className=" flex items-center gap-2">
          <FontAwesomeIcon icon={faHeart} className="sm:hidden" />
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className=" text-grey text-xs" /></Link>
          <div className=" flex items-center gap-1 sm:hidden">
            <FontAwesomeIcon icon={faUserCircle} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
      <div className="hidden w-full p-2 pl-7 sm:flex border bg-white rounded-full relative items-center ">
        <FontAwesomeIcon icon={faSearch} className=" text-grey absolute top-[30%] left-[0.5rem] text-sm" />
        <input type="text" placeholder="Search" className=" focus:outline-none placeholder:text-grey"/>
      </div>
      <hr className=" border-none bg-grey bg-opacity-30 h-[0.5px] lg:hidden" />
    </div>
  );
};

export default NavMiddle;
