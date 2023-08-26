import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OrderConfirmation from "./components/OrderConfirmation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Apple',
      price: 10,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Banana',
      price: 20,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Mobile',
      price: 50,
      image: 'product3.jpg',
    },
    {
      id: 4,
      name: 'PC',
      price: 200,
      image: 'product4.jpg',
    },
    {
      id: 5,
      name: 'AC',
      price: 100,
      image: 'product5.jpg',
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = productId => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

  const removeFromCart = productId => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
