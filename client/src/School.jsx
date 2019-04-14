import React from "react";

const School = (props) => {
   let devSchool = props.bootcamp.schools.map((devs, index) => (
      <div key={index}>
         {devs.campus}
      </div>
   ))
   return(
      <div className="schoolBox">
         <h1> Welcome to the schools page </h1>
         {devSchool}
      </div>
   )
}

export default School; 