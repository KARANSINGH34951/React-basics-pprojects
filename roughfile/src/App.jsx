import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setname]=useState("karan")

  function changehandler(e){
    console.log(e.target.value);
    setname(e.target.value)
    
  }

  return (
    <>
     <div >
      
      <div>
      <h1 className='text-white'>{name}</h1>
        <label htmlFor='name'>name:</label>
        <input className='bg-white text-black' id='name' type="text" onChange={changehandler}/>
      </div>
      <div>
        <label htmlFor='age'>Age:</label>
        <input className='bg-white text-black' type="number" id='age' />
      </div>
     </div>
    </>
  )
}

export default App
