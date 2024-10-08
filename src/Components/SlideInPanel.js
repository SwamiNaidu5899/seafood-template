
import React from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist'; 
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
