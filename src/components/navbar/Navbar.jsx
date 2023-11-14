import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from '../../constants/icons'
import Logo from '../atoms/logo/Logo'
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
          <Logo />
        </div>
        <ul className='nav-links-conatiner'>
          {/* <li className='nav-link'>
            <Link to='/about'>About Us</Link>
          </li> */}
          <li className='nav-link '>
            <span className='cart-amount-span'>{amount}</span>
            <Link to='/cart'>
              <ShoppingCart className='icon' />
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/wishlist'>
              <span className='cart-amount-span'>{amountWishlist}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
                // onClick={handleSingleItem}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
