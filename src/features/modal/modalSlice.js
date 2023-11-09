import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isModalOpen: false,
  orderDetail: {
    create_time: 'sd;jkf',
    id: 'dfg',
    payer: {},
    status: '',
    purchase_units: [],
  },
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleModalOpen: (state, action) => {
      const { create_time, id, payer, status, purchase_units } = action.payload

      state.orderDetail.create_time = create_time
      state.orderDetail.id = id
      state.orderDetail.payer = payer
      state.orderDetail.status = status

      state.orderDetail.purchase_units = purchase_units[0]
      state.isModalOpen = true
    },
    handleModalClose: (state, action) => {
      state.isModalOpen = false
    },
  },
})
export default modalSlice.reducer
export const { handleModalOpen, handleModalClose } = modalSlice.actions
