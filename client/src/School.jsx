import React from "react";

const School = (props) => {
   let devSchool = props.bootcamp.schools.map((devs, index) => (
      <div className="schoolCard" key={index}>
         <p>{devs.campus}</p>
         {devs.cost}
      </div>
   ))
   return(
      <div className="schoolBox">
         <h1> Coding Bootcamp Comparison </h1>
         {devSchool}
      </div>
   )
}

export default School; 