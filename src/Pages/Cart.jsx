import React from "react";
import NavTop from "../Components/Nav/NavTop";
import NavMiddle from "../Components/Nav/NavMiddle";
import NavBottom from "../Components/Nav/NavBottom";
import CartItems from "../Components/CartItems";
import CartsProductList from "../Components/CartsProductList";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <div className=" flex flex-col gap-5 sm:gap-3">
      <div className=" flex flex-col sm:gap-5">
        <NavTop />
        <NavMiddle />
        <NavBottom location="Home  >  Checkout" />
      </div>
      <CartItems />
      <CartsProductList />
      <Footer />
    </div>
  );
};

export default Cart;
