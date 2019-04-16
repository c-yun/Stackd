import React, { PureComponent } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJsSquare, faJava } from "@fortawesome/free-brands-svg-icons"
import { Button, Card, Row, Col } from 'react-bootstrap';

library.add(faReact, faPython, faJsSquare, faJava)


export default class Trending extends PureComponent {
static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w9fyL4uh/';

React = [
   {
   name: 'Apr 11', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Aug 11', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Nov 11', uv: 0, pv:0, amt: 0,
   },
   {
   name: 'Mar 12', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Jun 12', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Sep 12', uv: 0.45, pv: 0, amt: 0,
   },
   {
   name: 'Dec 12', uv: 0.41, pv: 0, amt: 0,
   },
   {
   name: 'Mar 13', uv: 0, pv: .49, amt: .49,
   }, 
   {
   name: 'Jun 13', uv: .38, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Sep 13', uv: .45, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Dec 13', uv: 0, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Mar 14', uv: 1.16, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Jun 14', uv: 0.84, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Sep 14', uv: 2.78, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Dec 14', uv: 3.65, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Mar 15', uv: 5.1, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Jun 15', uv: 8.82, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Dec 15', uv: 13.78, pv: 4300, amt: 2100,
   }, 
   {
     
   name: 'Mar 16', uv: 14.33, pv: 4300, amt: 2100,

      name: 'Mar 16', uv: 0, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Jun 16', uv: 15.12, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Sep 16', uv: 17.13, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Dec 16', uv: 18.35, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Mar 17', uv: 19.30, pv: 4300, amt: 2100,
   }, 
   {
   name: 'Jun 17', uv: 19.79, pv: 4300, amt: 2100,
   },
   {
   name: 'Sep 17', uv: 21.61, pv: 4300, amt: 2100,
   },
   {
   name: 'Dec 17', uv: 24.94, pv: 4300, amt: 2100,
   },
   {
   name: 'Mar 18', uv: 23.43, pv: 4300, amt: 2100,
   },
   {
   name: 'Jun 18', uv: 28.02, pv: 4300, amt: 2100,
   },
   {
   name: 'Sep 18', uv: 26.57, pv: 4300, amt: 2100,
   },
   {
   name: 'Dec 18', uv: 24.18, pv: 4300, amt: 2100,
   },
   {
   name: 'Mar 19', uv: 28.72, pv: 0, amt: 0,
   },
]

Python = [
   {
      name: 'Apr 11', uv: 16.89, pv: 4300, amt: 2100,
      },
      {
      name: 'Aug 11', uv: 15, pv: 4300, amt: 2100,
      },
      {
      name: 'Nov 11', uv: 11.67, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 12', uv: 20.46, pv: 4300, amt: 2100,
      },
      {
      name: 'Jun 12', uv: 23.31, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 12', uv: 20.27, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 12', uv: 20.75, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 13', uv: 14.97, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 13', uv: 20.65, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 13', uv: 15.23, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 13', uv: 21.29, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 14', uv: 21.68, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 14', uv: 19.10, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 14', uv: 27.43, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 14', uv: 24.14, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 15', uv: 18.34, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 15', uv: 19.69, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 15', uv: 18.38, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 16', uv: 16.85, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 16', uv: 17.32, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 16', uv: 21.08, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 16', uv: 19.36, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 17', uv: 20.87, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 17', uv: 18.89, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 17', uv: 21.25, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 17', uv: 20.05, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 18', uv: 20.02, pv: 4300, amt: 2100,
      },
      {
      name: 'Jun 18', uv: 23.62, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 18', uv: 23.57, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 18', uv: 22.22, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 19', uv: 24.62, pv: 4300, amt: 2100,
      },
]

Javascript = [
   {
      name: 'Apr 11', uv: 17.35, pv: 4300, amt: 2100,
      },
      {
      name: 'Aug 11', uv: 17.50, pv: 4300, amt: 2100,
      },
      {
      name: 'Nov 11', uv: 16.25, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 12', uv: 18.92, pv: 4300, amt: 2100,
      },
      {
      name: 'Jun 12', uv: 16.10, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 12', uv: 18.02, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 12', uv: 21.16, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 13', uv: 22.11, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 13', uv: 27.17, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 13', uv: 20.16, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 13', uv: 18.63, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 14', uv: 22.25, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 14', uv: 20.22, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 14', uv: 32.29, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 14', uv: 25.35, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 15', uv: 16.82, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 15', uv: 16.69, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 15', uv: 16.49, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 16', uv: 18.12, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 16', uv: 15.24, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 16', uv: 17.42, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 16', uv: 14.31, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 17', uv: 16.04, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 17', uv: 14.91, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 17', uv: 16.36, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 17', uv: 15.04, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 18', uv: 13.09, pv: 4300, amt: 2100,
      },
      {
      name: 'Jun 18', uv: 14.82, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 18', uv: 12.40, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 18', uv: 12.70, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 19', uv: 12.95, pv: 4300, amt: 2100,
      },
]

Java = [
   {
      name: 'Apr 11', uv: 9.13, pv: 4300, amt: 2100,
      },
      {
      name: 'Aug 11', uv: 11.67, pv: 4300, amt: 2100,
      },
      {
      name: 'Nov 11', uv: 12.92, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 12', uv: 10.04, pv: 4300, amt: 2100,
      },
      {
      name: 'Jun 12', uv: 10.17, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 12', uv: 12.61, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 12', uv: 9.96, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 13', uv: 11.90, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 13', uv: 16.30, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 13', uv: 11.11, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 13', uv: 10.65, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 14', uv: 9.83, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 14', uv: 10.11, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 14', uv: 12.50, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 14', uv: 11.76, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 15', uv: 10.02, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 15', uv: 11.18, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 15', uv: 10, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 16', uv: 10.25, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 16', uv: 10, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Sep 16', uv: 10.54, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Dec 16', uv: 11.13, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Mar 17', uv: 10.13, pv: 4300, amt: 2100,
      }, 
      {
      name: 'Jun 17', uv: 10.03, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 17', uv: 10.74, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 17', uv: 9.90, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 18', uv: 9.57, pv: 4300, amt: 2100,
      },
      {
      name: 'Jun 18', uv: 9.92, pv: 4300, amt: 2100,
      },
      {
      name: 'Sep 18', uv: 9.54, pv: 4300, amt: 2100,
      },
      {
      name: 'Dec 18', uv: 10.74, pv: 4300, amt: 2100,
      },
      {
      name: 'Mar 19', uv: 9.74, pv: 4300, amt: 2100,
      },
]


