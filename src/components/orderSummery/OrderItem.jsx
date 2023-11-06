import React from 'react'
import { styles } from '.'

export default function OrderItem({ product }) {
  const { title, image, amount, price } = product
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.checkoutItemImg}>
        <img src={image} alt='' />
      </div>
      <div className={styles.checkoutItemInfo}>
        <h6>{title}</h6>
        <div className={styles.checkoutPrice}>
          <h3>{`Qty ${amount}`}</h3>
          <h3>{` $${amount * price}`}</h3>
        </div>
      </div>
    </div>
  )
}
