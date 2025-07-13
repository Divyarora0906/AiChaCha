import React from 'react';
import { useState } from 'react';
const Sidemenu = ({Free, setFree, Api, setapi, setPrice, Price, Rate, setRate}) => {
  console.log(Free)
  return (
    <div className='block'>
      <div className='board'>
        <h2>Filters</h2>

        <div className='filter'>
          <label htmlFor="free">Free</label>
          <input type="checkbox" id='free' onChange={()=>setFree(!Free)}/>
        </div>

        <div className='filter'>
          <label htmlFor="apiAvailable">API Available</label>
          <input type="checkbox" id='apiAvailable' onChange={()=>setapi(!Api)}/>
        </div>

        <div className='filter rat'>
          <label htmlFor="rating">Minimum Rating: <span id="ratingValue">3</span> ⭐</label>
          <input type="range" id="rating" name="rating" min="3" max="5" step="0.1" defaultValue="3"
            onInput={(e) => document.getElementById("ratingValue").textContent = e.target.value}
            onChange={(e)=>setRate(Number(e.target.value))}
          />
        </div>
        <div className='filter rat'>
          <label htmlFor="price">Price: ₹<span id="PValue">3</span></label>
          <input type="range" id="price" name="price" min="500" max="10000" step="1" defaultValue="200"
            onInput={(e) => document.getElementById("PValue").textContent = e.target.value}
            onChange={(e)=>setPrice(Number(e.target.value))}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Sidemenu;
