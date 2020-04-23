import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: absolute;
  bottom: 80px;
  right: 20px;
  cursor: pointer;
`;

const SearchButton = ({ setShowSearch }) => {
  return (
    <Wrapper role="button" onClick={() => setShowSearch(true)}>
      <span role="img" aria-label="search">
        🔍
      </span>
    </Wrapper>
  );
};

export default SearchButton;
