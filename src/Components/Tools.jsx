import React, { useEffect, useState } from 'react';
import "../Whole.css";
import Card from './microComponents/Card';
import tools from "./JSON/Aichacha.json";

const Tools = ({ Free, Api, Price, Rate , selected, setselected}) => {
  const [items, setItems] = useState([]);
   
  useEffect(() => {
   let catTools = tools.filter(tool=>tool.Category === selected)
    console.log(catTools)
    let filteredItems = catTools;

    // Filter by Free
    if (typeof Free === "boolean") {
      filteredItems = filteredItems.filter(tool => tool.Free === Free);
    }

    // Filter by Api
    if (Api === true) {
      filteredItems = filteredItems.filter(tool => tool.Api === Api);
    }

    // Filter by Price
    if (typeof Price === "number") {
      filteredItems = filteredItems.filter(tool => {
        if (typeof tool["Paid Plan"] === "number") {
          return tool["Paid Plan"] <= Price;
        }
        return true;
      });
    }

    // ✅ Filter by Rating
    if (typeof Rate === "number") {
      filteredItems = filteredItems.filter(tool => {
        return typeof tool.Rating === "number" && tool.Rating >= Rate;
      });
    }

    setItems(filteredItems);
  }, [Free, Api, Price, Rate, selected]);

  return (
    <div className='Tools_out'>
      <h2>Tools Category: {selected}</h2>
      <div className='Tools'>
        {items.length === 0 ? (
          <p>No tools match your selected filters.</p>
        ) : (
          items.map((e, index) => (
            <Card
              key={index}
              name={e.name}
              web={e.Website}
              desc={e.Category}
              img={e.img}
              rat={e.Rating}
              Paid={e.PaidPlan}
              short={e.short}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Tools;
