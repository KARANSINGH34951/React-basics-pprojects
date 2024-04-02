import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, settime] = useState(0)
 
  // useEffect(()=>{
  //   console.log("i m karan singh");
  // })

  // useEffect(()=>{
  //      console.log("i m karan singh");
  //    },[])

  // useEffect(()=>{
  //      console.log("i m karan singh");
  //    },[count])

  useEffect(()=>{
    console.log("i m karan singh ");
    return ()=> console.log("un-mount");
  },[]);

  return (
    <>
        <div>
          <h3>count :{count} </h3>
          <h3>count :{time} </h3>
          <button onClick={()=>setCount((value)=>value-1)}>- minus</button>
          <button onClick={()=>setCount((value)=>value+1)}>+ plus</button>
          <button onClick={()=>settime((value)=>value+1)}>T plus</button>
        </div>

    </>
  )
}
export default App
 
