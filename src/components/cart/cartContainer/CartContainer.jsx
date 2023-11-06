import React from 'react'
import CartItem from '../cartItem/CartItem'
import './index.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Heading } from '../../../components/index'
import { ChevronDown, HomeIcone } from '../../../constants/icons'
import { handleShopedProducts } from '../../../features/checkout/checkout'
export default function CartContainer() {
  const { cartItems, total } = useSelector((store) => store.cart)
  const { productsShoped } = useSelector((store) => store.checkout)
  const dispatch = useDispatch()

  if (cartItems.length === 0) {
    return (
      <div className='empty-cart'>
        <Heading level={3} children='Is Currently Empty ' />
        <Link to='/'>
          <HomeIcone className='home' />
        </Link>
      </div>
    )
  }
  return (
    <section className='cart-container'>
      {cartItems.map((item) => {
        console.log(item)
        return <CartItem key={item.id} item={item} />
      })}
      <footer>
        <div className='div'>
          <div className='total-text'>
            <h4>TOTAL</h4>
          </div>
          <div className='total-amount'>
            <h3>{`$ ${total}`}</h3>
          </div>
        </div>
        <Link style={{ width: '180px' }} to={'/checkout'}>
          <button
            className='primary-button button btn-custom'
            onClick={() => dispatch(handleShopedProducts({ total, cartItems }))}
          >
            Process Furture
          </button>
        </Link>
      </footer>
    </section>
  )
}
