import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.alipay.com/'
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.taobao.com/'
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        3rd menu item
      </a>
    </Menu.Item>
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
