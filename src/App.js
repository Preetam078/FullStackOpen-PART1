import Content from "./Content";
import Header from "./Header";
import "./styles.css";

const App = () => {
  const course = 'Half Stack application development'

  //!this is not recommended to use
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14


  //TODO We already did this exercise in 1.1 by declaring the below array of objects.
  //TODO wrapped all the info. in an array of object to pass the hole as an object.
  const content = [
    {part:'Fundamentals of React',exercises:10},
    {part:'Using props to pass data',exercises:7},
    {part:'State of a component',exercises:14}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App
