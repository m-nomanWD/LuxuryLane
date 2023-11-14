import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
import { Heading, BodyText, Button } from '../index'
export default function Hero() {
  return (
    <header className='hero-container'>
      <div className='hero-info'>
        <Heading children='70% SALE OFF' level={2} />
        <Heading children='FURNITURE AT COST' level={1} />
        <BodyText children='Suspendisse varirus enim in eros elementum tritique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.' />
        <Link to='/allproducts'>
          <button className='primary-button button'>Discover More</button>
        </Link>
      </div>
    </header>
  )
}
