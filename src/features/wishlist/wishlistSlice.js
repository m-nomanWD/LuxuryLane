import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  wishlistItem: [],
  amount: 0,
}
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
})

export default wishlistSlice.reducer
