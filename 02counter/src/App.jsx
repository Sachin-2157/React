import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState((Math.random()) + 10)
  // let Counter = 12


  const addValue = () =>{
    setCounter(counter+1)
    // console.log("value added",counter);
    
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value {counter} </h2>
        <button
        onClick={addValue}>Add Value </button>
        <br />
        <button
        onClick={removeValue}  disabled={counter <= 0}>remove Value</button>
     
    </>
  )
}

export default App
