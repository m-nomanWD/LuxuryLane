import React from 'react'
import styles from './index.module.css'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutModal from '../checkoutForm/modal/CheckoutModal'
import { handleModalOpen } from '../../features/modal/modalSlice'
import { clearCart } from '../../features/cartSlice/cartSlice'

const PayPalCheckout = () => {
  const { total, shippingForm } = useSelector((store) => store.checkout)

  const tax = (3 / 100) * total
  console.log(total, tax, shippingForm.shippingCharges)
  const { isModalOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()
  // Replace 'your_client_id' with your PayPal sandbox client ID
  const clientID =
    'AeBWz_Z8OdeZw_8qNyn0pHaouac7D3mvHw7m0pa7wYYqhYqdoLcKK7U6gldfkANbKIYOSIyD7jpSo-qG'

  // Define the PayPal transaction details
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total + shippingForm.shippingCharges + tax, // Replace with the amount you want to charge
          },
        },
      ],
    })
  }

  // Handle successful payment
  const onApprove = (data, actions) => {
    // You can handle the successful payment here, e.g., update your database, show a success message, etc.

    return actions.order.capture().then(function (details) {
      dispatch(handleModalOpen(details))
      dispatch(clearCart())
      // Show a success message to your buyer

      // OPTIONAL: Call your server to save the transaction
    })
  }

  return (
    <div className={isModalOpen ? styles.hide : styles.show}>
      <PayPalButton
        options={{
          clientId: clientID,
          currency: 'USD', // Replace with your desired currency
          disableFunding: 'card,paylater',
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        style={{
          layout: 'horizontal',
          color: 'silver',
          shape: 'rect',
          label: 'paypal',
          height: 40,
          tagline: true,
        }}
        className={styles.customBtn}
      />
    </div>
  )
}

export default PayPalCheckout
