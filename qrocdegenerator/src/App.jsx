import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './QRcode.css'
import Qrcode from './Qrcode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Qrcode/>
    </>
  )
}

export default App
