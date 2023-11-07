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
  var [email, setEmail] = useState('')
  var [contact, setContact] = useState('')
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
            if (email === '' || contact === '') {
              toast.error('Please enter both Email and Contact')
            }

            if (email !== '' && contact !== '') {
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
