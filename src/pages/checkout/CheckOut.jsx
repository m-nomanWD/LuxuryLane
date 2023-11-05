import React from 'react'
import './index.css'
import FormsContainer from '../../components/checkoutForm/FormsContainer'
import { OrderSummery } from '../../components/orderSummery'
export default function CheckOut() {
  return (
    <>
      <section className='checkout-main-container'>
        <FormsContainer />
        <OrderSummery />
      </section>
    </>
  )
}
