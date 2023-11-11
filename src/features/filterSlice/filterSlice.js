import { createSlice } from '@reduxjs/toolkit'
import { act } from '@testing-library/react'

const initialState = {
  allProducts: [],
  filterProducts: [],
  filterContitions: {
    price: 10,
    star: 1,
    category: 'all',
  },
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleFilter: (state, action) => {
      const { price, stars, category } = action.payload

      if (category === 'all') {
        const newList = state.allProducts.filter(
          (product) =>
            product.price >= parseInt(price) && product.rating.rate >= stars
        )

        state.filterProducts = newList
      } else {
        const newList = state.allProducts.filter(
          (product) =>
            product.price >= parseInt(price) &&
            product.rating.rate >= stars &&
            product.category === category
        )
        console.log(newList)
        state.filterProducts = newList
      }
    },
    handleSetProduct: (state, action) => {
      state.filterProducts = action.payload
      state.allProducts = action.payload
    },
  },
})
export default filterSlice.reducer
export const { handleFilter, handleSetProduct } = filterSlice.actions
