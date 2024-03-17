// import img1 from './images/img1.jpg'
import img1 from './/images/img1.jpg'
import img2 from './/images/img2.jpg'
import img3 from './/images/img3.jpg'
import React, { useState } from 'react'


const Qrcode = () => {
  const [img,setimg]=useState(""); 
  const [loading,setloading]=useState(false)
  const [qrdata,setqrdata]=useState("")
  const [qrsize,setqrsize]=useState("150")

  async function generateqr(){
    setloading(true)
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${qrsize}x${qrsize}`;
      setimg(url);
    }
    catch(error){
        console.error("error generated ",error)
    }
    finally{
        setloading(false)
    }
  }
    
  function downloadqr(){
    fetch(img)
    .then((reponse)=>reponse.blob())
    .then((blob)=>{
      const link=document.createElement("a")
      link.href=URL.createObjectURL(blob)
      link.download="qrcode.png"
      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link)
    })
  }
  
  return (

    <div className="app-container">
 
        <h1>QR code generator</h1>
        { loading && <p>please wait...</p>}
          
          { img && <img src={img} className='qrimage' alt="img" />}
      <div>
        <label htmlFor='datainput ' className='input-label'>
          Data for QR code
        </label>
        <input type="text" id='datainput' value={qrdata} onChange={(e)=>setqrdata(e.target.value)} placeholder='enter data' />

        <label htmlFor='inputsize' className='input-label'>
          Image size (eg.150):
        </label>

        <input type="text" id='inputsize' value={qrsize} onChange={(e)=>setqrsize(e.target.value)} placeholder='enter size'/>

        <button className='generate-btn' disabled={loading} onClick={generateqr}>Generate QR Code</button>
        <button className='download-btn' onClick={downloadqr}>Download QR Code</button>
      </div>

      <p className='footer1'>Made by me</p>
      
    </div>
    
  )
}

export default Qrcode
