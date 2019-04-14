import React, { PureComponent } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';

export default class Example extends PureComponent {
static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w9fyL4uh/';

React = [
   {
   name: 'April 11', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Aug 11', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Nov 11', uv: 0, pv:0, amt: 0,
   },
   {
   name: 'March 12', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Jun 12', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Sep 12', uv: 0, pv: 0, amt: 0,
   },
   {
   name: 'Dec 12', uv: 0, pv: 0, amt: 0,
   },
   {
      name: 'Mar 13', uv: .49, pv: .49, amt: .49,
   }, 
   {
      name: 'Jun 13', uv: .38, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Sep 13', uv: .45, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Dec 13', uv: .41, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Mar 14', uv: 1.16, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Jun 14', uv: 1.63, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Sep 14', uv: 1.19, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Dec 14', uv: .84, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Mar 15', uv: 1.16, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Jun 15', uv: 1.99, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Dec 15', uv: 2.78, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Mar 16', uv: 3490, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Jun 16', uv: 1.29, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Sep 16', uv: 1.29, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Dec 16', uv: 1.29, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Mar 17', uv: 1.29, pv: 4300, amt: 2100,
   }, 
   {
      name: 'Jun 17', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Sep 17', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Dec 17', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Marc 18', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Jun 18', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Sep 18', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Dec 18', uv: 1.29, pv: 4300, amt: 2100,
   },
   {
      name: 'Mar 19', uv: 0, pv: 0, amt: 0,
   },
]

   data = [
      {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
      name: 'Page G', uv: 1.29, pv: 4300, amt: 2100,
      },
   ];

  

  render() {
    return (
      <div>
      <h1> React  </h1>
      <AreaChart width={500} height={200} data={this.React} margin={{ top: 10, right: 30, left: 0, bottom: 0,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <h1> Python </h1>
      <AreaChart width={500} height={200} data={this.data} margin={{top: 10, right: 30, left: 0, bottom: 0, }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <h1> Javascript </h1>
      <AreaChart width={500} height={200} data={this.data} margin={{top: 10, right: 30, left: 0, bottom: 0, }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <h1> Java </h1>
      <AreaChart width={500} height={200} data={this.data} margin={{top: 10, right: 30, left: 0, bottom: 0, }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </div>
      );
   }
}








