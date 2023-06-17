import React from 'react'

//TODO: passing header as destructuring way
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

export default Header