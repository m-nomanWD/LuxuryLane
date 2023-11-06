import React from 'react'
import { styles } from '.'
import { handleFormIsOpen } from '../../features/checkout/checkout'
import { useDispatch, useSelector } from 'react-redux'
export default function PaymentForm() {
  const dispatch = useDispatch()
  const { paymentForm } = useSelector((store) => store.checkout)
  const { isOpenPayment } = paymentForm
  return (
    <form
      action=''
      className={isOpenPayment ? styles.subForm3 : styles.hideForm}
    >
      <div className={styles.heading}>
        <span>3</span> <h2>Check Out</h2>
      </div>
      <div className={styles.formControls}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor='card-number'>
            Card Number :
          </label>
          <input type='number' name='card-number' className={styles.input} />
        </div>
        <div className={styles.spacialContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor='expiry'>
              Expiry Date :
            </label>
            <input type='date' name='expiry' className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor='cvv'>
              CVV :
            </label>
            <input type='number' name='cvv' className={styles.input} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor='name'>
            Billing Zip :
          </label>
          <input type='text' name='name' className={styles.input} />
        </div>

        <div className={styles.checkboxContainer}>
          <input type='checkbox' name='agree' className={styles.checkbox} />
          <label className={styles.label} htmlFor='agree'>
            Subscribe to our newsletter and stay updated on the latest product
          </label>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.GoBack}
          onClick={(e) => {
            e.preventDefault()
            dispatch(handleFormIsOpen(3))
          }}
        >
          <span>{`<`}</span> Shipping
        </button>
        <button className='primary-button button'>Check Out</button>
      </div>
    </form>
  )
}
