import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart4: React.FC = () => {
  const option = {
    title: {
      text: 'Thống kê lượng khách dừng trạm'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['1','2','3','4']
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
        data : ['Ga Hà Nội','Ga Thanh Hóa','Ga Vinh','Ga Huế','Ga Đà Nẵng','Ga Nha Trang','Ga Sài Gòn']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Quý I',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[22220, 11132, 13101, 11234, 20000, 15530, 11820]
      },
      {
        name:'Quý II',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[22220, 11132, 13101, 11234, 20000, 15530, 21820]
      },
      {
        name:'Quý III',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[19220, 9132, 13101, 9234, 18000, 15530, 22820]
      },
      {
        name:'Quý IV',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[22220, 11132, 13101, 11234, 25000, 15530, 20820]
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default Chart4;