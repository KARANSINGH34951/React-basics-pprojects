import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [age, setage] = useState(21)
  // const [username,setusername]=useState("karan")

  // const [state,setstate]=useState({age:25,name:"karan"})


  // function changeage(){
    // setage(age+1);
    // setstate({...state,name:"arjun"})
  // }
  // function changeusername(){
    // setusername("arjun");
    // setstate({...state,age:26})
  // }

  const [state,setstate]=useState({age:25,name:"karan"})
  function changesomething(e){
    setstate((oldstate)=>{
      return {...oldstate,name: e.target.value}
    })
  }
  // function changeevents(e){
  //   const newstateobject={...state};
  //   newstateobject.name = e.target.value
  //   setstate(newstateobject);
  // }
git
  return (
    <>
      <h1>user Details</h1>
      <h2>age : {state.age}</h2>
      <h3>username : {state.name}</h3> 
      <form action="">
        <input type="text" placeholder='enter data'  onChange={changesomething}  />
      </form>


      {/* <h1>user Details</h1>
      <h2>age : {state.age}</h2>
      <h3>username : {state.name}</h3> */}

      {/* <button onClick={changeage}>change age</button>
      <button onClick={changeusername}>change name</button> */}
    </>
  )
}

export default App
