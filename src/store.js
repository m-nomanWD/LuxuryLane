import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice/cartSlice'
import wishlistSlice from './features/wishlist/wishlistSlice'
import requestSlice from './features/requestSlice/requestSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: requestSlice,
  },
})
export default store
