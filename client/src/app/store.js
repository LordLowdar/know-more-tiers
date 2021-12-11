import { configureStore } from '@reduxjs/toolkit';

// Example import implementation of a reducerSlice
import counterReducer from '../features/counter/counterSlice';
import saverReducer from '../features/saveTierList/saverSlice';
import interestsReducer from '../features/interestsPool/interestsPoolSlice';

export default configureStore({
  reducer: {
    saver: saverReducer,
    counter: counterReducer,
    interests: interestPoolReducer,
  }
});
