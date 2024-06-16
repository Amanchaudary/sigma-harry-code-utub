
import './App.css'
import Navbar from './componetns/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import home from './componetns/home'
import Login from './componetns/Login'
import about from './componetns/about'
import contact from './componetns/contact'
import { Link } from 'react-router-dom'




function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:"<home/>"
  },
  {
    path:"/login",
    element:"<login/>"
  },
  {
    path:"/about",
    element:"<about/>"
  },
  {
    path:"/contact",
    element:"<contact/>"
  }

])  

  return (
    <>
    <div>hi ho hi hoo hoo </div>
     <Navbar/>
     <RouterProvider router={router} />
    </>
  )
}

export default App
