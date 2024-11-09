import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username = "chaiaurcode" header="Connect with me"/>
      <Card username = "Hitesh" header="Visit me"/>
    </>
  )
}

export default App
