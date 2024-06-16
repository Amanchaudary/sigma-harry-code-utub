import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" />
          <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your todos</h2>
        <div className="Todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6'>Edit</button>
              <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6'>Delete</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
