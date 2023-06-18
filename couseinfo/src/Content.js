import React from 'react'

//! we already did the exercise 2 in 1 by adding map function.
//TODO got all the info. as props in the component.
const Content = ({content}) => {
  return (
    <div>
      {
        //TODO used map function to traverse the data with component 
        content.map((value)=>(
          <p key={value.part}>{value.part} {value.exercises}</p>
        ))
      }
    </div>
  )
}

export default Content;