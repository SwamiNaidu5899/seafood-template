import React from 'react';
import { useCart } from '../Context/CartContext'; 
import { Link } from 'react-router-dom';

const Cart = ({ toggleCart }) => {
  const { cartItems, removeFromCart } = useCart(); 

  return (
    <div className="cart-container">
      <button className="close-button" onClick={toggleCart}>X</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button 
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              <img src={item.image} alt={item.name} height={80} width={80} />
            </div>
          ))}
        </ul>
      )}
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default Cart;
