import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const { Search } = Input;

const StyledSearch = styled(Search)`
  width: 500px;
`;

function SearchBar() {
  return (
    <StyledSearch
      placeholder='Input province name'
      onSearch={(value) => console.log(value)}
      enterButton
    />
  );
}

export default SearchBar;
