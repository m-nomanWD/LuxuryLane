import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
const initialState = {
  productsShoped: [],
  grandeTotal: 0,
  total: 0,
  contactForm: { email: '', contact: '', isOpenContact: true },
  shippingForm: { shippingCharges: 0, isOpenShipping: false },
  paymentForm: {
    cardNumber: 0,
    CVV: 0,
    expiryDate: '',
    billingZip: 0,
    isOpenPayment: false,
  },
  tax: 0,
}
const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    handleShopedProducts: (state, action) => {
      const { cartItems, total } = action.payload
      state.productsShoped = cartItems
      state.total = total
    },
    handleFormIsOpen: (state, action) => {
      if (action.payload === 1) {
        state.paymentForm.isOpenPayment = false
        state.shippingForm.isOpenShipping = false
        state.contactForm.isOpenContact = true
      }
      if (action.payload === 2) {
        state.contactForm.isOpenContact = false
        state.shippingForm.isOpenShipping = false
        state.paymentForm.isOpenPayment = true
      }
      if (action.payload === 3) {
        state.contactForm.isOpenContact = false
        state.paymentForm.isOpenPayment = false
        state.shippingForm.isOpenShipping = true
      }
    },
    handleForm1Input: (state, action) => {
      const { email, contact } = action.payload
      state.contactForm.email = email
      state.contactForm.contact = contact
    },
    handleForm2Input: (state, action) => {
      state.shippingForm.shippingCharges = action.payload
    },
    handleForm3Input: (state, action) => {
      const { cardNumber, CVV, expiryDate, billingZip } = action.payload
      state.paymentForm.cardNumber = cardNumber
    },
  },
})
export default checkoutSlice.reducer
export const {
  handleFormIsOpen,
  handleShopedProducts,
  handleForm1Input,
  handleForm2Input,
  handleForm3Input,
} = checkoutSlice.actions
