import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from '../../constants/icons'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

import './navbar.css'

function Navbar() {
  const { amount } = useSelector((store) => store.cart)
  const { amountWishlist } = useSelector((store) => store.wishlist)
  return (
    <nav>
      <div className='nav-center'>
        <div className='logo-container'>
          {/* <img src="" alt="logo" />
           */}
          <span>Luxury Lane</span>
        </div>
        <ul className='nav-links-conatiner'>
          <li className='nav-link'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='nav-link '>
            <span className='cart-amount-span'>{amount}</span>
            <Link to='/cart'>
              <ShoppingCart className='icon' />
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/wishlist'>
              <span className='cart-amount-span'>{amountWishlist}</span>
              <Heart className='icon' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
