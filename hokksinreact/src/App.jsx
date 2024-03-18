import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setuser] = useState({
    name:"karan singh",
    age:25,
    gender:"male",
    ismarried:true
  })

  function changehandler(e){
    const name=e.target.type

  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Married satus</td>
            <td>{user.ismarried ? "married":"Not married"}</td>
          </tr>
        </tbody>
      </table>
     
    <form>

      <input type='text' placeholder='full name' value={user.name} name='name' onChange={changehandler}/>

      <input type='text' name='age' placeholder='age'  value={user.age} onChange={changehandler}/>

      <div className="gender">

        <label htmlFor='male'>
        <input type='radio' name='gender' id='male' placeholder='age' checked={user.gender=="male"} value={user.gender}  onChange={changehandler}/> male
        </label>

        <label htmlFor='female'>
        <input type='radio' name='gender' id='female' placeholder='age' checked={user.gender=="female"} value={user.gender} onChange={changehandler}/> Female
        </label>

      </div>

      <label htmlFor='ismarried'>
        <input type='checkbox' name='ismarried' onChange={changehandler} checked={user.ismarried} id='ismarried'/> ismarried
      </label>
    </form>

    </>
  )
}

export default App
