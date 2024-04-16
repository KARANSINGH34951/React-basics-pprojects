import React from 'react'
import  DeleteIcon from '@mui/icons-material/Delete'

const Contactslist = (props) => {

  const {contact,removecontact}=props;
  const contactlists=contact.map((val)=>{
    // console.log(contactlists);
    return (
      <div>
        <div>{val.data.name}</div>
        <div>{val.data.email}</div> 
        <span onClick={()=>removecontact(val.id)}><DeleteIcon/></span> 
      </div>
    )
  })
  console.log(contact,"from Contactslist.jx");
  return (
    <>
      <div>Contact List</div>
      <div>{contactlists}</div>
    </>
  )
}

export default Contactslist
