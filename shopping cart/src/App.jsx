import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
       <Header />
       <div className="container">
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>  
       </div>
    </BrowserRouter>
    </>
  )
}

export default App
