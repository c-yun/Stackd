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








