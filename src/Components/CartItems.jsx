import React from "react";
import { Link } from "react-router-dom";
import P1 from "../Assets/Image 1.png";
import P2 from "../Assets/Image 2.png";
import P3 from "../Assets/Image 3.png";
import P4 from "../Assets/Image 4.png";

const CartItems = () => {
  const products = [
    {
      img: P1,
      name: "Unbranded Puffer Jacket High Quality",
      quantity: "2",
      size: "XL",
      color: "Black",
      price: "$300.00",
    },
    {
      img: P2,
      name: "Unbranded Summer Jacket Hoodie",
      quantity: "2",
      size: "XS",
      color: "Black",
      price: "$235.00",
    },
    {
      img: P3,
      name: "Unbranded Turtle-Neck",
      quantity: "3",
      size: "XL",
      color: "Dark Grey",
      price: "$97.00",
    },
    {
      img: P4,
      name: "Unbranded Shaffy Jacket with Hoodie",
      quantity: "5",
      size: "L",
      color: "Blue",
      price: "$123.00",
    },
  ];

  return (
    <div className=" w-[90%] lg:w-[95%] m-auto flex flex-col gap-[1rem]">
      <div className=" flex justify-between items-center">
        <p className=" text-lg font-bold">Your Items</p>
        <button className=" border rounded-xl px-4 py-2 text-xs w-fit">
          Empty Cart
        </button>
      </div>

      <div className=" flex justify-between items-center sm:hidden">
        <p className=" w-[8%] text-sm font-bold text-center">Select</p>
        <p className=" w-[30%] text-sm font-bold lg:w-[45%]"> Items</p>
        <p className=" w-[8%] text-sm font-bold lg:w-[10%]">Quantity</p>
        <p className=" w-[8%] text-sm font-bold">Size</p>
        <p className=" w-[8%] text-sm font-bold">Colour</p>
        <p className=" w-[8%] text-sm font-bold">Price</p>
      </div>
      <hr className=" h-[0.5px] border-none bg-grey" />

      <div className=" flex flex-col gap-[1rem] sm:hidden">
        {products.map((product) => (
          <div className=" flex flex-col gap-4">
            <div className=" flex justify-between items-center">
              <input type="checkbox" className=" w-[8%] text-sm font-bold" />
              <div className=" w-[30%] lg:w-[45%] flex items-center gap-3">
                <div className=" w-[2rem] h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem] overflow-hidden">
                  <img src={product.img} alt="" className=" w-full" />
                </div>
                <p className=" text-sm">{product.name}</p>
              </div>
              <div className=" w-[8%] lg:w-[10%] flex items-center border rounded-lg px-3 gap-4 border-black justify-center lg:text-sm lg:py-1">
                <p>-</p>
                <p>{product.quantity}</p>
                <p>+</p>
              </div>
              <p className=" w-[8%] text-sm font-bold lg:text-xs">
                {product.size}
              </p>
              <p className=" w-[8%] text-sm font-bold lg:text-xs">
                {product.color}
              </p>
              <p className=" w-[8%] text-sm font-bold lg:text-xs">
                {product.price}
              </p>
            </div>
            <hr className=" h-[0.5px] border-none bg-grey" />
          </div>
        ))}
      </div>

      <div className="  flex-col gap-[1rem] hidden sm:flex">
        {products.map((product) => (
          <div className=" flex flex-col gap-3">
            <div className=" flex items-center gap-2">
              <input type="checkbox" className=" w-[8%] text-sm font-bold" />

              <div className=" flex gap-2 text-xs">
                <div className=" w-[3rem] h-[3rem] overflow-hidden">
                  <img src={product.img} alt="" className=" w-full" />
                </div>
                <div>
                  <p className=" text-xs">{product.name}</p>
                  <p>{product.size}   |   {product.color}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-end w-full">
              <div className=" w-fit flex items-center border rounded-lg px-3 gap-4 border-black justify-end py-1 text-xs">
                <p>-</p>
                <p>{product.quantity}</p>
                <p>+</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex flex-col gap-2">
        <hr className=" h-[0.5px] border-none bg-grey" />
        <div className=" w-[95%] m-auto flex justify-between items-center font-bold text-sm">
          <p>Total Shopping</p>
          <p>$755.00</p>
        </div>
      </div>

      <div className="gap-2 flex items-center justify-end sm:flex-col">
        <Link
          to="/"
          className="border rounded-xl px-4 py-2 text-xs w-fit sm:w-full sm:text-center sm:rounded-xl"
        >
          Continue Shopping
        </Link>
        <Link
          to="/checkout"
          className="border rounded-xl px-4 py-2 text-xs w-fit sm:w-full sm:text-center sm:rounded-xl"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
