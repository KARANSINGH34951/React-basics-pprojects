import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [advice, setadvice] = useState("please click the button to get the advice")

async function advices(){
  const res = await fetch(`https://api.adviceslip.com/advice`)
  const data=await res.json()
  setadvice(data.slip.advice)
  console.log(res)
}

useEffect(()=>{
  advices()
},[])

  return (
    <>
        <h1>advice-shop</h1>
        <h3>{advice}</h3>
        <button onClick={advices}>Get advice : </button>  
    </>
  )
}

export default App
