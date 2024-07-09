import React from "react";
import P1 from "../Assets/Image 1.png";
import P2 from "../Assets/Image 2.png";
import P3 from "../Assets/Image 3.png";
import P4 from "../Assets/Image 4.png";
import P5 from "../Assets/Image 5.png";
import P6 from "../Assets/Image 6.png";
import P7 from "../Assets/Image 7.png";
import P8 from "../Assets/Image 8.png";
import P9 from "../Assets/Image 9.png";
import P10 from "../Assets/Image 10.png";
import P11 from "../Assets/Image 11.png";
import P12 from "../Assets/Image 12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartsProductList = () => {
  const products = [
    {
      img: P1,
      name: "Unbranded Puffer Jacket High Quality",
      price: "$300",
    },
    {
      img: P2,
      name: "Unbranded Summer Jacket Hoodie",
      price: "$300",
    },
    {
      img: P3,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P4,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P5,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P6,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P7,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P8,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P9,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P10,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P11,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
    {
      img: P12,
      name: "Unbranded Turtle-Neck",
      price: "$300",
    },
  ];

  const items = [];

  for (let i = 0; i < 4; i++) {
    const item = products[i];
    items.push(
      <div className="w-[24%] rounded-xl overflow-hidden h-auto p-3 border-[0.5px] border-ash text-xs flex flex-col gap-2 lg:w-[48%] sm:w-full">
        {/* image */}
        <div className="rounded-lg overflow-hidden sm:w-full">
          <img src={item.img} alt={item.name} className="w-full" />
        </div>
        {/* name and price */}
        <div className="flex justify-between items-center">
          <p>{item.name}</p>
          <p className="font-extrabold">{item.price}</p>
        </div>
        {/* colours */}
        <div className="flex gap-1">
          <div className="w-[1rem] h-[1rem] rounded-full bg-blue border border-ash"></div>
          <div className="w-[1rem] h-[1rem] rounded-full bg-orange border border-ash"></div>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white border border-ash"></div>
          <div className="w-[1rem] h-[1rem] rounded-full bg-grey border border-ash"></div>
          <div className="w-[1rem] h-[1rem] rounded-full bg-ash border border-ash"></div>
          <div className="w-[1rem] h-[1rem] rounded-full bg-black border border-ash"></div>
        </div>
      </div>

    );
  }

  return (
    <div>
      <div className=" flex items-center justify-between px-5">
        <p className=" text-sm">You might also like</p>
        <Link to="/" className=" flex gap-1 items-center text-xs">
          <p>See all</p>
          <FontAwesomeIcon icon={faArrowRight}/>
        </Link>
      </div>
      <div className=" flex flex-wrap justify-between p-5 gap-4 sm:flex-col sm:w-full">
        {items}
      </div>
    </div>
  );
};

export default CartsProductList;
