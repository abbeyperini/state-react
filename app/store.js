import { configureStore } from '@reduxjs/toolkit'
import shibaCounterReducer from "./shibaCounterSlice"

export default configureStore({
  reducer: {
    shibaCounter: shibaCounterReducer,
  }
})