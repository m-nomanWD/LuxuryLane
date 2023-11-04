import React from 'react'
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  Heart,
  Star,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
} from '../../constants/index'
import { Heading, BodyText, Button } from '../../components/index'
import { addToCart } from '../../features/cartSlice/cartSlice'
import {
  handleInCart,
  handleSingleProductInCart,
} from '../../features/requestSlice/requestSlice'
import { HomeIcone } from '../../constants/icons'
export default function DetailView() {
  const { singleProduct } = useSelector((store) => store.products)

  const { price, title, id, image, rating, isInCart, description } =
    singleProduct
  const stars = [1, 2, 3, 4, 5]
  const dispatch = useDispatch()

  return (
    <section className={styles.container}>
      <h1>Product Detail</h1>
      <article className={styles.detailProductContainer}>
        <div className={styles.imgConatiner}>
          <span>
            {' '}
            <Heart />
          </span>

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
          </div>
          <BodyText children={description} />
          <button className='primary-button button'>Add to Cart</button>
        </div>
      </article>
    </section>
  )
}
