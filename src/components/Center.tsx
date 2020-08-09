import React from 'react';
import CenterLeft from './CenterLeft';
import CenterRight from './CenterRight';
import styled from 'styled-components';

const StyledCenter = styled.div`
  margin-left: 30px;
  margin-top: 50px;
`;

function Center() {
  return (
    <StyledCenter>
      <CenterRight />
      <CenterLeft />
    </StyledCenter>
  );
}

export default Center;
