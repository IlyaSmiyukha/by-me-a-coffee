import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isConected: false
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connect: (state) => {
      state.isConected = true
    },
    disconnect: (state) => {
      state.isConected = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { connect, disconnect } = walletSlice.actions

export const getIsConected = (state) => state.wallet.isConected

export default walletSlice.reducer
