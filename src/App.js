import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import OrderConfirmation from "./components/OrderConfirmation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Footer from "./components/Footer";

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
    {
      id: 6,
      name: 'Mens watch',
      price: 100,
      image: 'product5.jpg',
    },
    {
      id: 7,
      name: 'Neckband',
      price: 999,
      image: 'product5.jpg',
    },
    {
      id: 8,
      name: 'Purse',
      price: 2999,
      image: 'product.jpg',
    },
    {
      id: 9,
      name: 'Green Tea',
      price: 200,
      image: 'product.jpg',
    },
    {
      id: 10,
      name: 'Perfume',
      price: 800,
      image: 'product.jpg',
    },
    {
      id: 11,
      name: 'Steel Bottle',
      price: 200,
      image: 'product.jpg',
    },
    {
      id: 12,
      name: 'Sunglasses',
      price: 199,
      image: 'Sunglasses.jpg',
    },
    {
      id: 13,
      name: 'Phone case',
      price: 99,
      image: 'Phone case.jpg',
    },
    {
      id: 14,
      name: 'Refrigerator',
      price: 10000,
      image: 'Fridge.jpg',
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
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
  
}

export default App;
