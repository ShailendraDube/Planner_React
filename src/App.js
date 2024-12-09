import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
import Card from "./components/Card";

const App = () => {

  const[tours,settours] = useState(data);

  // any index that we want to remove 
  //will be removed with the help of it's unique id  
  function removebtn(id) {
        const newtours = tours.filter(tour => tour.id !== id);
        settours(newtours);
  }


  //agar tour 0 hai toh not any tours left ka batao
  //aur refresh kardo sab kuch  

  if(tours.length == 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => settours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="toursmaindiv">
    {/* as an props we had define the remove btn
    as it is implemented from the parent */}
      <Tours tours={tours} removebtn = {removebtn}></Tours>
    </div>
  )
};

export default App;
