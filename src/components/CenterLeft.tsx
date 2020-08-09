import React, { useState, useEffect } from 'react';
import ProDropDown from './ProDropDown';
import DaysSelector from './DaysSelector';
import axios from 'axios';
import Chart from './Charts';
import styled from 'styled-components';

const StyledCenterLeft = styled.div`
  flex: 1;
  text-align: center;
`;

function CenterLeft() {
  const [provinceList, setProvinceList] = useState([]);
  //We show diagrams for Canada by default
  const [province, setProvince] = useState('Canada');

  const [days, setDays] = useState(30);

  const [cases, setCases] = useState([]);

  const [deaths, setDeaths] = useState([]);

  const handleClick = (key: any) => {
    setProvince(provinceList[parseInt(key.key)]);
  };

  const handleDay = (day: any) => {
    const index = parseInt(day.key);
    setDays(10 * (index + 1));
  };

  const getData = (json: any) => {
    const stringfiedJSON = JSON.stringify(json);
    const obj = JSON.parse(stringfiedJSON);
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };

  const getParam = (str: string): string => {
    if (str.includes(' ')) {
      const res = str.replace(' ', '%20');
      return res;
    } else {
      return str;
    }
  };

  useEffect(() => {
    //get province list
    axios
      .get('https://disease.sh/v3/covid-19/historical/Canada?lastdays=30')
      .then((res) => {
        setProvinceList(res.data.province);
      });
    if (province === 'Canada') {
      //get national data when province is not selected
      axios
        .get(
          `https://disease.sh/v3/covid-19/historical/Canada?lastdays=${days}`
        )
        .then((res) => {
          let result1 = [];
          let result2 = [];
          for (let i = 0; i < getData(res.data.timeline.cases).length; i++) {
            result1.push(getData(res.data.timeline.cases)[i]);
          }
          for (let i = 0; i < getData(res.data.timeline.deaths).length; i++) {
            result2.push(getData(res.data.timeline.deaths)[i]);
          }
          setCases(result1 as any);
          setDeaths(result2 as any);
        });
    } else {
      //when province has been selected
      const param = getParam(province);
      axios
        .get(
          `https://disease.sh/v3/covid-19/historical/Canada/${param}?lastdays=${days}`
        )
        .then((res) => {
          let result1 = [];
          let result2 = [];

          for (let i = 0; i < getData(res.data.timeline.cases).length; i++) {
            result1.push(getData(res.data.timeline.cases)[i]);
          }
          for (let i = 0; i < getData(res.data.timeline.deaths).length; i++) {
            result2.push(getData(res.data.timeline.deaths)[i]);
          }
          setCases(result1 as any);
          setDeaths(result2 as any);
        });
    }
  }, [province, days]);

  return (
    <StyledCenterLeft>
      <ProDropDown
        handleClick={handleClick}
        province={province}
        provinceList={provinceList}
      />
      <DaysSelector handleDay={handleDay} days={days} />
      <Chart option={cases} title='Cases confirmed' days={days} />
      <Chart option={deaths} title='Deaths' days={days} />
    </StyledCenterLeft>
  );
}

export default CenterLeft;
