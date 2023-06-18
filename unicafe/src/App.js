import { useState } from 'react'
import "./App.css"
import FeedBack from './FeedBack'
import Rating from './Rating'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  console.log(good)
  console.log(neutral)
  console.log(bad)

  const clickGood = () => {
    setGood(good+1)
  }
  const clickNeutral = () => {
    setNeutral(neutral+1)

  }
  const clickBad = () => {
    setBad(bad+1)
  }

  return (
    <div className='App'>
      <h1>Give Feedback</h1>
      <FeedBack clickGood={clickGood} clickNeutral={clickNeutral} clickBad={clickBad}/>
      <h1>Statistics</h1>
      <Rating good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App