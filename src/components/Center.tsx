import React, { useState, useEffect } from 'react';
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
  const [province, setProvince] = useState('Canada');

  const handleSwitch = (key: string) => {
    setProvince(key);
  };

  return (
    <StyledCenter>
      <CenterLeft handleSwitch={handleSwitch} />
      <CenterRight province={province} />
    </StyledCenter>
  );
}

export default Center;
