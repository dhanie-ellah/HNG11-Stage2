import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Products';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
