import React from 'react';
import ProDropDown from './ProDropDown';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const StyledFilter = styled.div`
  margin-top: 50px;
  margin-left: 400px;
  .div {
    display: inline-block;
  }
`;

function Filter() {
  return (
    <StyledFilter>
      <ProDropDown />
      <SearchBar />
    </StyledFilter>
  );
}

export default Filter;
