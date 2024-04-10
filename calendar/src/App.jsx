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

    for (let i=0;i<firstday.getDay();i++){
      daysarray.push(0);
    }
    for(let i=1;i<=lastday.getDate();i++){
      daysarray.push(new Date(selecteddate.getFullYear(),selecteddate.getMonth(),i));
    }
    return daysarray;
  }

  const handlechangemonth=(e)=>{
    const newmonth=parseInt(e.target.value,10);
    setselecteddate(new Date(selecteddate.getFullYear(),newmonth,selecteddate.getDate()));
  }
  const handleyear=(e)=>{ 
    const newyear=parseInt(e.target.value,10);
    setselecteddate(new Date(newyear,selecteddate.getMonth(),selecteddate.getDate()));
  }

  const isthesameday=(day1,day2)=>{
    return day1.getFullYear()===day2.getFullYear() && day1.getMonth()===day2.getMonth() && day1.getDate()===day2.getDate();
  }

  return (
    <>
     <div className='calendar'>
      <div className="header">
        <button onClick={()=>{setselecteddate(new Date(selecteddate.getFullYear(),selecteddate.getMonth()-1,1))}}><img src={ArrowRight} alt="" />right</button>

        <select value={selecteddate.getMonth()} onChange={handlechangemonth}>
          {month.map((month,index)=>
          <option key={index} value={index}>{month}</option>
          )}
        </select>

        <select value={selecteddate.getFullYear} onChange={handleyear}>
          {
           Array.from({length:10},(_,i)=>selecteddate.getFullYear()-5+i).map((year,index)=>(
              <option key={index} value={year}>{year}</option>
            ))
          }
                                                          
        </select>
        <button  onClick={()=>{setselecteddate(new Date(selecteddate.getFullYear(),selecteddate.getMonth()+1,1))}} ><img src={<ArrowLeft color="royalblue"/>} alt="" />left</button>
      </div>

      <div className="daysofweek">
        {dayofweek.map((day,index)=><div key={index}>{day}</div>)}
      </div>

      <div className="days">
        {
          daysinmonth().map((day,index)=>
          <div key={index} className={day===0?"empty":"day"}>
            {day===0?"":day.getDate()}
          </div>)
        }
      </div>
     </div>
    </>
  )
}

export default App
