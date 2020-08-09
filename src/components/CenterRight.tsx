import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'antd';
import PropDropDown from './ProDropDown';
import 'antd/dist/antd.css';

const StyledCenterRight = styled.div`
  flex: 1;
  text-align: center;
`;

type ButtonProps = {
  color?: string;
};

const StyledButton = styled(Button)<ButtonProps>`
  margin-left: 10px;
  margin-right: 10px;
  background: ${(props) => (props.color ? props.color : '')};
  border: ${(props) => (props.color ? 'none' : '')};
`;

const ImgWrapper = styled.div`
  width: 90%;
  height: 
  object-fit: fill;
  border: 1px solid black;
  img {
    width: 90%;
  }
`;

function CenterRight() {
  type mapPic = {
    id: number;
    src: string;
    name: string;
  };

  const mapPicList: mapPic[] = [
    { id: 0, name: 'Alberta', src: require('../assets/alberta.png') },
    { id: 1, name: 'British Columbia', src: require('../assets/bc.png') },
    { id: 2, name: 'Grand Princess', src: require('../assets/canada.png') },
    { id: 3, name: 'Manitoba', src: require('../assets/manitoba.png') },
    { id: 4, name: 'New Brunswick', src: require('../assets/nb.png') },
    {
      id: 5,
      name: 'Newfoundland and labrador',
      src: require('../assets/nal.png'),
    },
    { id: 6, name: 'Nova Scotia', src: require('../assets/nova_scotia.png') },
    { id: 7, name: 'Ontario', src: require('../assets/ontario.png') },
    { id: 8, name: 'Prince Edward Island', src: require('../assets/pei.png') },
    { id: 9, name: 'Quebec', src: require('../assets/quebec.png') },
    {
      id: 10,
      name: 'Saskatchewan',
      src: require('../assets/saskatchewan.png'),
    },
    { id: 11, name: 'Diamond Princess', src: require('../assets/canada.png') },
    { id: 12, name: 'NorthWest Territories', src: require('../assets/nt.png') },
    { id: 13, name: 'Yukon', src: require('../assets/yukon.png') },
    { id: 14, name: 'Canada', src: require('../assets/canada.png') },
  ];

  const [provinceList, setProvinceList] = useState([]);
  const [province, setProvince] = useState(14);

  const [cases, setCases] = useState();

  const [deaths, setDeaths] = useState();

  const handleClick = (key: any) => {
    setProvince(parseInt(key.key));
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
    const proName = provinceList[province];
    if (proName === undefined) {
      axios
        .get(`https://disease.sh/v3/covid-19/historical/Canada?lastdays=1`)
        .then((res) => {
          let result1 = getData(res.data.timeline.cases)[0];
          let result2 = getData(res.data.timeline.deaths)[0];
          setCases(result1 as any);
          setDeaths(result2 as any);
        });
    } else {
      const param = getParam(proName);
      axios
        .get(
          `https://disease.sh/v3/covid-19/historical/Canada/${param}?lastdays=1`
        )
        .then((res) => {
          let result1 = getData(res.data.timeline.cases)[0];
          let result2 = getData(res.data.timeline.deaths)[0];
          setCases(result1 as any);
          setDeaths(result2 as any);
        });
    }
  }, [province, cases, deaths]);

  return (
    <StyledCenterRight>
      <PropDropDown
        handleClick={handleClick}
        province={province === 14 ? 'Canada' : provinceList[province]}
        provinceList={provinceList}
      ></PropDropDown>
      <StyledButton type='primary'>Cases confirmed: {cases}</StyledButton>
      <StyledButton type='primary' color='red'>
        Deaths: {deaths}
      </StyledButton>
      <ImgWrapper>
        <img alt='' src={mapPicList[province].src}></img>
      </ImgWrapper>
    </StyledCenterRight>
  );
}

export default CenterRight;
