import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart4: React.FC = () => {
  const option = {
    title: {
      text: 'Thống kê 4'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['1','2','3']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['tháng 1','tháng 1','tháng 1','tháng 1','tháng 1','tháng 1','tháng 1']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Chỉ số1',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'Chỉ số 2',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'Chỉ số 3',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default Chart4;