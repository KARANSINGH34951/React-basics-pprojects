import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='quiz-app'>
      <div className="score-section">
        <h2>your score</h2>
      </div>
     </div>
    </>
  )
}

export default App
