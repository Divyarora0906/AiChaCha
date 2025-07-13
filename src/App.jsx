import React from 'react'
import Header from './Components/Header'
import "./Whole.css"
import Sidemenu from './Components/microComponents/Sidemenu'
import Trendng from './Components/Trendng'
import Tools from "./Components/Tools"
import { useState } from 'react'
import About from './Components/About'
import Modal from './Components/microComponents/Modal'
import Modals from './Components/microComponents/Modal'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
const App = () => {
  const [selected, setSelected] =  useState("Audio");

  return (
    <>

      <Header selected={selected} setSelected={setSelected}/>
      <Routes>
        <Route path='/' element={<Home selected={selected} setSelected={setSelected}/>}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App