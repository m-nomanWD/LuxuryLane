import React from 'react'
import { styles } from '.'
export default function ShippingForm() {
  return (
    <form action='' className={styles.hideForm}>
      <div className={styles.heading}>
        <span>2</span> <h2>Shipping Methood</h2>
      </div>

      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input className={styles.radioBtn} type='radio' name='shipping' />
          <div>Free Shipping</div>
          <h3>free</h3>
        </div>
      </div>
      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input className={styles.radioBtn} type='radio' name='shipping' />
          <div>Flat Rate</div>
          <h3>$10</h3>
        </div>
      </div>
      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input className={styles.radioBtn} type='radio' name='shipping' />
          <div>UPS Ground</div>
          <h3>$16</h3>
        </div>
      </div>
      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input className={styles.radioBtn} type='radio' name='shipping' />
          <div>UPS Air</div>
          <h3>$20</h3>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.GoBack}>Contect information</button>
        <button className='primary-button button'>Payment</button>
      </div>
    </form>
  )
}
