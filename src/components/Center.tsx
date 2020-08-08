import React from 'react';
import CenterLeft from './CenterLeft';
import CenterRight from './CenterRight';
import styled from 'styled-components';

const StyledCenter = styled.div`
  margin-top: 50px;
  div {
    display: inline-block;
  }
`;

function Center() {
  return (
    <StyledCenter>
      <CenterLeft />
      <CenterRight />
    </StyledCenter>
  );
}

export default Center;
