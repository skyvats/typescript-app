import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import { UIUtils } from '../../utils/UIUtils';

interface LineChartProps{
  packageName:string,
  duration:any
}

const LineChart = ({packageName, duration}:LineChartProps) => {

  console.log("LineChart => ", {packageName, duration})

  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    axios.get("https://api.npmjs.org/downloads/range/2013-05-01:2025-02-10/"+packageName).then((response) =>{
      var data = response.data;

      console.log("Get chart data response => ", data);

      var dateWiseData:any = {dates:[], data:[]};

      if(!UIUtils.nullOrEmpty(data)){
        data.downloads.map((downloadDetail:any)=>{
          dateWiseData.dates.push(downloadDetail.day);
          dateWiseData.data.push(downloadDetail.downloads);
        })
      }

      console.log("dateWiseData => ", dateWiseData);

      const option = {
        title: {
          text: 'Complete Download Data',
          left: 'center',
          textStyle: {
            fontSize: 20,
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: dateWiseData.dates,
          boundaryGap: false,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Sales',
            type: 'line',
            data: dateWiseData.data,
            smooth: true,
            lineStyle: {
              color: '#5470C6',
              width: 3,
            },
            areaStyle: {
              color: 'rgba(84, 112, 198, 0.2)'
            },
            symbol: 'circle',
            symbolSize: 8,
          }
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
      };
  
      chartInstance.setOption(option);

    })

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, [packageName]);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default LineChart; 
