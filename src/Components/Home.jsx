import React, { useState } from 'react'
import Trendng from './Trendng'
import Modals from './microComponents/Modal'
import Tools from './Tools'
import Sidemenu from './microComponents/Sidemenu'

const Home = ({selected, setselected}) => {
      const [Free, setFree] = useState(false)
      const [Api, setapi] = useState(false)
      const [Price, setPrice] = useState(100);
      const [Rate, setRate] = useState(3.5);
 
  return (
    <>
    <Trendng/>
      <div id='Home'>
        <Sidemenu Free={Free} setFree={setFree} Api={Api} setapi={setapi} Price={Price} setPrice={setPrice} Rate={Rate} setRate={setRate}/>
        <Modals />
        <Tools selected={selected} setselected={setselected} Free={Free} Api={Api} Price={Price} Rate={Rate}/>
      </div> 
    </>
  )
}

export default Home