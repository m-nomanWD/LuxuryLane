import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

import toast from 'react-hot-toast'
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
  isError: false,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const checkItem = state.cartItems.filter(
        (item) => item.id === action.payload.id
      )
      if (checkItem.length !== 0) {
        toast.error('item is already in the cart')
      } else {
        const newCartItem = { ...action.payload, isInCart: true }
        state.cartItems.push(newCartItem)
        state.amount += 1
        state.total += action.payload.price
        toast.success('item add to cart')
      }
    },
    increase: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      state.amount += 1
      selectedItem.amount += 1
      state.total += action.payload.price
      toast.success(`item quantiy add${selectedItem.amount}`)
    },
    decrease: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      state.amount -= 1
      selectedItem.amount -= 1
      state.total -= action.payload.price
      toast.error(`item quantity remain ${selectedItem.amount}`)
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => action.payload.id !== item.id
      )

      state.total -= action.payload.price * action.payload.amount
      const selectedItem = action.payload
      state.amount -= action.payload.amount
      toast.error('item removed form cart')
    },
    clearCart: (state, action) => {
      state.cartItems = []
      state.amount = 0
      state.total = 0
    },
  },
})
export default cartSlice.reducer
export const { addToCart, increase, decrease, removeItem, clearCart } =
  cartSlice.actions
