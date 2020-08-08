import React from 'react';
import ProDropDown from './ProDropDown';
import CityDropDown from './CityDropDown';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const StyledFilter = styled.div`
  margin-top: 50px;
  margin-left: 200px;
  .div {
    display: inline-block;
  }
`;

function Filter() {
  return (
    <StyledFilter>
      <ProDropDown />
      <CityDropDown />
      <SearchBar />
    </StyledFilter>
  );
}

export default Filter;
