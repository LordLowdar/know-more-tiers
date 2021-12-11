import { configureStore } from '@reduxjs/toolkit';

// Example import implementation of a reducerSlice
import counterReducer from '../features/counter/counterSlice';
import saverReducer from '../features/saveTierList/saverSlice';
import interestsPoolReducer from '../features/interestPool/interestsPoolSlice';

export default configureStore({
  reducer: {
    saver: saverReducer,
    counter: counterReducer,
    interestsPool: interestsPoolReducer,
  }
});
