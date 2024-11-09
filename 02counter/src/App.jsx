import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) //useState se do chize milti hai isiliye do argument lena padega. const[variable, function (responsible for updating the variable)]

  // let counter = 5;
  const addValue = () => {
    if (counter <= 19){
    // counter = counter + 1; // counter is updated but UI is not updated. Here React comes in
    setCounter((prevCounter)=> prevCounter + 1) // Use of React
    setCounter((prevCounter)=> prevCounter + 1) // Use of React
    setCounter((prevCounter)=> prevCounter + 1) // Use of React
    setCounter((prevCounter)=> prevCounter + 1) // Use of React
    }
  }
  const removeValue = () => {
    if (counter >= 1){
    counter = counter - 1;
    setCounter(counter)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
