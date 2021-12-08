import { configureStore } from '@reduxjs/toolkit';

// Example import implementation of a reducerSlice
import counterReducer from '../features/counter/counterSlice';
import saverReducer from '../features/saveTierList/saverSlice'

export default configureStore({
  reducer: {
    saver: saverReducer,
    counter: counterReducer,
  }
});
