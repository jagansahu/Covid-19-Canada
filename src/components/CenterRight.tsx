import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const StyledCenterRight = styled.div`
  flex: 1;
  text-align: center;
`;

const SubTitle = styled.h1`
  font-size: 30px;
  color: #f6b906;
`;

const ProvinceSelection = styled.div``;

const StyledButton = styled(Button)`
  float: left;
  margin: 10px;
  border-radius: 4px;
  &: hover {
    color: #f6b906;
  }
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

const CardsWrapper = styled.div``;

const Card = styled.div`
  padding-top: 10px;
  border-radius: 6px;
  width: 100px;
  border: 1px solid black;
  margin-right: 10px;
  div {
    margin-bottom: 20px;
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
  // const [name, setName] = useState(mapPicList[province].name);

  useEffect(() => {
    //get province list
    axios
      .get('https://disease.sh/v3/covid-19/historical/Canada?lastdays=30')
      .then((res) => {
        setProvinceList(res.data.province);
      });
    const proName = provinceList[province];
  }, [province]);

  return (
    <StyledCenterRight>
      <SubTitle>{mapPicList[province].name}</SubTitle>
      <CardsWrapper>
        <Card>
          <div>Confirmed</div>
          <div></div>
        </Card>
        <Card>
          <div>Deaths</div>
          <div></div>
        </Card>
      </CardsWrapper>
      <ProvinceSelection>
        {provinceList.map((province, index: number) => {
          return (
            <StyledButton
              type='primary'
              onClick={() => {
                setProvince(index);
              }}
            >
              {province}
            </StyledButton>
          );
        })}
      </ProvinceSelection>
      <ImgWrapper>
        <img alt='' src={mapPicList[province].src}></img>
      </ImgWrapper>
    </StyledCenterRight>
  );
}

export default CenterRight;
