import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15;

  // const addValue = () => {
  //   counter =  counter+1;
  //   console.log(counter);
  // }

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    setCounter(counter-1)
  }
 
  return (
    <>
      <h1>React cource with hitesh {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>{" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
