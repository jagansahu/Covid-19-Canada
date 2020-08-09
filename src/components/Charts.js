import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';

const StyledChart = styled(ReactEcharts)`
  width: 100%;
  height: 300px;
`;

function Chart(props) {
  const option = {
    title: {
      text: props.title,
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: props.option,
        type: 'line',
      },
    ],
  };
  return <StyledChart option={option} />;
}

export default Chart;
