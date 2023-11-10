import React from 'react'
import styles from './index.module.css'
import { CountdownTimer } from '../index'

export default function Strip() {
  return (
    <div className={styles.stripContainer}>
      <div className={styles.form}>
        {' '}
        <h2>Apple 3 in 1 Deal </h2>
        <h3>70% Off</h3>
        <p>
          Amazing deal buy three in price of one & its Apple Hurry up request to
          waiting list
        </p>
        <button className='primary-button button'> Waiting List</button>
      </div>
      <div className={styles.timer}>
        <CountdownTimer />
      </div>
    </div>
  )
}
