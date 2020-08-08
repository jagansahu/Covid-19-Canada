import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

export const provinceList: string[] = [
  'Ontario',
  'Quebec',
  'Nova Scotia',
  'New Brunswick',
  'Manitoba',
  'British Columbia',
  'Prince Edward Island',
  'Saskatchewan',
  'Alberta',
  'Newfoundland and Labrador',
];

const StyledDropDown = styled(Dropdown)`
  width: 100%;
`;

type ProDropDownProps = {
  handleClick: (key: any) => void;
};

function ProDropDown({ handleClick }: ProDropDownProps) {
  const menu = (
    <Menu>
      {provinceList.map((province, index: number) => {
        return (
          <Menu.Item
            key={index}
            onClick={(province) => {
              handleClick(province);
            }}
          >
            {province}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <StyledDropDown overlay={menu} placement='bottomCenter'>
      <Button>Province</Button>
    </StyledDropDown>
  );
}

export default ProDropDown;
