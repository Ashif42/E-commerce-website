import React from 'react';
import Product from './Product';
import product1Image from "./apple1.jpg";
import product2Image from "./banana2.jpg";
import product3Image from "./mobile3.jpg";
import product4Image from "./pc4.jpg";
import product5Image from "./ac5.jpg";
import product6Image from "./watch6.jpg";
import product7Image from "./neckband7.png";
import product8Image from "./purse8.jpg";
import product9Image from "./tea9.jpg";
import product10Image from "./perfume10.jpg";
import product11Image from "./bottle11.jpg";
import product12Image from "./sunglass12.jpg";
import product13Image from "./phonrcase13.jpg";
import product14Image from "./Refrigerator14.jpg";


function ProductList({ products, addToCart }) {
    return (
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            {product.id === 1 && <img src={product1Image} alt={product.name} />}
            {product.id === 2 && <img src={product2Image} alt={product.name} />}
            {product.id === 3 && <img src={product3Image} alt={product.name} />}
            {product.id === 4 && <img src={product4Image} alt={product.name} />}
            {product.id === 5 && <img src={product5Image} alt={product.name} />}
            {product.id === 6 && <img src={product6Image} alt={product.name} />}
            {product.id === 7 && <img src={product7Image} alt={product.name} />}
            {product.id === 8 && <img src={product8Image} alt={product.name} />}
            {product.id === 9 && <img src={product9Image} alt={product.name} />}
            {product.id === 10 && <img src={product10Image} alt={product.name} />}
            {product.id === 11 && <img src={product11Image} alt={product.name} />}
            {product.id === 12 && <img src={product12Image} alt={product.name} />}
            {product.id === 13 && <img src={product13Image} alt={product.name} />}
            {product.id === 14 && <img src={product14Image} alt={product.name} />}
            <Product key={product.id} product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    );
  }
  

export default ProductList;
