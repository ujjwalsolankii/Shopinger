import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="shopTitle">
      <Link to='/'><h1 className="heading">Shopinger</h1></Link>
      </div>
      <div className="links">
        <Link to='/'> Shop</Link>
        <Link to='/cart' className='cartIcon'>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  )
};
