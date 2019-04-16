import React, {Component} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faJsSquare, faJava } from "@fortawesome/free-brands-svg-icons";
import { Button, Card, Row, Col } from 'react-bootstrap';


library.add(faReact, faPython, faJsSquare, faJava)

class Library extends Component {
   render() {
      return (
         <div className='libraryBox'>
            <h1>Library</h1>
         <Row>
            <Col>
            <FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'react']} />
            </Col>
            <Col>
            <FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'python']} />
            </Col>
            <Col>
            <FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'js-square']} />
            </Col>
            <Col>
            <FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'java']} /> 
            </Col>          
         </Row>
         </div>
      )
   }
}

   // return(
   //    <div className="libraryBox">
   //       <h1> Library </h1>
   //          <a href='https://www.javascript.com/'></a>
      
   //    </div>
   // )

export default Library; 