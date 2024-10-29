import React from 'react';
import { Link } from 'react-router-dom';
import "../Statistical/styleStatical.css"
import Chart1 from './staticalComponent/chart1.tsx';
import Chart2 from './staticalComponent/chart2.tsx';
import Chart4 from './staticalComponent/chart4.tsx';
import Chart3 from './staticalComponent/chart3.tsx';
import Chart22 from './staticalComponent/chart22.tsx';
import Chart23 from './staticalComponent/chart23.tsx';
import Chart24 from './staticalComponent/chart24.tsx';

const Statical = () => {
    return(
        <div className='statical'>
        <h1 className='title-sta'>THỐNG KÊ BIỂU ĐỒ</h1>
        <div className='chart1'>
            <h2>Lượng vé bán ra trong năm</h2>
            <Chart1/>
        </div>

       <div className='chart2'>
        <h1>Tổng số lượng chuyến tàu chạy trong 4 quý</h1>
         <div className="charts-container">
            <div className="chart">
                <Chart2 />
            </div>
            <div className="chart">
                <Chart22 />
            </div>
            <div className="chart">
                <Chart23 />
            </div>
            <div className="chart">
                <Chart24 />
            </div>
        </div>
       </div>
        <div>
        {/* <h1>Số lượng khách hàng dừng ở các ga lớn</h1> */}
        <Chart4 />
        </div>
    </div>
    )
}

export default Statical;