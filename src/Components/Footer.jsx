import React from "react";
import Logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black px-14 py-20 text-white flex justify-around lg:px-5 sm:px-10 sm:flex-col sm:gap-[1rem]">
      {/* logo on footer */}
      <Link to="/" className=" w-[25%] sm:w-[50%]">
        <img src={Logo} alt="logo" className=" w-full" />
      </Link>

      {/* middle column */}
      <section className=" w-[25%] flex flex-col gap-[5rem] sm:w-full sm:gap-[2rem]">
        <p className=" text-lg leading-4">
          794 Mcallister St San Francisco, California(CA), 94102
        </p>
        <div className=" flex flex-col gap-1 text-grey">
          <p className=" text-xs">(415) 829-7935</p>
          <p className=" text-xs">Contact@Unbranded.com</p>
        </div>
      </section>

      {/* last column */}
      <section className=" w-[25%] text-xs text-grey flex flex-col gap-3 sm:w-full">
        <div className=" flex justify-between">
          <div className=" flex flex-col gap-2">
            <p>About</p>
            <p>Available Stores</p>
            <p>Authorized Merchants</p>
            <p>Our Partners</p>
            <p>Contact Us</p>
          </div>
          <div className=" flex flex-col gap-2">
            <p>Facebook</p>
            <p>X / Twitter</p>
            <p>LinkedIn</p>
            <p>Pinterest</p>
            <p>Instagram</p>
          </div>
        </div>
        <p>© 2024 Unbranded. All rights reserved.</p>
      </section>

      {/* back to top button */}
      <button className=" w-[1rem] h-[1rem] rounded-full bg-orange p-[1rem] flex justify-center items-center fixed right-5 bottom-5">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default Footer;
