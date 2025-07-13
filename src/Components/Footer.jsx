import React from 'react'
import "../Whole.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div
            className='upper_head pd'
        ><span><Link to={"/"} style={{ color: "white" }}></Link></span>&copy; 2025 AIChaCha. All rights reserved<span><Link to={"/About"} style={{ color: "white" }}></Link></span>
        </div>
    )
}

export default Footer