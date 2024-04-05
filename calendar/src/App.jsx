import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrowRight,ArrowLeft } from 'react-bootstrap-icons';

const dayofweek=["sun","mon","tue","wed","thu","fri","sat"];

const month = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];


function App() {
  const [selecteddate,setselecteddate] = useState(new Date());

  const daysinmonth = ()=>{
    const daysarray=[];
    const firstday=new Date(selecteddate.getFullYear(),selecteddate.getMonth(),1);
    const lastday=new Date(selecteddate.getFullYear(),selecteddate.getMonth()+1,0);

    console.log(firstday);
    console.log(lastday);


    return daysarray;
  }

  return (
    <>
     <div className='calendar'>
      <div className="header">
        <button><img src={ArrowRight} alt="" />right</button>
        <select value={selecteddate.getMonth()}>
          {month.map((month,index)=><option key={index} value={index}>{month}</option>)}
        </select>
        <select value={selecteddate.getFullYear}>
          {Array(20).fill(selecteddate.fullY).map((_,index)=><option key={index} value={selecteddate.getFullYear()-5+index}>{selecteddate.getFullYear()-5+index}</option>)}

        </select>
        <button><img src={<ArrowLeft color="royalblue"/>} alt="" />left</button>
      </div>

      <div className="daysofweek">
        {dayofweek.map((day,index)=><div key={index}>{day}</div>)}
      </div>
     </div>
    </>
  )
}

export default App
