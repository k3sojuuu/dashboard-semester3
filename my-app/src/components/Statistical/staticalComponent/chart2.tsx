import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const Chart2: React.FC = () => {
  const option = {
    title : {
      text: 'Thống kê 1',
      subtext: 'đường tàu',
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
      name: '1',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'SE'},
        {value:310, name:'SS'},
        {value:234, name:'SSS'},
        {value:135, name:'SW'},
        {value:1548, name:'SC'}
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
      <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div>
    </>
  );
};

export default Chart2;