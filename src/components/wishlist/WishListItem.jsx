import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import { DeleteItem } from '../../constants'
import { useDispatch } from 'react-redux'
import {
  handleAddToWishlist,
  handleRemoveToWishlist,
} from '../../features/wishlist/wishlistSlice'
import toast from 'react-hot-toast'
import { handleSingleProjuct } from '../../features/requestSlice/requestSlice'
export default function WishListItem({ wishlistItem }) {
  const { image, title, price, id } = wishlistItem
  const dispatch = useDispatch()
  return (
    <div className={styles.wishlistItem}>
      <div className={styles.wishlistImg}>
        <img src={image} alt='' />
      </div>

      <div className={styles.info}>
        <Link to='/detailview'>
          <h6 onClick={() => dispatch(handleSingleProjuct(id))}>{title}</h6>
        </Link>

        <h3>{`$ ${price}`}</h3>
      </div>
      <span
        className={styles.deleteItem}
        onClick={() => {
          dispatch(handleRemoveToWishlist(id))
          toast.error('item removed form wishlist')
        }}
      >
        <DeleteItem />
      </span>
    </div>
  )
}
