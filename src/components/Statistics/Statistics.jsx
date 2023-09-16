import React from 'react';
import './Statistics.css';
import Footer from '../Footer/Footer';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
  

const data = [
    {
      name: 'Asignnment 1',
      MyMarks: 50,
      totalMarks: 60,
    },
    {
      name: 'Asignnment 2',
      MyMarks: 25,
      totalMarks: 30,
    },
    {
      name: 'Asignnment 3',
      MyMarks: 20,
      totalMarks: 40,
    },
    {
      name: 'Asignnment 4',
      MyMarks: 6,
      totalMarks: 30,
    },
    {
      name: 'Asignnment 5',
      MyMarks: 15,
      totalMarks: 30,
    },
    {
      name: 'Asignnment 6',
      MyMarks: 22,
      totalMarks: 30,
    },
    {
      name: 'Asignnment 7',
      MyMarks: 25,
      totalMarks: 30,
    },
    {
      name: 'Asignnment 8',
      MyMarks: 25,
      totalMarks: 30,
    },
    {
      name: 'Asignnment 9',
      MyMarks: 25,
      totalMarks: 30,
    }
  ];

const Statistics = () => {
    return (
        <div>
            <div className="container">
            <h2 className='statistics'>Statistics</h2>
            <div className="chart">
              
            <ComposedChart
              width={1000}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="totalMarks" fill="#8884d8" stroke="#8884d8" />
              <Line type="monotone" dataKey="MyMarks" stroke="#ff7300" />
            </ComposedChart>
            </div>
            </div>
        

            <Footer></Footer>
        </div>
    );
};

export default Statistics;