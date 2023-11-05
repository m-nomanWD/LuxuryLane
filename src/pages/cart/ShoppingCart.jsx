import React from 'react'
import CartContainer from '../../components/cart/cartContainer/CartContainer'
import { Heading } from '../../components'
import './index.css'

export default function ShoppingCart() {
  return (
    <>
      <section className='main-cart-container'>
        <article className='header-cart'>
          <Heading level={1} children='YOUR BAG' />
        </article>
        <CartContainer />
      </section>
    </>
  )
}
