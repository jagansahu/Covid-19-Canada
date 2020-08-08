import React, { useEffect } from 'react';
import CanadaJson from '../static/CAN.geo.json';
import echarts from 'echarts';

function Map() {
  const initECharts: () => void = () => {
    echarts.registerMap('Canada', CanadaJson);
    const myChart = echarts.init(document.getElementById('mainMap') as any);
    myChart.setOption({
      geo: {
        map: 'jining',
        roam: true, //拖动、放大
        zoom: 1.2,
        type: 'map',
        layoutCenter: ['50%', '50%'],
        y: 60,
        mapLocation: {
          y: 60,
        },
        tooltip: {
          show: false, //不显示提示标签
        },
        label: {
          normal: {
            show: true, //显示省份标签
            textStyle: {
              color: 'white',
              fontWeight: 500,
              fontSize: 16,
            }, //省份标签字体颜色
          },
          emphasis: {
            //对应的鼠标悬浮效果
            show: false,
            textStyle: {
              color: '#324324',
            },
          },
        },
        itemStyle: {
          normal: {
            borderWidth: 0.5, //区域边框宽度
            borderColor: '#fff', //区域边框颜色
            areaColor: '#4260ff', //区域颜色
            label: { show: false },
          },
          emphasis: {
            show: false,
            borderWidth: 0.5,
            borderColor: '#4b0082',
            areaColor: '#ffdead',
          },
        },
      },
    });
  };

  useEffect(() => {
    initECharts();
  });

  return <div id='mainMap' style={{ width: '100vm', height: '90vh' }}></div>;
}

export default Map;
