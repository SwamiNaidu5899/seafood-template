import React from "react";

const Products = () => {
  return (
    <section id="products" className="products-section" data-aos="zoom-in">
      <h2 className="section-title">Our Products</h2>
      <div className="product-list">
        <div className="product-item" data-aos="fade-up">
          <img src="https://crabs.com/cdn/shop/products/BillysLobsterTail.jpg?v=1675220375" alt="Lobster" />
          <h3 className="product-name">Fresh Lobster</h3>
          <p className="product-price">$25.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://cdn.shopify.com/s/files/1/0688/3596/7262/files/ACME_Smoked_Fish_2021_ESG_Report_-_Photos_-_Selects_from_Marketing_00006_700x_99d665a5-a479-43ed-b429-aa6f8e5dac13_600x600.png?v=1689178958" alt="Salmon" />
          <h3 className="product-name">Wild Salmon</h3>
          <p className="product-price">$18.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://s.turbifycdn.com/aah/lobstersales2/large-shrimp-80.png" alt="Shrimp" />
          <h3 className="product-name">Premium Shrimp</h3>
          <p className="product-price">$15.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://godavaricuts.com/cdn/shop/files/wwtwhzvhblqunlp1640269156619_Original_1_8b5c5fdf-f3ac-46b2-a9cc-3c193f6ba3e4_430x.jpg?v=1682399160" alt="Lobster" />
          <h3 className="product-name">Chicken</h3>
          <p className="product-price">$25.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://godavaricuts.com/cdn/shop/files/qxrrhqjpcomlyxx1640188643871_Original_1_785x.jpg?v=1675158441" alt="Mutton" />
          <h3 className="product-name">Mutton</h3>
          <p className="product-price">$18.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://godavaricuts.com/cdn/shop/files/pelihdqlowlmjic1640188623311_Original_1_785x.jpg?v=1675333662" alt="Sea Fish" />
          <h3 className="product-name">Sea Fish</h3>
          <p className="product-price">$15.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://godavaricuts.com/cdn/shop/files/cwdgknaomopsqer1640266340711_Original_1_785x.jpg?v=1675334670" alt="Crabs" />
          <h3 className="product-name">Crabs</h3>
          <p className="product-price">$25.00 per lb</p>
        </div>
        <div className="product-item" data-aos="fade-up">
          <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/types-of-shellfish-oysters.jpg?fit=728%2C524" alt="Shell Fish" />
          <h3 className="product-name">Shell Fish</h3>
          <p className="product-price">$18.00 per lb</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
