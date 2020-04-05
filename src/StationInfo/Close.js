import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const Close = ({ setSelectedStation }) => (
  <Wrapper onClick={() => setSelectedStation(null)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
      <path
        d="M 0,0 L 10,10 M 10,0 L 0,10"
        stroke="#000"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </Wrapper>
);

export default Close;
