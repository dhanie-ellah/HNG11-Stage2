import React from 'react'
import NavTop from "../Components/Nav/NavTop";
import NavMiddle from "../Components/Nav/NavMiddle";
import NavBottom from "../Components/Nav/NavBottom";
import CheckoutForm from '../Components/CheckoutForm';
import Footer from "../Components/Footer";

const Checkout = () => {
  return (
    <div className=" flex flex-col gap-5 sm:gap-3">
      <div className=" flex flex-col sm:gap-5">
        <NavTop />
        <NavMiddle />
        <NavBottom location="Home  >  Checkout" />
      </div>
      <CheckoutForm/>
      <Footer/>
    </div>
  )
}

export default Checkout