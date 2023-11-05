import React from 'react'
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  Heart,
  Star,
  ShoppingCart,
  PlusIcon,
  MinusIcon,
} from '../../constants/index'
import { Heading, BodyText, Button } from '../../components/index'
import { addToCart } from '../../features/cartSlice/cartSlice'
import {
  handleInCart,
  handleSingleProductInCart,
} from '../../features/requestSlice/requestSlice'
import { HomeIcone } from '../../constants/icons'
import { Link } from 'react-router-dom'
export default function DetailView() {
  const { singleProduct } = useSelector((store) => store.products)

  const { price, title, id, image, rating, isInCart, description, amount } =
    singleProduct
  const stars = [1, 2, 3, 4, 5]
  const dispatch = useDispatch()

  return (
    <section className={styles.container}>
      <h1>Product Detail</h1>
      <article className={styles.detailProductContainer}>
        <div className={styles.imgConatiner}>
          <img src={image} alt='' />
        </div>
        <div className={styles.detailProductInfo}>
          <h3 style={{ margin: '0 0' }}>{title}</h3>

          <div className={styles.ratingContainer}>
            {stars.map((star) => {
              return (
                <span className={styles.ratingStars}>
                  <Star
                    key={star}
                    className={
                      rating.rate >= star ? styles.starFill : styles.starEmpty
                    }
                  />
                </span>
              )
            })}
            <span className={styles.ratingCount}>{`(${rating.count}+)`}</span>
            <p>{`$ ${price}`}</p>
          </div>
          <BodyText children={description} />
          <div className={styles.heartContainer}>
            <Link className={styles.link} to='/wishlist'>
              {' '}
              <Heart />
            </Link>
            <Link className={styles.link} to='/cart'>
              <ShoppingCart />
            </Link>
          </div>
          {/* <div className={styles.counterContainer}>
            <MinusIcon />
            <p>{amount}</p>
            <PlusIcon />
          </div> */}

          {!isInCart ? (
            <button
              className='primary-button button'
              onClick={() => {
                dispatch(addToCart(singleProduct))
                dispatch(handleSingleProductInCart(id))
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button className='disabled-button button'>Already in Cart</button>
          )}
        </div>
      </article>
    </section>
  )
}
