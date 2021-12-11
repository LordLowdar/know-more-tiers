// Counter Redux implmenation example
import React from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TIERLIST } from '../../utils/mutation';

export default function Saver(props) {

  const [addTierlist, { error }] = useMutation(ADD_TIERLIST);

  const addNewList = async (tierData) => {

    tierData.map(async (tier, index) => {

      const tierId = tier.id
      const tierArray = tier.subItems

      try {
        await addTierlist({
          variables: { rank: tierId, interests: tierArray },
        });
      } catch (err) {
        console.error(err);
      }

    })
  };

  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <button
        className='btn'
        style={{width: '100%'}}
        aria-label="Submit tier list"
        onClick={() => addNewList(props.data)}
      >
        Submit
      </button>
    </div>
  )
}
