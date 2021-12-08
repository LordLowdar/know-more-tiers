// Example on how to implement a Slice
import { createSlice } from '@reduxjs/toolkit';
import store from '../../app/store'

export const saverSlice = createSlice({
  name: 'saver',
  initialState: {
  },
  reducers: {
    submitTier: state => {
      console.log(state);
    }
  }
});

export const { submitTier } = saverSlice.actions;

export default saverSlice.reducer;
