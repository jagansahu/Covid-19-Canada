import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCenterRight = styled.div`
  margin-left: 50px;
  width: 700px;
  border: 1px solid black;
`;

type CenterRightProps = {
  province: string;
};
function CenterRight({ province }: CenterRightProps) {
  return <StyledCenterRight>{province}</StyledCenterRight>;
}

export default CenterRight;
