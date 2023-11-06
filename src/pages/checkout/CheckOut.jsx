import React from 'react'
import './index.css'
import FormsContainer from '../../components/checkoutForm/FormsContainer'
import { OrderSummery } from '../../components/orderSummery'
export default function CheckOut() {
  return (
    <>
      <h1 style={{ margin: '1rem auto 0 auto' }}>Check Out</h1>
      <section className='checkout-main-container'>
        <FormsContainer />
        <OrderSummery />
      </section>
    </>
  )
}
