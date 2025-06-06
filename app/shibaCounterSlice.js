import { createSlice } from '@reduxjs/toolkit';

export const shibaCounterSlice = createSlice({
  name: 'counter',
  initialState: {
    shibaCount: 0
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.shibaCount += action.payload
    }
  }
})

export const { incrementByAmount } = shibaCounterSlice.actions;

export default shibaCounterSlice.reducer;