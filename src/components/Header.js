import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className='text-warning'>E-commerce Website</h1>
      <div className="navbar">
          <div className='nav1'><Link to="/"><h5>Home</h5></Link></div>
          <div className="nav3"><Link to="/about-us"><h5>About this website</h5></Link></div>
          <div className='nav2'><Link to="/cart"><h5>Cart</h5></Link></div>
      </div>
    </header>
  );
}

export default Header;
