import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
// import Image  from './Imagedemo'
import img1 from './images/img3.jpg'
import img3 from './images/img3.jpg'
import img2 from './images/img2.jpg'
import { PropTypes } from 'prop-types'


const userdata =[
  {
    name:"karan singh",
    place:"erode",
    job:"full stack",
    skills:["CSS","JAVA SCRIPT","REACT","PYTHON","JAVA","C++"],
    online: true,
    profile:img3
  },
  {
    name:"rohan singh",
    place:"Salem",
    job:"full stack",
    skills:["CSS","JAVA SCRIPT","REACT","PYTHON","JAVA","C++"],
    online:false ,
    profile:img2

   }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {userdata.map((data,index) =>{
     return <Card key={index} name={data.name}  place={data.place} job={data.job} skills={data.skills} online={data.online} profile={data.profile}/>
    })}



     {/* <Card username="karan singh" place="Erode , Tamil Nadu" job="Full-stack" skills={["CSS","JAVA SCRIPT","REACT","PYTHON","JAVA","C++"]} online={false} profile={img3}/> */}
    </>
  )
}

// Card.propTypes={
//   name:propTypes.string.isRequired,
//   place:propTypes.string.isRequired,
//   job:propTypes.string.isRequired,
//   skills:propTypes.arrayof(propTypes.string).isRequired,
//   online:propTypes.bool.isRequired,
//   profile:propTypes.string.isRequired
// }
export default App
