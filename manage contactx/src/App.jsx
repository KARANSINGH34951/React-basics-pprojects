import { useEffect, useState } from 'react'


import Header from './components/Header'
import Addcontacts from './components/Addcontacts'
import Contactslist from './components/Contactslist'
import uuid4 from 'uuid4';

function App() {
  const localstoragekey="contact"
  
  const [contact,setcontact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localstoragekey))
    
  },[])
  
  useEffect(()=>{
    localStorage.setItem(localstoragekey,JSON.stringify(contact))
  },[contact])

  const addcontact=(data)=>{
   setcontact([...contact,{id:uuid4(),data} ])
  }

  const removecontact=(id)=>{
      const updatedlist=contact.filter((val)=>{
        return val.id !== id;

      })
      setcontact(updatedlist)
  }

  return (
    <div>

       <Header />
       <Addcontacts addcontact={addcontact} />
       <Contactslist contact={contact} removecontact={removecontact}/>
    
    </div>
  )
}

export default App
