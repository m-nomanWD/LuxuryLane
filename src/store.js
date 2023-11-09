import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice/cartSlice'
import wishlistSlice from './features/wishlist/wishlistSlice'
import requestSlice from './features/requestSlice/requestSlice'
import checkoutSlice from './features/checkout/checkout'
import modalSlice from './features/modal/modalSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: requestSlice,
    checkout: checkoutSlice,
    modal: modalSlice,
  },
})
export default store
