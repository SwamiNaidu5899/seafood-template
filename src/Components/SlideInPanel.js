
import React from 'react';
import Cart from './Cart'; // Assuming you have Cart component
import Wishlist from './Wishlist'; // Assuming you have Wishlist component

const SlideInPanel = ({ isVisible, closePanel, type }) => {
  return (
    <div className={`slide-in-panel ${isVisible ? 'visible' : ''}`}>
      <button className="close-button" onClick={closePanel}>
        &times;
      </button>
      {type === 'cart' && <Cart />}
      {type === 'wishlist' && <Wishlist />}
    </div>
  );
};

export default SlideInPanel;
