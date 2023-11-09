import React from 'react'
import { OrderItem } from '../../orderSummery'
import ItemsInvoice from './ItemsInvoice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { handleModalClose } from '../../../features/modal/modalSlice'
export default function CheckoutModal() {
  const dispatch = useDispatch()
  const { orderDetail } = useSelector((store) => store.modal)
  const { create_time, id, payer, status, purchase_units } = orderDetail

  const { productsShoped, total, grandeTotal, tax, shippingForm } = useSelector(
    (store) => store.checkout
  )

  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.invoice}>
        <h3>
          Luxury <span>Lane</span>
        </h3>
        <div className={styles.header}>
          <h3>
            <span>Name: </span>
            {payer.name.given_name}
          </h3>
          <h3>
            Genrated <span>Time:</span> {create_time}
          </h3>
          <h3 className={styles.transition}>
            <span>Bill ID: </span>
            {id}
          </h3>
          <h3 className={styles.status}>
            <span>Status:</span> {status}
          </h3>
          <h3></h3>
          {/* <h3>
            Total Amount : {purchase_units.amount.currency_code}{' '}
            {purchase_units.amount.value}
          </h3> */}
        </div>
        <div className={styles.product}>
          <table>
            <tr>
              <th>Sr#</th>
              <th>Item Name</th>
              <th>Quntity</th>
              <th>Price</th>
            </tr>
            {productsShoped.map((item, index) => {
              return <ItemsInvoice key={item.id} item={item} index={index} />
            })}
            <tr className={styles.footer}>
              <td></td>
              <td>
                <h3>Sub Total:</h3>
              </td>
              <td>3</td>
              <td>{total}</td>
            </tr>
            <tr className={styles.footer}>
              <td></td>
              <td>
                <h3>Shipping Charges:</h3>
              </td>
              <td></td>
              <td>{shippingForm.shippingCharges}</td>
            </tr>
            <tr className={styles.footer}>
              <td></td>
              <td>
                <h3 style={{ color: 'red' }}>Tax:</h3>
              </td>
              <td>3%</td>
              <td>{((3 / 100) * total).toFixed(1)}</td>
            </tr>
            <tr className={styles.footer}>
              <td></td>
              <td>
                <h3>Total Paid:</h3>
              </td>
              <td></td>
              <td>
                {(
                  total +
                  shippingForm.shippingCharges +
                  (3 / 100) * total
                ).toFixed(1)}
              </td>
            </tr>
          </table>
        </div>
        <Link to='/' onClick={() => dispatch(handleModalClose())}>
          {' '}
          <button className='primary-button '>Go Home</button>
        </Link>
      </div>
    </div>
  )
}
