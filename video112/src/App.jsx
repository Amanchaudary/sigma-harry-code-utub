import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const handleclick= ()=>{
  alert("hey i am click")
 }
 const handlemouseover= ()=>{
  alert("i am a mouse over")
 }

  return (
    <>
    <div className="button"></div>
    <button onClick={handleclick}>click me</button>

    <div className="red" onMouseOver={handlemouseover}>
      I am a red
    </div>
    </>
  )
}

export default App
