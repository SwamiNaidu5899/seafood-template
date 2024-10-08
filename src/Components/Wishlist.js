import React from 'react';
import { useWishlist } from '../Context/WishlistContext'; 

const Wishlist = ({ toggleWishlist }) => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <button className="close-button" onClick={toggleWishlist}>X</button>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button 
                className="remove-button"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
