import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer, Button, Radio, Space } from 'antd';
import Color from '../theme/color';
import 'antd/dist/antd.css';

const StyledSideBar = styled.div`
  margin-top: 10px;
  position: fixed;
  width: 256px;
`;

const StyledDrawer = styled(Drawer)`
  p {
    color: ${Color.themeColor};
    cursor: pointer;
  }
`;

function SideBar() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const onChange = (e: any) => {
    setPlacement(e.target.value);
  };

  return (
    <StyledSideBar>
      <Space>
        <Radio.Group defaultValue={placement} onChange={onChange}></Radio.Group>
        <Button type='primary' onClick={toggleDrawer}>
          <a className='iconfont icon-chouti' style={{ color: 'white' }}></a>
        </Button>
      </Space>
      <StyledDrawer
        title='Covid-19 Canada'
        placement={placement as any}
        closable={false}
        onClose={toggleDrawer}
        visible={visible}
        key={placement}
      >
        <p>
          <i className='iconfont icon-ditu'></i>Show Map Only
        </p>
        <p>
          <i className='iconfont  icon-yiwen'></i>Usage
        </p>
        <p>
          <i className='iconfont icon-ren'></i>Our Team
        </p>
      </StyledDrawer>
    </StyledSideBar>
  );
}

export default SideBar;
