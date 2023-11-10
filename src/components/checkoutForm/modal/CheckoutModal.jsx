import React from 'react'
import { useReactToPrint } from 'react-to-print'
import { OrderItem } from '../../orderSummery'
import ItemsInvoice from './ItemsInvoice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { handleModalClose } from '../../../features/modal/modalSlice'
import { useRef } from 'react'
export default function CheckoutModal() {
  const refContainer = useRef()
  const dispatch = useDispatch()
  const { orderDetail } = useSelector((store) => store.modal)
  const { create_time, id, payer, status, purchase_units } = orderDetail

  const { productsShoped, total, grandeTotal, tax, shippingForm } = useSelector(
    (store) => store.checkout
  )
  const hadlePrint = useReactToPrint({
    content: () => refContainer.current,
  })

  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.invoice} ref={refContainer}>
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
        <Link
          to='/'
          onClick={() => {
            dispatch(handleModalClose())
            hadlePrint()
          }}
        >
          {' '}
          <span className={styles.printBtn}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z'
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}
