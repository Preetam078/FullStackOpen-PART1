import React from 'react'

const Button = ({clickHandle}) => {
  return (
    <div>
        <button onClick={clickHandle}>next anecdote</button>
    </div>
  )
}

export default Button