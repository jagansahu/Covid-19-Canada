import React from 'react';
import styled from 'styled-components';
import Font from '../theme/font';

const StyledFooter = styled.div`
  text-align: center;
  font-size: ${Font.titleFont}px;
`;

function Footer() {
  return <StyledFooter></StyledFooter>;
}

export default Footer;
