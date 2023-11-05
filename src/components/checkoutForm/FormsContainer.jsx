import React from 'react'
import { styles, ContactForm, ShippingForm, PaymentForm } from './index'

export default function FormsContainer() {
  return (
    <>
      <div className={styles.formsContainer}>
        <ContactForm />
        <ShippingForm />
        <PaymentForm />
      </div>
    </>
  )
}
