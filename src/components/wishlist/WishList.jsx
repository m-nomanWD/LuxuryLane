import React from 'react'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import WishListItem from './WishListItem'
import { HomeIcone } from '../../constants'
import { DeleteItem } from '../../constants'

export default function WishList() {
  const dispatch = useDispatch()
  const { wishlistItems } = useSelector((store) => store.wishlist)
  if (wishlistItems.length === 0) {
    return (
      <div className={styles.wishlistContainer}>
        <h3>Is Currently Empty </h3>
        <HomeIcone />
      </div>
    )
  }
  return (
    <>
      <div className={styles.wishlistContainer}>
        <div className={styles.wishlistItemsContainer}>
          {wishlistItems.map((item) => {
            return <WishListItem wishlistItem={item} />
          })}
        </div>
        <button className='primary-button button'>Clear Wishlist</button>
      </div>
    </>
  )
}
