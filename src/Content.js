import React from 'react'

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