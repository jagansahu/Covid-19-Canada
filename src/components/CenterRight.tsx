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
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const ImgWrapper = styled.div`
  width: 90%;
  height: 
  object-fit: fill;
  img {
    width: 90%;
  }
`;

function CenterRight() {
  const [provinceList, setProvinceList] = useState([]);
  const [province, setProvince] = useState(2);

  type mapPic = {
    id: number;
    src: string;
  };

  const mapPicList: mapPic[] = [
    { id: 0, src: require('../assets/alberta.png') },
    { id: 1, src: require('../assets/bc.png') },
    { id: 2, src: require('../assets/canada.png') },
    { id: 3, src: require('../assets/manitoba.png') },
    { id: 4, src: require('../assets/nb.png') },
    { id: 5, src: require('../assets/nal.png') },
    { id: 6, src: require('../assets/nova_scotia.png') },
    { id: 7, src: require('../assets/ontario.png') },
    { id: 8, src: require('../assets/canada.png') },
    { id: 9, src: require('../assets/quebec.png') },
    { id: 10, src: require('../assets/saskatchewan.png') },
    { id: 11, src: require('../assets/canada.png') },
    { id: 12, src: require('../assets/nt.png') },
    { id: 13, src: require('../assets/yukon.png') },
  ];

  useEffect(() => {
    //get province list
    axios
      .get('https://disease.sh/v3/covid-19/historical/Canada?lastdays=30')
      .then((res) => {
        setProvinceList(res.data.province);
      });
    console.log(province);
  }, [province]);

  return (
    <StyledCenterRight>
      <SubTitle>Canada Map</SubTitle>
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
