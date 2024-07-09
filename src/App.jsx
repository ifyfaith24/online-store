import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage'; 
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Confirm from './Components/Comfirm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Confirm" element={<Confirm />} />
       
      </Routes>
     
    </Router>
  );
};

export default App;
