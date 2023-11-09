import React from 'react'
import './index.css'
import FormsContainer from '../../components/checkoutForm/FormsContainer'
import { OrderSummery } from '../../components/orderSummery'
import CheckoutModal from '../../components/checkoutForm/modal/CheckoutModal'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
export default function CheckOut() {
  const { isModalOpen } = useSelector((store) => store.modal)
  return (
    <>
      <h1 style={{ margin: '1rem auto 0 auto' }}>Check Out</h1>
      <section className='checkout-main-container'>
        <FormsContainer />
        <OrderSummery />
        {isModalOpen && <CheckoutModal />}
      </section>
    </>
  )
}
