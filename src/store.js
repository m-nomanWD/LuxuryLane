import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice/cartSlice'
import wishlistSlice from './features/wishlist/wishlistSlice'
import requestSlice from './features/requestSlice/requestSlice'
import checkoutSlice from './features/checkout/checkout'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: requestSlice,
    checkout: checkoutSlice,
  },
})
export default store
