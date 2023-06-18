import React from 'react'

//TODO: these all are the functions as objects in the props
const FeedBack = ({clickGood, clickNeutral, clickBad}) => {
  return (
    <div>
        <button onClick={clickGood}>Good</button>
        <button onClick={clickNeutral}>Neutral</button>
        <button onClick={clickBad}>Bad</button>
    </div>
  )
}

export default FeedBack