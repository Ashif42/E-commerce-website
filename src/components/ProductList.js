import React from 'react';
import Product from './Product';
import product1Image from "./Product1.gif";
import product2Image from "./Product2.jpg";
import product3Image from "./Product3.png";
import product4Image from "./Product4.jpg";
import product5Image from "./Product5.jpg";


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
            {/* <h3>{product.name}</h3> */}
            {/* <p>${product.price}</p> */}
            <Product key={product.id} product={product} addToCart={addToCart} />
            {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
          </div>
        ))}
      </div>
    );
  }
  

export default ProductList;
