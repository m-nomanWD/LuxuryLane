import React from 'react'
import './index.css'

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Heart, Star, QuickView } from '../../../constants/index'
import { Heading, BodyText, Button } from '../../index'
import { addToCart } from '../../../features/cartSlice/cartSlice'
import {
  handleSingleProjuct,
  handleInCart,
} from '../../../features/requestSlice/requestSlice'
import { handleAddToWishlist } from '../../../features/wishlist/wishlistSlice'
import toast from 'react-hot-toast'
export default function Product({ product }) {
  const { cartItems } = useSelector((store) => store.cart)
  console.log(cartItems)
  const dispatch = useDispatch()
  const stars = [1, 2, 3, 4, 5]
  const { price, title, id, image, rating, isInCart } = product
  const handleClickAction = () => {
    addToCart(product)
  }

  return (
    <div className='card-container'>
      <div className='card-img'>
        <img src={image} alt='' />
      </div>
      <div className='card-info'>
        <Heading children={title} level={3} />
        <div className='icons-container'>
          <Heading children={`$ ${price}`} level={2} />
          <div className='icons'>
            <Link to='/detailview'>
              <QuickView onClickAction={handleSingleProjuct(id)} />
            </Link>

            <Heart onClickAction={handleAddToWishlist(product)} />
          </div>
        </div>
        <div className='rating-container'>
          {stars.map((star) => {
            return (
              <span>
                <Star
                  key={star}
                  className={rating.rate >= star ? 'star-fill' : 'star-emply'}
                />
              </span>
            )
          })}
          <BodyText children={`(${rating.count}+)`} />
        </div>

        {!isInCart ? (
          <button
            className='primary-button button'
            onClick={() => {
              dispatch(addToCart(product))
              dispatch(handleInCart(id))
            }}
          >
            add to cart
          </button>
        ) : (
          <button className='button disabled-button '>Already in Cart</button>
        )}
      </div>
    </div>
  )
}
