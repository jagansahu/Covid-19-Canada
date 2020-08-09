import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledDropDown = styled(Dropdown)`
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
    <div style={{ marginLeft: 10 }}>
      <div style={{ marginRight: 5 }}>Select region:</div>
      <StyledDropDown overlay={menu} placement='bottomCenter'>
        <Button>{province}</Button>
      </StyledDropDown>
    </div>
  );
}

export default ProDropDown;
