import React from 'react'
import { styles } from '.'

export default function PaymentForm() {
  return (
    <form action='' className={styles.hideForm}>
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
        <button className={styles.GoBack}>Payment</button>
        <button className='primary-button button'>Check Out</button>
      </div>
    </form>
  )
}
