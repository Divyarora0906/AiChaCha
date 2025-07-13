import React, { useState } from 'react'
import "../../Whole.css"
const SearchBar = ({selected, setSelected}) => {

  return (
    <div className='pd flex bd'>
      {/* <input placeholder='Search a Tool' name='Search' className='input pd'/> */}
      <select className='input pd' onChange={(e)=>setSelected(e.target.value)}>
        <option value="Audio" className='pre'>🔉 Audio</option>
        <option value="Video" className='pre'>🎥 Video</option>
        <option value="MultiMedia" className='pre'>🤹 MultiMedia</option>
        <option value="Research" className='pre'>🔎 Research</option>
        <option value="Writing" className='pre'>✍️ Writing</option>
        <option value="Design" className='pre'>🎨 Design</option>
        <option value="Presentation" className='pre'>💻 Presentation</option>
        <option value="Image" className='pre'>🖼️ Image</option>
        <option value="Conversational" className='pre'>🗣️ Conversational</option>
        <option value="Chatbot" className='pre'>🤖 ChatBot</option>
        <option value="Email" className='pre'>📩 Email</option>
        <option value="Code" className='pre'>👨‍💻 Code</option>
        <option value="Productivity" className='pre'>⌚ Productivity</option>
        <option value="Study" className='pre'>🧑‍🎓 Study</option>
      </select>
    </div>
  )
}

export default SearchBar