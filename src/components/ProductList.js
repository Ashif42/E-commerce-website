import React, { useState } from 'react';
import Product from './Product';
import SearchBar from './SearchBar';
import product1Image from "./Product's images/1-apple.jpg";
import product2Image from "./Product's images/2-banana.jpg";
import product3Image from "./Product's images/3-mobile.jpg";
import product4Image from "./Product's images/4-pc.jpg";
import product5Image from "./Product's images/5-ac.jpg";
import product6Image from "./Product's images/6-watch.jpg";
import product7Image from "./Product's images/7-neckband.png";
import product8Image from "./Product's images/8-purse.jpg";
import product9Image from "./Product's images/9-tea.jpg";
import product10Image from "./Product's images/10-perfume.jpg";
import product11Image from "./Product's images/11-bottle.jpg";
import product12Image from "./Product's images/12-sunglass.jpg";
import product13Image from "./Product's images/13-phonrcase.jpg";
import product14Image from "./Product's images/14-Refrigerator.jpg";


function ProductList({ products, addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchQuery) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };
    return (<>
      <h5 className='animation'>Welcome to my website<br />the product Lists are below</h5>
      <div className='text-center'><SearchBar onSearch={handleSearch} /></div>
      <div className="product-list">
        {filteredProducts.map(product => (
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
      </>
    );
  }
  

export default ProductList;
