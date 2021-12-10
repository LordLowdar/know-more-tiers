// Counter Redux implmenation example
import React from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TIERLIST } from '../../utils/mutation';

export default function Saver(props) {

  const [addTierlist, { error }] = useMutation(ADD_TIERLIST);

  const tierData = props.data
  
  
  const addNewList = async (tierData) => {

    try {
      await addTierlist({
        // variables: {input: newTierList},
      });
    } catch (err) {
      console.error(err);
      // console.log(newTierList)
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
