import { createSlice } from '@reduxjs/toolkit'
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
  reducers: {},
})

export default cartSlice.reducer
