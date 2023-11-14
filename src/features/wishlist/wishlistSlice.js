import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const initialState = {
  wishlistItems: [],
  amountWishlist: 0,
}
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    handleAddToWishlist: (state, action) => {
      let newWishlist = []
      newWishlist = state.wishlistItems.filter(
        (item) => item.id === action.payload.id
      )
      if (newWishlist.length !== 0) {
        toast.error('item is already in the wishlist')
      } else {
        state.wishlistItems.push(action.payload)
        state.amountWishlist += 1
        toast.success('item is added in wishlist')
      }
    },
    handleRemoveToWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => action.payload !== item.id
      )
      state.amountWishlist -= 1
    },
    handleClearWishlist: (state) => {
      state.amountWishlist = 0
      state.wishlistItems = []
      toast.error('list is cleared')
    },
  },
})

export default wishlistSlice.reducer
export const {
  handleAddToWishlist,
  handleRemoveToWishlist,
  handleClearWishlist,
} = wishlistSlice.actions
