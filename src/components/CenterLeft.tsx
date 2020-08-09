import React, { useState, useEffect } from 'react';
import ProDropDown from './ProDropDown';
// import { provinceList } from './ProDropDown';
import axios from 'axios';
import Chart from './Charts';
import styled from 'styled-components';

const StyledCenterLeft = styled.div`
  width: 700px;
  margin-left: 300px;
`;

function CenterLeft() {
  const [provinceList, setProvinceList] = useState([]);
  //We show diagrams for Canada by default
  const [province, setProvince] = useState('Choose Province');

  const handleClick = (key: any) => {
    setProvince(provinceList[parseInt(key.key)]);
  };

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/historical/Canada?lastdays=30')
      .then((res) => setProvinceList(res.data.province));
    if (province === 'Choose Province') {
      //get national data when province is not selected
      axios
        .get('https://disease.sh/v3/covid-19/historical/Canada?lastdays=30')
        .then((res) => {
          console.log(res.data.timeline.cases);
        });
    }
    console.log(province);
  }, [province]);

  return (
    <StyledCenterLeft>
      <ProDropDown
        handleClick={handleClick}
        province={province}
        provinceList={provinceList}
      />
      <Chart />
      <Chart />
      <Chart />
    </StyledCenterLeft>
  );
}

export default CenterLeft;
