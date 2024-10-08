import './App.css';
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import 'aos/dist/aos.css';
import AOS from "aos";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopSellingProducts from './Components/TopSellingProducts';
import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';

const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
    if (isWishlistOpen) setWishlistOpen(false); // Close wishlist if it's open
  };

  const toggleWishlist = () => {
    setWishlistOpen(!isWishlistOpen);
    if (isCartOpen) setCartOpen(false); // Close cart if it's open
  };

  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Header toggleCart={toggleCart} toggleWishlist={toggleWishlist} />
            <Hero />
            <Products />
            <About />
            <Footer />
            <Routes>
              <Route path="/" element={<TopSellingProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            {/* Cart Slider */}
            <div className={`slider-one ${isCartOpen ? 'open' : ''}`}>
              <Cart toggleCart={toggleCart} />
            </div>
            {/* Wishlist Slider */}
            <div className={`slider-one ${isWishlistOpen ? 'open' : ''}`}>
              <Wishlist toggleWishlist={toggleWishlist} />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default App;
