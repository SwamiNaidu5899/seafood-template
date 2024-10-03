import React, { useState } from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Salmon",
      price: 25.99,
      offer: 20,
      image: "https://cdn.shopify.com/s/files/1/0688/3596/7262/files/ACME_Smoked_Fish_2021_ESG_Report_-_Photos_-_Selects_from_Marketing_00006_700x_99d665a5-a479-43ed-b429-aa6f8e5dac13_600x600.png?v=1689178958",
    },
    {
      id: 2,
      name: "King Prawn",
      price: 19.99,
      offer: 10,
      image: "https://www.manettas.com.au/wp-content/uploads/2016/08/Ocean-King-Prawns-Cooked-Large-Sydney-Fresh-Seafood-Drummoyne-Manettas-Seafood-Market.jpg",
    },
    {
      id: 3,
      name: "Lobster",
      price: 34.99,
      offer: 15,
      image: "https://crabs.com/cdn/shop/products/BillysLobsterTail.jpg?v=1675220375",
    },
    {
        id: 4,
        name: "Chicken",
        price: 99.99,
        offer: 20,
        image: "https://godavaricuts.com/cdn/shop/files/wwtwhzvhblqunlp1640269156619_Original_1_8b5c5fdf-f3ac-46b2-a9cc-3c193f6ba3e4_430x.jpg?v=1682399160",
      }
  ];

  return (
    <section className="top-selling-section" data-aos = 'zoom-in'>
      <h2 className="section-title">Top Selling Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" data-aos='fade-up'>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <div className="price-offer">
                <p className="product-price">${product.price}</p>
                <p className="product-offer">{product.offer}% OFF</p>
              </div>
              <div className="actions">
                <button className="wishlist-button">
                  <FaHeart /> Wishlist
                </button>
                <button className="cart-button">
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingProducts;
