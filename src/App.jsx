import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import  { useEffect, useState } from 'react';
import { products } from './data/products';
import { CartProvider } from './components/CartContext';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';

function App() {
  const testArr = products;
  
  return (
    <div>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop/> } />
              <Route path="/cart" element={<Cart cart={testArr}/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer></Footer>
          </Router>
        </CartProvider>
    </div>

  );
}

export default App;
