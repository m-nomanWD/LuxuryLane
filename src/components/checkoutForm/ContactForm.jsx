import React from 'react'
import { styles } from '.'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import {
  handleForm1Input,
  handleFormIsOpen,
} from '../../features/checkout/checkout'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

  var [email, setEmail] = useState('')
  var [contact, setContact] = useState('')
  var [isValidEmail, setIsValidEmail] = useState(true)
  const dispatch = useDispatch()
  const { contactForm, shippingForm, paymentForm } = useSelector(
    (store) => store.checkout
  )
  const { isOpenContact } = contactForm

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
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value)
              setIsValidEmail(emailRegex.test(email))
              console.log(isValidEmail)
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
            value={contact}
            onChange={(e) => {
              setContact(e.currentTarget.value)
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

            if (!isValidEmail && email !== '') {
              toast.error('Please Enter a Valid Email')
            }
            if (email === '' || contact === '') {
              toast.error('Please enter both Email and Contact')
            }

            if (email !== '' && contact !== '' && isValidEmail === true) {
              dispatch(handleFormIsOpen(3))
              dispatch(
                handleForm1Input({
                  email,
                  contact,
                })
              )
              setEmail('')
              setContact('')
            }
          }}
        >
          Shipping
        </button>
      </div>
    </form>
  )
}
