// import React from 'react';

// function Cart({ cart, removeFromCart }) {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.map(item => (
//         <div key={item.id} className="cart-item">
//           <p>{item.name}</p>
//           <p>${item.price}</p>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
    const Navigate = useNavigate();
    const generateRandomOrderId = () => {
        const randomOrderId = Math.floor(10000 + Math.random() * 90000); // Generates a random number
        return randomOrderId.toString(); 
      };
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    return total;
  };

  const handlePlaceOrder = () => {
    const orderDetails = {
        orderId: generateRandomOrderId(),
        totalAmount: calculateTotalAmount(),
  };
  Navigate('/order-confirmation', { state: { orderDetails } });
  
}
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="checkout">
        <h2>Checkout</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} />
          </label>
          {/* Add more input fields for shipping info */}
          <button type="button" onClick={handlePlaceOrder}>Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
