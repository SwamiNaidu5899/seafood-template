import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section" data-aos="fade-up">
      <div className="about-us-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>Seafood Delights</strong>, we are committed to providing the freshest and most sustainably sourced seafood 
            to our customers. With decades of experience in the seafood industry, our team ensures that every product you receive 
            meets the highest quality standards. From the deep oceans to your table, we deliver a wide variety of seafood, 
            including fish, shellfish, and exotic delicacies.
          </p>
          <p>
            Our mission is to support sustainable fishing practices while offering competitive prices and exceptional customer service. 
            Whether you're a seafood enthusiast or a large-scale restaurant, we have the perfect seafood selection to meet your needs.
          </p>
          <p>
            Join us in enjoying the finest seafood, delivered fresh, from sea to plate.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://st4.depositphotos.com/4590583/28891/i/450/depositphotos_288918952-stock-photo-fresh-fish-seafood-healthy-food.jpg" 
            alt="Seafood Selection"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
