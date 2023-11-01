import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from '../../constants/icons'

import './navbar.css'

function Navbar() {
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
          <li className='nav-link'>
            <Link to='/cart'>
              <ShoppingCart className='icon' />
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/wishlist'>
              <Heart className='icon' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
