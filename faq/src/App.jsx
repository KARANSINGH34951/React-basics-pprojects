import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Accoding=()=>{
  return (
    <div className='faq-item'>
      <div className="faq-item-header">
        <h3>why react?</h3>
      </div>

      <div className="faq-item-body">
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque non optio, id repellat nobis dolor incidunt perspiciatis, sed necessitatibus distinctio eius adipisci rerum amet, eum obcaecati autem!</h5>
      </div>
    </div>
  )
}

const Faq=()=>{
  return (
    <div className='faq-acc'>
          <Accoding />
          <Accoding />
          <Accoding />
          <Accoding />
    </div>
  )
    
}

function App() {
  

  return (
    <>
     <div>
        <Faq/>
     </div>
    </>
  )
}

export default App
