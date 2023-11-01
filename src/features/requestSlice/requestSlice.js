import { createSlice } from '@reduxjs/toolkit'
import authFetch from '../../axios/customAxios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getProducts = createAsyncThunk(
  'request/getProducts',
  async (modifier, thunkAPI) => {
    try {
      const resp = await authFetch(modifier)
      const resp2 = await authFetch('products/categories')

      const data = { products: resp.data, catagroies: resp2.data }
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  projucts: [],
  catagroies: [],
  isLoading: false,
  isError: false,
  urlModifier: '/products',
}
const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.projucts = action.payload.products
      state.catagroies = action.payload.catagroies
      state.isLoading = false
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
      state.isError = false
    },
  },
})
export default requestSlice.reducer
