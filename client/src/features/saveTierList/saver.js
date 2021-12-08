// Counter Redux implmenation example
import React from 'react'

export default function Saver(props) {

  return (
    <div>
        <button
          aria-label="Submit tier list"
          onClick={() => console.log(props.data)}
        >
          Submit
        </button>
    </div>
  )
}
