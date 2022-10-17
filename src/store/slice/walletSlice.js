import {
  createSlice,
  createAsyncThunk
 } from '@reduxjs/toolkit'

const initialState = {
  isConnected: false,
  currentUser: '',
  transactionsList: [],
  error: null
}

export const connect = createAsyncThunk(
  'WALLET/CONNECT',
  async () => {
    try {
     const { ethereum } = window;

     if (!ethereum) {
       return 'Try again later';
     }

     const accounts = await ethereum.request({
       method: "eth_requestAccounts",
     });
     return accounts
   } catch (error) {
     console.log(error);
   }
  }
)

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    disconnect: (state) => {
      state.isConnected = false;
      state.currentUser = "";
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(connect.fulfilled, (state, action) => {
      // Add user to the state array
      state.isConnected = true;
      state.currentUser = action.payload[0]
    })
  },
})

// Action creators are generated for each case reducer function
export const { disconnect } = walletSlice.actions

export const getisConnected = (state) => state.wallet.isConnected
export const getUser = (state) => state.wallet.currentUser

export default walletSlice.reducer
