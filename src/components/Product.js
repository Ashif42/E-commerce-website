import React from 'react';

function Product({ product, addToCart }) {
  const { id, name, price} = product;

  return (
    <div className="product">
      <div><h3>{name}</h3></div>
      <div>${price}</div>
      <div className='xyz'><button onClick={() => addToCart(id)}>Add to Cart</button></div>
    </div>
  );
}

export default Product;
