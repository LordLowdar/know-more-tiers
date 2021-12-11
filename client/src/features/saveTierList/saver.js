// Counter Redux implmenation example
import React from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TIERLIST } from '../../utils/mutation';

export default function Saver(props) {

  const [addTierlist, { error }] = useMutation(ADD_TIERLIST);
  
  const addNewList = async (tierData) => {

    const username = 'googleprops'
    const tierId = tierData[0].id
    const tierArray = tierData[0].subItems

    try {
      await addTierlist({
        variables: {tierId, tierArray},
      });
    } catch (err) {
      console.error(err);
      console.log(tierData[0].id)
      console.log(typeof tierData[0].id)
      console.log(tierData[0].subItems)
    }
  };

  return (
    <div>
        <button
          aria-label="Submit tier list"
          onClick={() => addNewList(props.data)}
        >
          Submit
        </button>
    </div>
  )
}
