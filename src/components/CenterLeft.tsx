import React, { useState, useEffect } from 'react';
import { provinceList } from './ProDropDown';
import ProDropDown from './ProDropDown';
import Chart from './Charts';
import styled from 'styled-components';

const StyledCenterLeft = styled.div`
  width: 700px;
  margin-left: 300px;
`;

function CenterLeft() {
  //We show diagrams for Canada by default
  const [province, setProvince] = useState('Canada');

  const handleClick = (key: any) => {
    setProvince(provinceList[parseInt(key.key)]);
  };

  useEffect(() => {
    console.log(province);
  });

  return (
    <StyledCenterLeft>
      <ProDropDown handleClick={handleClick} />
      <Chart />
      <Chart />
      <Chart />
    </StyledCenterLeft>
  );
}

export default CenterLeft;
