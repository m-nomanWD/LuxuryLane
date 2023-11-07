import React from 'react'
import { styles } from '.'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleFormIsOpen,
  handleForm2Input,
} from '../../features/checkout/checkout'
export default function ShippingForm() {
  const dispatch = useDispatch()
  const { shippingForm } = useSelector((store) => store.checkout)
  const { shippingCharges, isOpenShipping } = shippingForm
  const [shipping, setShipping] = React.useState('free')
  return (
    <form
      action=''
      className={isOpenShipping ? styles.subForm2 : styles.hideForm}
    >
      <div className={styles.heading}>
        <span>2</span> <h2>Shipping Methood</h2>
      </div>

      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='shipping'
            onClick={() => dispatch(handleForm2Input(0))}
          />
          <div>Free Shipping</div>
          <h3>free</h3>
        </div>
      </div>
      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='shipping'
            onClick={() => {
              dispatch(handleForm2Input(10))
            }}
          />
          <div>Flat Rate</div>
          <h3>$10</h3>
        </div>
      </div>
      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='shipping'
            onClick={() => dispatch(handleForm2Input(16))}
          />
          <div>UPS Ground</div>
          <h3>$16</h3>
        </div>
      </div>
      <div className={styles.formControls}>
        <div className={styles.radioBtnContainer}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='shipping'
            onClick={() => dispatch(handleForm2Input(20))}
          />
          <div>UPS Air</div>
          <h3>$20</h3>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.GoBack}
          onClick={(e) => {
            e.preventDefault()
            dispatch(handleFormIsOpen(1))
          }}
        >
          <span>{`<`}</span> Contect
        </button>
        <button
          className='primary-button button'
          onClick={(e) => {
            e.preventDefault()
            dispatch(handleFormIsOpen(2))
          }}
        >
          Payment
        </button>
      </div>
    </form>
  )
}
