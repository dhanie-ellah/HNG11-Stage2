import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <div className=" w-[90%] m-auto flex flex-col gap-4">
      <div className=" flex justify-between items-center">
        <p className=" text-lg font-bold">Payment</p>
        <Link to="/cart" className=" border rounded-xl border-black px-4 py-2 text-xs w-fit">
          View Cart
        </Link>
      </div>

      <div className=" flex justify-between sm:flex-col sm:gap-4">
        {/* left form */}
        <div className=" w-[48%] sm:w-full flex flex-col gap-4">
          <div className=" flex items-center p-2 px-4 justify-between border rounded-xl border-grey text-sm">
            <p>Guest Checkout</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>

          <div className=" flex p-2 px-4 border rounded-xl border-grey text-sm flex-col gap-2">
            <p className=" font-bold">Shipping Country</p>

            <div className=" flex items-center p-2 px-4 justify-between border rounded-xl border-grey text-sm outline-none">
              <p>Select Country</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>

            <hr className=" border-none outline-none h-[1px] bg-grey w-full" />

            <p className=" font-bold">Shipping Address</p>

            {/* fullname */}
            <div className=" flex flex-col">
              <label htmlFor="" className=" text-xs">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Input your full name"
                className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
              />
            </div>

            {/* email */}
            <div className=" flex flex-col">
              <label htmlFor="" className=" text-xs">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Input your email address"
                className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
              />
            </div>

            {/* phone number */}
            <div className=" flex flex-col">
              <label htmlFor="" className=" text-xs">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Input your phone number"
                className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
              />
              <p className=" text-[10px]">
                *This will be used to contact you for delivery
              </p>
            </div>

            {/* full address */}
            <div className=" flex flex-col">
              <label htmlFor="" className=" text-xs">
                Full Address
              </label>
              <input
                type="text"
                placeholder="Input your full address with a landmark"
                className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
              />
            </div>

            {/* --------- */}
            <div className=" flex justify-between">
              <div className=" flex flex-col w-[49%]">
                <label htmlFor="" className=" text-xs">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Input your city"
                  className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
                />
              </div>

              <div className=" flex flex-col w-[49%]">
                <label htmlFor="" className=" text-xs">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Input postal code"
                  className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className=" text-xs">
                Region
              </label>
              <div className=" flex items-center p-2 px-4 justify-between border outline-none rounded-xl border-grey text-sm">
                <p>Select Region</p>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          </div>

          <div className=" flex items-center p-2 px-4 justify-between border rounded-xl border-grey text-sm">
            <p>Shipping Methods</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>

        {/* right form */}
        <div className=" w-[48%] sm:w-full flex flex-col gap-4">
          <div className=" flex items-center p-2 px-4 justify-between border rounded-xl border-grey text-sm font-bold">
            <p>Total Purchase</p>
            <div className=" flex gap-1 items-center">
              <p>$755.00</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>

          <div className=" flex p-2 px-4 border rounded-xl border-grey text-sm flex-col gap-2">
            <div className=" flex justify-between items-center font-bold">
              <p>Payment Methods</p>
              <FontAwesomeIcon icon={faCaretUp} />
            </div>

            <hr className=" border-none outline-none h-[1px] bg-grey w-full" />

            <div className=" flex items-center p-2 px-4 border rounded-xl border-grey text-sm outline-none gap-2">
              <input type="radio" name="" id="" />
              <p>Credit/Debit Card</p>
            </div>

            <hr className=" border-none outline-none h-[1px] bg-grey w-full" />

            {/* fullname */}
            <div className=" flex flex-col">
              <label htmlFor="" className=" text-xs">
                Credit/Debit card number
              </label>
              <input
                type="text"
                placeholder="Credit/Debit card number"
                className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
              />
            </div>

            {/* email */}
            <div className=" flex flex-col">
              <label htmlFor="" className=" text-xs">
                Card Holder Name
              </label>
              <input
                type="text"
                placeholder="Card Holder Name"
                className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
              />
            </div>

            {/* --------- */}
            <div className=" flex justify-between">
              <div className=" flex flex-col w-[49%]">
                <label htmlFor="" className=" text-xs">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="__ / __"
                  className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
                />
              </div>

              <div className=" flex flex-col w-[49%]">
                <label htmlFor="" className=" text-xs">
                  CCV
                </label>
                <input
                  type="text"
                  placeholder="CCV"
                  className=" p-2 focus:outline-none bg-ash bg-opacity-25 px-5 rounded-lg placeholder:text-grey placeholder:text-sm"
                />
              </div>
            </div>

            <div className=" flex items-center p-2 px-4 border rounded-xl border-grey text-sm outline-none gap-2">
              <input type="radio" name="" id="" />
              <p>Bank Transfer</p>
            </div>

            <div className=" flex items-center p-2 px-4 border rounded-xl border-grey text-sm outline-none gap-2">
              <input type="radio" name="" id="" />
              <p>Paypal</p>
            </div>

          </div>

          <div className=" flex items-center p-2 px-4 justify-between border rounded-xl border-grey text-sm flex-col gap-1">
            <div className=" flex items-center justify-between w-full font-bold">
              <p>Billing Address</p>
              <FontAwesomeIcon icon={faCaretUp} />
            </div>

            <div className=" flex gap-1 items-center w-full">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className=" text-xs">Same as my shipping address</label>
            </div>
          </div>

          <button className=" w-full rounded-lg bg-black text-white p-2 text-sm">
          Complete Payment of $755.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
