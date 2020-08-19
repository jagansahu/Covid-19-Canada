import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledDaysSelector = styled(Dropdown)`
  // width: 30%;
  margin-bottom: 30px;
`;

type DaysProps = {
  handleDay: (num: any) => void;
  days: number;
};

const options: number[] = [10, 20, 30, 40, 50];

function DaysSelector({ handleDay, days }: DaysProps) {
  const menu = (
    <Menu>
      {options.map((option, index: number) => {
        return (
          <Menu.Item key={index} onClick={(option) => handleDay(option)}>
            {option}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <div style={{ marginLeft: 10 }}>
      <div style={{ marginRight: 5 }}>Select days:</div>
      <StyledDaysSelector overlay={menu} placement='bottomCenter'>
        <Button>{days}</Button>
      </StyledDaysSelector>
    </div>
  );
}

export default DaysSelector;
