import React, { useLayoutEffect, useState } from 'react'

const Passwordgenerator = () => {

  const [length,setlength]=useState(8)
  const [upper,setupper]=useState(true)
  const [lower,setlower]=useState(true)
  const [number,setnumber]=useState(true)
  const [symbol,setsymbol]=useState(true)
  const [password,setpassword]=useState("")

  function generatepassword(){
    let charset = "";
    if(upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lower) charset += "abcdefghijklmnopqrstuvwxyz"
    if(number) charset += "0123456789"
    if(symbol) charset += "!@#$%^&*()"

    console.log(charset);
    let generatepassword1 = ""
    for(let i=0;i<length;i++){
       const randindex = Math.floor(Math.random()*charset.length)
       generatepassword1 += charset[randindex]
    }
    setpassword(generatepassword1)
  }

  const copytoclipboard=()=>{
    navigator.clipboard.writeText(password)
  }

  return (
    <div className='password-generator'>
      <h2>strong pw generator</h2>
      <div className='input-group'>
        <label htmlFor='num'>Password length</label>
        <input type="number" id="num" value={length} 
        onChange={(e)=>setlength(parseInt(e.target.value))}/>
      </div>

      <div className='checkbox'>
        <input type='checkbox' id='upper' checked={upper} 
        onChange={(e)=>setupper(parseInt(e.target.checked))}></input>
        <label htmlFor='upper'>Include Uppercase</label>
      </div>
      <div className='checkbox'>
        <input type='checkbox' id='lower' checked={lower} 
        onChange={(e)=>setlower(parseInt(e.target.checked))}></input>
        <label htmlFor='lower'>Include lowercase</label>
      </div>
      <div className='checkbox'>
        <input type='checkbox' id='number' checked={number} 
        onChange={(e)=>setnumber(parseInt(e.target.checked))}></input>
        <label htmlFor='number'>Include number</label>
      </div>
      <div className='checkbox'>
        <input type='checkbox' id='symbol' checked={symbol}
         onChange={(e)=>setsymbol(parseInt(e.target.checked))}></input>
        <label htmlFor='symbol'>Include symbol</label>
      </div>

      <button className='generate-btn' onClick={generatepassword}>Generate Password</button>

      <div className='generated-password'>
        <input type="text" readOnly value={password} />
        <button onClick={copytoclipboard}>copy</button>
      </div>
    </div>
  )
}

export default Passwordgenerator
