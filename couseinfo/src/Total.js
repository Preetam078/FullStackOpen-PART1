import React from 'react'

const Total = ({content}) => {
    let total = 0;
    content.forEach(element => {
        total += element.exercises
    });
  return (
    <div>
        <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total