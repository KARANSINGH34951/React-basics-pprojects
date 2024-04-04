import { useState } from 'react'
import './App.css'
import Passwordgenerator from './Passwordgenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Passwordgenerator />
    </>
  )
}

export default App
