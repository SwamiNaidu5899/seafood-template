import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  const notify = () => toast("Currently I'm Not working Dude..!");

  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="hero-content">
        <Carousel
          autoPlay = {true}
          infiniteLoop
          showThumbs={true}
          showStatus={false}
          dynamicHeight={true}
          className="carousel-container"
        >
          <div>
            <img src="https://image2.jdomni.in/banner/05022021/34/F5/F0/8B394DF7FD78B614FB2FB68B7A_1612529927675.jpg?output-format=webp" alt="Fresh Seafood" />
            
          </div>
          <div>
            <img src="https://image3.jdomni.in/banner/05022021/69/71/6E/198C41D0CE2AE88C9D9264BFC7_1612529903804.jpg?output-format=webp" alt="Ocean Catch" />
          </div>
          <div>
            <img src="https://image2.jdomni.in/banner/05022021/CA/34/25/408218EFDB28F52888E1055149_1612535341651.jpg?output-format=webp" alt="Delivered To You" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
