import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewTierList } from '../../components';

export default function NewList() {
  // const latestTierList = useSelector( state => state.tierList );
  // const dispatch = useDispatch();
  return (
    <section>
      <h2>New Tierlist</h2>
      {/* Placing TierList Logic Placeholder for now */}
      <div>
        <NewTierList />
      </div>
    </section>
  )
}
