import React, {Component} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faJsSquare, faJava, faGithub, faMedium, faLinkedinIn, faTwitter, faStackOverflow, faCodepen, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { Button, Card, Row, Col } from 'react-bootstrap';


library.add(faReact, faPython, faJsSquare, faJava, faGithub, faMedium, faLinkedinIn, faTwitter, faStackOverflow, faCodepen, faFreeCodeCamp)

class Library extends Component {
   render() {
      return (
         <div className='libraryBox'>
            <h1>Library</h1>
            <br />
            <div className='languages'>
               <h2>Programming Languages</h2>
            <Row>
               <Col>
               <a href='https://reactjs.org/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'react']} /></a> <h3>React</h3>
               </Col>
               <Col>
               <a href='https://www.python.org/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'python']} /></a> <h3>Python</h3>
               </Col>
               <Col>
               <a href='https://www.javascript.com/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'js-square']} /></a> <h3>JavaScript</h3>
               </Col>
               <Col>
               <a href='https://go.java/index.html'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'java']} /></a> <h3>Java</h3>
               </Col>          
            </Row>
            </div>
            <br />
            <div className='media'>
               <h2>Media and Tools</h2>
            <Row>
               <Col>
               <a href='https://github.com/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'github']} /></a> <h3>Github</h3>
               </Col>
               <Col>
               <a href='https://medium.com/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'medium']} /></a> <h3>Medium</h3>
               </Col>
               <Col>
               <a href='https://www.linkedin.com'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'linkedin-in']} /></a> <h3>LinkedIn</h3>
               </Col>
               <Col>
               <a href='https://twitter.com/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'twitter']} /></a> <h3>Twitter</h3>
               </Col>          
            </Row>
            <Row>
               <Col>
               <a href='https://stackoverflow.com/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'stack-overflow']} /></a> <h3>Stack Overflow</h3>
               </Col>
               <Col>
               <a href='https://codepen.io/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'codepen']} /></a> <h3>CodePen</h3>
               </Col>
               <Col>
               <a href='https://www.freecodecamp.org/'><FontAwesomeIcon className='fontLib' size='10x' icon={['fab', 'free-code-camp']} /></a> <h3>freeCodeCamp</h3>
               </Col>
            </Row>
            </div>
         </div>
      )
   }
}

export default Library; 