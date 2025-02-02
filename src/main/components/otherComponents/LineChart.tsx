import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Monthly Download Data',
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
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        boundaryGap: false,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Sales',
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130, 170, 190, 230, 210, 250],
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

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default LineChart; 
