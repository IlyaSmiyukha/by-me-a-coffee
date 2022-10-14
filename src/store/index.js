import { configureStore } from '@reduxjs/toolkit';

import walletReducer from './slice/walletSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  },
})
