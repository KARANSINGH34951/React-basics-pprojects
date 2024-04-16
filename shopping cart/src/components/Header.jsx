import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
const Header = () => {
  return (
    <div className='navbar'>
      <div className="logo">Food logo</div>
      <ul>
        <li><Link to={"/Home"}>Home</Link></li>
        <li><Link to={"/Cart"}>View cart</Link></li>
        {/* <li><Link to={"/"}>Home</Link></li> */}
      </ul>
    </div>
  )
}

export default Header
