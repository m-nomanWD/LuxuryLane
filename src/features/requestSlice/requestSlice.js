import { createSlice } from '@reduxjs/toolkit'
import authFetch from '../../axios/customAxios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getProducts = createAsyncThunk(
  'request/getProducts',
  async (modifier, thunkAPI) => {
    try {
      const resp = await authFetch('/products')
      const resp2 = await authFetch('products/categories')

      const data = { products: resp.data, catagroies: resp2.data }

      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  projucts: [],
  catagroies: [],
  productsChunk: [],
  singleProduct: {},
  isLoading: false,
  isError: false,
  urlModifier: '/products',
}
const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    handleModifier: (state, action) => {
      state.urlModifier = action.payload
    },
    handleProductsChunk: (state, action) => {
      const newProducts = state.projucts.filter(
        (product) => product.category === action.payload
      )
      state.productsChunk = newProducts
    },

    handleInCart: (state, action) => {
      state.projucts.map((product) => {
        if (product.id === action.payload) {
          product.isInCart = true
        }
      })
    },
    handleSingleProjuct: (state, action) => {
      const newItem = state.projucts.find((item) => item.id === action.payload)
      state.singleProduct = newItem
    },
    handleSingleProductInCart: (state, action) => {
      state.singleProduct.isInCart = true
      const newList = state.projucts.map((product) => {
        if (product.id === action.payload) {
          product.isInCart = true
          return product
        } else return product
      })

      state.projucts = newList
    },
    handleInCartRemove: (state, action) => {
      const updatedList = state.projucts.map((product) => {
        if (product.id === action.payload) {
          product.isInCart = false
          console.log(product)
          return product
        } else {
          console.log(product)
          return product
        }
      })
      console.log(updatedList)
      state.projucts = updatedList
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      const newProductList = action.payload.products.map((product) => {
        const newItem = { ...product, isInCart: false, amount: 1 }
        return newItem
      })
      state.projucts = newProductList
      state.catagroies = action.payload.catagroies

      state.isLoading = false
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
      state.isError = true
      console.log(state.isError, state.isLoading)
    },
  },
})
export default requestSlice.reducer
export const {
  handleModifier,
  handleProductsChunk,
  handleSingleProjuct,
  handleInCart,
  handleSingleProductInCart,
  handleInCartRemove,
} = requestSlice.actions
