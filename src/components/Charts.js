import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';

const StyledChart = styled(ReactEcharts)`
  width: 100%;
  height: 300px;
`;

function Chart(props) {
  let data = [];
  useEffect(() => {
    for (let i = 1; i <= props.days; i++) {
      data.push(i);
    }
    console.log(data);
  });

  const option = {
    title: {
      text: props.title,
    },
    xAxis: {
      data: data,
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

// [
//   '7/9 ',
//   '7/10 ',
//   '7/11',
//   '7/12',
//   '7/13',
//   '7/14 ',
//   '7/15 ',
//   '7/16 ',
//   '7/17 ',
//   '7/18 ',
//   '7/19 ',
//   '7/20 ',
//   '7/21 ',
//   '7/22 ',
//   '7/23 ',
//   '7/24 ',
//   '7/25 ',
//   '7/26 ',
//   '7/27 ',
//   '7/28 ',
//   '7/29 ',
//   '7/30 ',
//   '7/31 ',
//   '8/1 ',
//   '8/2 ',
//   '8/3 ',
//   '8/4 ',
//   '8/5 ',
//   '8/6 ',
//   '8/7',
// ],
