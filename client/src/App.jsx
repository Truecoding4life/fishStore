import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarCompt from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavbarCompt />
      <div>
        
      </div>
      
    </>
  )
}

export default App
