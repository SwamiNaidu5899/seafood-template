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
    if (isWishlistOpen) setWishlistOpen(false);
  };

  const toggleWishlist = () => {
    setWishlistOpen(!isWishlistOpen);
    if (isCartOpen) setCartOpen(false);
  };

  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Header toggleCart={toggleCart} toggleWishlist={toggleWishlist} />
            <Hero />
            <TopSellingProducts/>
            <Products />
            <About />
            <Footer />
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <div className={`slider-one cart-slider ${isCartOpen ? 'open' : ''}`}>
              <button className="close-btn" onClick={toggleCart}>×</button>
              <Cart toggleCart={toggleCart} />
            </div>
            <div className={`slider-one wishlist-slider ${isWishlistOpen ? 'open' : ''}`}>
              <button className="close-btn" onClick={toggleWishlist}>×</button>
              <Wishlist toggleWishlist={toggleWishlist} />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default App;
