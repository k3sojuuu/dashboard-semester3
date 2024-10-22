import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart3: React.FC = () => {
  const option = {
    title: {
      text: 'ECharts'
    },
    tooltip: {},
    legend: {
      data:['Data1']
    },
    xAxis: {
      data: ['1', '2', '3', '4', '5', '6']
    },
    yAxis: {},
    series: [{
      name: 'Money',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    opts={{ renderer: 'svg' }}
  />;
};

export default Chart3;