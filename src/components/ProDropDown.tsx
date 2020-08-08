import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const provinceList: string[] = [
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

const menu = (
  <Menu>
    {provinceList.map((province) => {
      return <Menu.Item>{province}</Menu.Item>;
    })}
  </Menu>
);

const StyledDropDown = styled(Dropdown)`
  margin-right: 20px;
`;

function ProDropDown() {
  return (
    <StyledDropDown overlay={menu} placement='bottomCenter'>
      <Button>Province</Button>
    </StyledDropDown>
  );
}

export default ProDropDown;
