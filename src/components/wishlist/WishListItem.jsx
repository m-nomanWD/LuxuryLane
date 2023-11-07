import React from 'react'
import styles from './index.module.css'
import { DeleteItem } from '../../constants'
import { useDispatch } from 'react-redux'
import { handleRemoveToWishlist } from '../../features/wishlist/wishlistSlice'
import toast from 'react-hot-toast'
export default function WishListItem({ wishlistItem }) {
  const { image, title, price, id } = wishlistItem
  const dispatch = useDispatch()
  return (
    <div className={styles.wishlistItem}>
      <div className={styles.wishlistImg}>
        <img src={image} alt='' />
      </div>
      <div className={styles.info}>
        <h6>{title}</h6>
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
