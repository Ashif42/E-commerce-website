// import React from 'react';

// function Product({ product, addToCart }) {
//   const { id, name, price} = product;

//   return (
//     <div className="product">
//       <div><h3>{name}</h3></div>
//       <div>${price}</div>
//       <div className='xyz'><button onClick={() => addToCart(id)}>Add to Cart</button></div>
//     </div>
//   );
// }

// export default Product;
import React, { useState } from 'react';

function Product({ product, addToCart }) {
  const { id, name, price } = product;
  
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCart = () => {
    addToCart(id);
    setClickCount(clickCount + 1); 
  };

  return (
    <div className="product">
      <div><h3>{name}</h3></div>
      <div>${price}</div>
      <div className='xyz'>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <p>quantity: {clickCount}</p>
      </div>
    </div>
  );
}

export default Product;

