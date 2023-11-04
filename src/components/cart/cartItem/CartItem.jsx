import React from 'react'
import './index.css'
import { ChevronDown, ChevronUp } from '../../../constants'
import { UseSelector, useDispatch } from 'react-redux'
import {
  increase,
  decrease,
  removeItem,
} from '../../../features/cartSlice/cartSlice'
import { handleInCartRemove } from '../../../features/requestSlice/requestSlice'
export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const { title, price, image, amount, id } = item

  return (
    <article className='cart-item'>
      <div className='cart-img'>
        <img src={image} alt='' />
      </div>
      <div className='cart-info'>
        <h5>{title}</h5>
        <p>{`$${price}`}</p>
        <h6
          onClick={() => {
            dispatch(removeItem(item))
            dispatch(handleInCartRemove(id))
          }}
        >
          remove
        </h6>
      </div>
      <div className='cart-amount'>
        <span onClick={() => dispatch(increase(item))}>
          <ChevronUp />
        </span>
        <span>{amount}</span>
        <span
          onClick={() => {
            amount === 1 ? dispatch(removeItem)(item) : dispatch(decrease(item))
          }}
        >
          <ChevronDown />
        </span>
      </div>
    </article>
  )
}
