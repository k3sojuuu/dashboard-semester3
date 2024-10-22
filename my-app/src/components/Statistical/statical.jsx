import React from 'react';
import { Link } from 'react-router-dom';
import Chart1 from './staticalComponent/chart1.tsx';
import Chart2 from './staticalComponent/chart2.tsx';
import Chart4 from './staticalComponent/chart4.tsx';
import Chart3 from './staticalComponent/chart3.tsx';

const Statical = () => {
    return(
        <div>
             <h1>This is lSSSSSSSSSpage</h1>
             <Chart1/>
             <Chart2/>
             <Chart3/>
             <Chart4/>
        </div>
    )
}

export default Statical;