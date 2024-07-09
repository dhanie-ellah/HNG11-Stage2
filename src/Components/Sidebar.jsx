import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
import Star5 from "../Assets/5 star.svg";
import Star4 from "../Assets/4 star.svg";
import Star3 from "../Assets/3 star.svg";
import Star2 from "../Assets/2 star.svg";
import Star1 from "../Assets/1 star.svg";

const Sidebar = () => {

  // const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className=" z-20 w-[20%] sm:absolute sm:w-[75%]">
      {/* desktop sidebar */}
      <div className=" w-[100%] p-5 text-sm flex flex-col gap-2 sm:hidden">
        <p className=" text-xl font-bold">Filters By:</p>
        <div className=" flex flex-col gap-[2rem]">
          {/* gender */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Gender</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div>
              {/* men */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Men</label>
              </div>
              {/* women */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Women</label>
              </div>
              {/* children */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Children</label>
              </div>
            </div>
          </div>
          {/* category */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Category</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div>
              {/* Shirt */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Shirt</label>
              </div>
              {/* Pant Trousers */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Pant Trousers</label>
              </div>
              {/* Hoodie */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hoodie</label>
              </div>
              {/* Hat */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hat</label>
              </div>
              {/* Sweatshirt */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Sweatshirt</label>
              </div>
              {/* Jacket */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Jacket</label>
              </div>
            </div>
          </div>
          {/* size */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Size</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div className=" flex flex-wrap gap-2 text-xs">
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XXS
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XS
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                S
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                M
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                L
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XL
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XXL
              </p>
            </div>
          </div>
          {/* colour */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Colour</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div className=" flex gap-1">
              <div className=" w-[1rem] h-[1rem] rounded-full bg-blue border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-orange border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-white border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-grey border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-ash border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-black border border-ash"></div>
            </div>
          </div>
          {/* rating */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Rating</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div>
              {/* 5 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star5} alt="5 star" />
                  (300)
                </label>
              </div>
              {/* 4 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star4} alt="4 star" />
                  (400)
                </label>
              </div>
              {/* 3 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star3} alt="3 star" />
                  (500)
                </label>
              </div>
              {/* 2 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star2} alt="2 star" />
                  (55)
                </label>
              </div>
              {/* 1 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star1} alt="1 star" />
                  (2)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile sidebar */}
      <div className="p-5 text-sm hidden sm:hidden sm:flex-col sm:gap-2 sm:left-0 sm:top-[2rem] sm:bg-white w-[100%] sm:absolute">
        <p className=" text-xl font-bold">Filters By:</p>
        <div className=" flex flex-col gap-[2rem]">
          {/* gender */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Gender</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div>
              {/* men */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Men</label>
              </div>
              {/* women */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Women</label>
              </div>
              {/* children */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Children</label>
              </div>
            </div>
          </div>
          {/* category */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Category</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div>
              {/* Shirt */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Shirt</label>
              </div>
              {/* Pant Trousers */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Pant Trousers</label>
              </div>
              {/* Hoodie */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hoodie</label>
              </div>
              {/* Hat */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hat</label>
              </div>
              {/* Sweatshirt */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Sweatshirt</label>
              </div>
              {/* Jacket */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Jacket</label>
              </div>
            </div>
          </div>
          {/* size */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Size</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div className=" flex flex-wrap gap-2 text-xs">
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XXS
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XS
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                S
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                M
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                L
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XL
              </p>
              <p className=" border border-grey rounded-lg px-3 py-[1.5px]">
                XXL
              </p>
            </div>
          </div>
          {/* colour */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Colour</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div className=" flex gap-1">
              <div className=" w-[1rem] h-[1rem] rounded-full bg-blue border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-orange border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-white border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-grey border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-ash border border-ash"></div>
              <div className=" w-[1rem] h-[1rem] rounded-full bg-black border border-ash"></div>
            </div>
          </div>
          {/* rating */}
          <div>
            <div className=" flex items-center gap-1">
              <p className=" font-bold">Rating</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* options */}
            <div>
              {/* 5 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star5} alt="5 star" />
                  (300)
                </label>
              </div>
              {/* 4 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star4} alt="4 star" />
                  (400)
                </label>
              </div>
              {/* 3 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star3} alt="3 star" />
                  (500)
                </label>
              </div>
              {/* 2 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star2} alt="2 star" />
                  (55)
                </label>
              </div>
              {/* 1 star */}
              <div className=" flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className=" flex items-center gap-1">
                  <img src={Star1} alt="1 star" />
                  (2)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" absolute bg-black bg-opacity-35 w-screen h-screen top-0 left-0 z-10"></div> */}
    </div>
  );
};

export default Sidebar;
