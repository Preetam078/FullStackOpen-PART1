import React from 'react'

const Rating = ({good, neutral, bad}) => {
  return (
    <div>
        <h3>Good {good}</h3>
        <h3>Neutral {neutral}</h3>
        <h3>Bad {bad}</h3>
    </div>
  )
}

export default Rating