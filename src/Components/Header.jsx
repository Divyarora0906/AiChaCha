import React from 'react'
import SearchBar from './microComponents/searchBar'
import "../Whole.css"
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
const Header = ({selected, setSelected}) => {
  return (
    <>
      <div>
        <div style={{background:"#FFDD57",padding:"4px",textAlign:"center"}}><a  href="https://docs.google.com/forms/d/e/1FAIpQLSdsYqmlIDS3NJhpGHfHvJkBYR-Tp5VRD-IdCUfjN1T8t1egIA/viewform?usp=dialog" style={{color:"#222831",textDecoration:"none"}}>Suggest a AI Tool that you think is Crazyyy 🤪</a></div>
        <div
          className='upper_head pd'
        >
          <span><Link to={"/"} style={{color:"white",textDecoration:"none"}}>Home</Link></span>
          <span><Link to={"/About"} style={{color:"white", textDecoration:"none"}} >About</Link></span>
        </div>
        <div className='pd flex bar'>
          <div>
            <img src={logo} alt="logo" className='logo' />
          </div>
          <div>
            <SearchBar selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header