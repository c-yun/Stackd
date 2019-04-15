import React from "react";
import {Card, Button, Row, Col, Jumbotron, Container} from "react-bootstrap"


const School = (props) => {
   let devSchool = props.bootcamp.schools.map((devs, index) => (
      <div className="schoolCard" key={index}>
      <Card>
         <Card.Img variant="top" src="" />
         <Card.Body>
         <Card.Title>{devs.campus}</Card.Title>
            <Card.Text>
               <p>{devs.cost}</p>
               <p>{devs.len}</p>
               <p>{devs.loc}</p>
            </Card.Text>
            <a href={devs.url}><Button variant="primary">Website</Button></a>
         </Card.Body>
         
      </Card>
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