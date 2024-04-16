import React, { useState } from 'react'

// import App from '../App'
// import addcontact from '../App'
const Addcontacts = ({addcontact}) => {
  const [contactdata,setconactsdata]=useState({name:"",email:""})
    
  const handlechange=(e)=>{
    if(e.target.name==="name"){
      setconactsdata({...contactdata,name:e.target.value})
    }
    else{
      setconactsdata({...contactdata,email:e.target.value})
    }
  }

  const handleadd=()=>{
    if(contactdata.name===""){
      alert("pls fill all the details")
      return
    }
    console.log(contactdata);
    addcontact(contactdata)
    setconactsdata({name:"",email:""})
  }

  return (
    <>
      <div className="addcontactss">
        <h6>add contact</h6>
      </div>

      <form>
        <label>Name:</label><br/>
        <input type="text" placeholder='enter name' name='name' value={contactdata.name} onChange={handlechange}/><br/>
        <label>Email:</label><br/>
        <input type="text" placeholder='enter Email' name='Email' value={contactdata.email} onChange={handlechange}/>
      </form>

      <button className='btn' onClick={handleadd}>Add contacts</button>

    </>
  )
}

export default Addcontacts
