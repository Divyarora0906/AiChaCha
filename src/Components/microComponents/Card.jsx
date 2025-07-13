import React, { useState } from 'react'
import Modals from './Modal'
const Card = ({name,web,desc,img,short,Paid,rat}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  console.log(short)
    return (
        <div className='card'>
            <img alt='ChatGPT' src={img} className='imgAI'/>
            <h3 style={{color:"#FFDD57"}}>{name}</h3>
            <p>{desc}</p>
            <div className='group_btn'>
            <a href={web} className='Link'>Visit AI Tool</a>
                <button className='Modal' onClick={()=>setIsOpen(true)}>More..</button>
            </div>
            <Modals modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} short={short} Paid={Paid} name={name} rat={rat}/>
        </div>
    )
}

export default Card