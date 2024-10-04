import './App.css'
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import 'aos/dist/aos.css'; 
import AOS from "aos";
import TopSellingProducts from './Components/TopSellingProducts';
import ContactUs from './Components/ContactUs';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <TopSellingProducts/>
      <Products />
      <About />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default App;

