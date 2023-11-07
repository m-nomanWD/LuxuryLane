import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  wishlistItems: [],
  amountWishlist: 0,
}
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    handleAddToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload)
      state.amountWishlist += 1
    },
    handleRemoveToWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => action.payload !== item.id
      )
      state.amountWishlist -= 1
    },
  },
})

export default wishlistSlice.reducer
export const { handleAddToWishlist, handleRemoveToWishlist } =
  wishlistSlice.actions
