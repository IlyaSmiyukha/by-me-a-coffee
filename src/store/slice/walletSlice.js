import {
  createSlice,
  createAsyncThunk
 } from '@reduxjs/toolkit'

 import { ethers } from 'ethers'

import { contractABI } from 'utils/BuyMeACryptoCoffee'
const contractAddress = '0xfBa842E282A9131C7cdd351a1aAaD530c8e4EcFf'

const initialState = {
  isConnected: false,
  currentUser: '',
  list: [],
  error: null,
  isListLoading: false
}

export const connect = createAsyncThunk(
  'WALLET/CONNECT',
  async () => {
    try {
     const { ethereum } = window;
     const provider = new ethers.providers.Web3Provider(ethereum);
     const { chainId } = await provider.getNetwork();

     if (chainId !== 5) {
      await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{
              chainId: '0x5',
          }]
        });
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

export const buyCoffee = createAsyncThunk(
  'WALLET/BUY_COFFEE',
  async ({ price, message, name }) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI.abi,
          signer
        );

        const coffeeTxn = await contract.buyCoffee(
          message ? message : "No message",
          name ? name : "Anonymous",
          ethers.utils.parseEther(price.toString()),
          {
            gasLimit: 300000,
          }
        );
      } else {
        return 'Try again later';
      }
    } catch (error) {
      console.log(error);
    }
  }
)

export const fetchCoffee = createAsyncThunk(
  'WALLET/FETCH_COFEE',
  async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI.abi,
          signer
        );

        const list = await contract.getAllCoffee();

        return list.map((coffee) => ({
            address: coffee.giver,
            timestamp: Number(coffee.timestamp),
            message: coffee.message,
            name: coffee.name,
        }));
      } else {
        console.log("Ethereum object doesn't exist!");
      }
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
    .addCase(fetchCoffee.pending, (state, action) => {
      // Add user to the state array
      state.isListLoading = true
    })
    .addCase(fetchCoffee.fulfilled, (state, action) => {
      // Add user to the state array
      state.isListLoading = false
      state.list = action.payload || []
    })
  },
})

// Action creators are generated for each case reducer function
export const { disconnect } = walletSlice.actions

export const getisConnected = (state) => state.wallet.isConnected
export const getUser = (state) => state.wallet.currentUser
export const getList = (state) => state.wallet.list
export const getListIsLoading = (state) => state.wallet.isListLoading

export default walletSlice.reducer
