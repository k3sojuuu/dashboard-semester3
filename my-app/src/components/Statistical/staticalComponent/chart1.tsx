import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart1: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [10199, 11632, 11901, 9934, 11290, 8330, 9420,8200, 9321, 11101, 7344],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default Chart1;
