import React from "react";
import {Card, Button, Row, Col, Jumbotron, Container} from "react-bootstrap"


const School = (props) => {
   let devSchool = props.bootcamp.schools.map((devs, index) => (
      <div className="schoolCard" key={index}>
      <Card>
         <Card.Img variant="top" src="" />
         <Card.Body>
         {/* <h1>{devs.campus}</h1> */}
         <img src={devs.img} />
            <Card.Text>
               <h6>{devs.cost}</h6>
               <h6>{devs.len}</h6>
               <h6>{devs.loc}</h6>
            </Card.Text>
            <a href={devs.url}><Button variant="primary">Website</Button></a>
         </Card.Body>
         
      </Card>
      </div>
   ))
   return(
      <div className="schoolBox">
         <h1 className="schoolHeader"> Bootcamp Comparison </h1>
            <div className="devSchoolBox">
               {devSchool}
            </div>
      </div>
   )
}

// const School = (props) => {
//    let devSchool = props.bootcamp.schools.map((devs, index) => {
//       <SchoolCard key={index} img={devs.img} cost={devs.cost} len={devs.len} loc={devs.loc} />
//    return (
//       <div className='School'>
//          <section>
//             <h2>Coding Bootcamp Comparison</h2>
//             {devSchool}
//          </section>
//       </div>
//       )
//    })
// }

export default School; 