import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';

const interestsPoolAdapter = createEntityAdapter();

const initialState = interestsPoolAdapter.getInitialState({
  status: 'idle'
});

export const interestsPoolSlice = createSlice({
  name: 'interestsPool',
  initialState,
  reducers: {
    addInterest: interestsPoolAdapter.addOne,
    removeInterest: interestsPoolAdapter.removeOne,
    populateInterestsPool: ( state, action ) => {
      return state;
    }
  }
});

export const { addInterest, populateInterestsPool } = interestsPoolSlice.actions;

export default interestsPoolSlice.reducer;
