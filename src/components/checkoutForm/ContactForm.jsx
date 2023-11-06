import React from 'react'
import { styles } from '.'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { handleFormIsOpen } from '../../features/checkout/checkout'
import { useRef } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  var emailRef = useRef('')
  var contactRef = useRef('')
  const dispatch = useDispatch()
  const { contactForm, shippingForm, paymentForm } = useSelector(
    (store) => store.checkout
  )
  const { isOpenContact, email, contact } = contactForm

  const { cardNumber, CVV, expiryDate, billingZip, isOpenPayment } = paymentForm
  return (
    <form
      action=''
      className={isOpenContact ? styles.subForm1 : styles.hideForm}
    >
      <div className={styles.heading}>
        <span>1</span> <h2>Contect Information</h2>
      </div>
      <div className={styles.formControls}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor='email'>
            Email :
          </label>
          <input
            type='email'
            name='email'
            className={styles.input}
            ref={emailRef}
            onChange={(e) => {
              emailRef = e.currentTarget.value
              console.log(emailRef)
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor='name'>
            Contect :
          </label>
          <input
            type='text'
            name='name'
            className={styles.input}
            ref={contactRef}
            onChange={(e) => {
              contactRef = e.currentTarget.value
              console.log(contactRef)
            }}
          />
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
          className='primary-button button'
          onClick={(e) => {
            e.preventDefault()
            if (emailRef == '' && contactRef == '') {
              toast('please enter Email')
            } else {
              dispatch(handleFormIsOpen(3))
            }
          }}
        >
          Shipping
        </button>
      </div>
    </form>
  )
}
