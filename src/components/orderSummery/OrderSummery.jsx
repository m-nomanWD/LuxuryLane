import React from 'react'

import { OrderItem, styles } from './index'
import { useSelector } from 'react-redux'
export default function OrderSummery() {
  const { productsShoped, total, grandeTotal, tax, shippingForm } = useSelector(
    (store) => store.checkout
  )
  return (
    <aside>
      <h3>OrderSummery</h3>
      {productsShoped.map((product) => {
        return <OrderItem product={product} />
      })}
      <div className={styles.suuTotal}>
        <span>Sub Total:</span>
        <span>{`$ ${total.toFixed(1)}`}</span>
      </div>
      <div className={styles.shippingCharges}>
        <span>Shipping:</span>
        <span>
          {shippingForm.shippingCharges === 0
            ? 'Free'
            : shippingForm.shippingCharges}
        </span>
      </div>
      <div className={styles.tax}>
        <span>Sales Tax: </span>
        <span>{`$ ${((3 / 100) * total).toFixed(1)}`}</span>
      </div>
      <div className={styles.grandeTotal}>
        <span>Grande Total:</span>
        <span>{`$  ${
          shippingForm.shippingCharges !== 0
            ? (
                total +
                shippingForm.shippingCharges +
                (3 / 100) * total
              ).toFixed(1)
            : (total + 0 + (3 / 100) * total).toFixed(1)
        }`}</span>
      </div>
    </aside>
  )
}
