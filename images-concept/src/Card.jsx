import React from 'react'
import img3 from './images/img3.jpg'

const Card = (props) => {
  function changecolor(){
    
  } 
  return (
    
    <>
      <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>Online</span>
        <img className='images' src={props.profile} height='200px' width='200px'></img>

        <h3>{props.name}</h3>
        <h4>{props.place}</h4>
        <h4>{props.job}</h4>
        <div className='buttons'>
          <button onClick={changecolor}>Message</button> 
          <button>Following</button> 
        </div>

        <div className='skills'> 
          <h4>SKILLS</h4>
          
            {/* {props.skills.map((skill,index)=>{
              <li key={index}> {skill} </li>
            })}
            <ul></ul> */}
            <ul>
              {props.skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
           
          
        </div>

      </div>
    </>
  )
}
          //  <li>HTML</li>
          //   <li>CSS</li>
          //   <li>JAVA SCRIPT</li>
          //   <li>REACT</li>
          //   <li>PYTHON</li>
          //   <li>JAVA</li>
          //   <li>C++</li> 

export default Card
