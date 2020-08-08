import React from 'react';
import Filter from './Filter';
import Chart from './Charts';
import styled from 'styled-components';

const StyledCenterLeft = styled.div`
  width: 700px;
  margin-left: 300px;
`;

function CenterLeft() {
  return (
    <StyledCenterLeft>
      <Filter />
      <Chart />
      <Chart />
      <Chart />
    </StyledCenterLeft>
  );
}

export default CenterLeft;
