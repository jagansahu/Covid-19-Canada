import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledDropDown = styled(Dropdown)`
  width: 30%;
  margin-bottom: 30px;
`;

type ProDropDownProps = {
  handleClick: (key: any) => void;
  province: string;
  provinceList: string[];
};

function ProDropDown({
  handleClick,
  provinceList,
  province,
}: ProDropDownProps) {
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
      <Button>{province}</Button>
    </StyledDropDown>
  );
}

export default ProDropDown;
