import { configureStore } from '@reduxjs/toolkit';

// Example import implementation of a reducerSlice
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
