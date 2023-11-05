import React from 'react'
import { styles } from '.'

export default function ContactForm() {
  return (
    <form action='' className={styles.subForm}>
      <div className={styles.heading}>
        <span>1</span> <h2>Contect Information</h2>
      </div>
      <div className={styles.formControls}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor='email'>
            Email :
          </label>
          <input type='email' name='email' className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor='name'>
            Name :
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
        <button className='primary-button button'>Shipping</button>
      </div>
    </form>
  )
}