   render() {
      return (
      <div className="trendingBox">
         <h1 className="hiringHeader">Hiring Trends</h1>
            <div className="graphBox">
               <Row>
                  <Col>
                     <h2> React </h2> <FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'react']} />
                     <Card>
                        <Card.Body>
                        <AreaChart className="trendingBox" width={500} height={200} data={this.React} margin={{ top: 10, right: 30, left: 0, bottom: 0,}}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                           <Area type="monotone" dataKey="uv" stroke="#000" fill="#4F86F7" />
                        </AreaChart>
                        </Card.Body>
                        </Card>
                     <Card>
                        <Card.Body>
                     <h2> Python </h2> <FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'python']} />
                        <AreaChart  className="trendingBox" width={500} height={200} data={this.Python} margin={{top: 10, right: 30, left: 0, bottom: 0, }}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                           <Area connectNulls type="monotone" dataKey="uv" stroke="#000" fill="#4F86F7" />
                        </AreaChart>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col>
                     <Card>
                        <Card.Body>
                     <h2> Javascript </h2> <FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'js-square']} /> 
                        <AreaChart className="trendingBox"  width={500} height={200} data={this.Javascript} margin={{top: 10, right: 30, left: 0, bottom: 0, }}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                           <Area connectNulls type="monotone" dataKey="uv" stroke="#000" fill="#4F86F7" />
                        </AreaChart>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                     <h2> Java </h2> <FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'java']} />
                        <AreaChart  className="trendingBox" width={500} height={200} data={this.Java} margin={{top: 10, right: 30, left: 0, bottom: 0, }}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                           <Area connectNulls type="monotone" dataKey="uv" stroke="#000" fill="#4F86F7" />
                        </AreaChart>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </div>
      </div>
      );
   }
}








