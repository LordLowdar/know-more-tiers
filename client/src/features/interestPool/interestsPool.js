import React from 'react';
import { useSelector, useDispatch } from 'react=redux';
import { addInterest, populateInterestsPool } from './interestsPoolSlice';

export function InterestsPool() {
  const interestPool = useSelector(state => state.interests);
  const dispatch = useDispatch();
}

return (
  <div>

  </div>
)
