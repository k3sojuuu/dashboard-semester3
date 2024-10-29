import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';


const Chart23: React.FC = () => {
  const option = {
    title : {
      text: 'Thống kê quý III',
      subtext: 'Tổng số tàu chạy',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Toa','Toa2','Toa3','Toa4','Toa5']
    },
    series : [
      {
      name: 'Train',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:42, name:'SE1'},
        {value:31, name:'SE2'},
        {value:23, name:'SE3'},
        {value:13, name:'SE4'},
        {value:22, name:'SE5'}
      ],
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    console.log(param, echarts);
    setCount(count + 1);
  };

  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts);
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400 }}
        onChartReady={onChartReady}
        onEvents={{
          'click': onChartClick,
          'legendselectchanged': onChartLegendselectchanged
         }}
      />
      <p>Tổng số lượng chuyến tàu trong quý III: 131</p>
    </>
  );
};

export default Chart23;