import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
    },
  ],
};

const StyledChart = styled(ReactEcharts)`
  width: 600px;
  height: 300px;
`;

function Chart() {
  return <StyledChart option={option} />;
}

export default Chart;
