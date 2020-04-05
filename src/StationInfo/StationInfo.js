import React from 'react';
import styled from 'styled-components';
import Close from './Close';

const StationInfoWrapper = styled.div`
  padding: 20px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: #fff;
`;

const StationName = styled.h1`
  font-size: 16px;
  margin-top: 0;
`;

const StationDetail = styled.div`
  font-weight: 100;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: calc(100vw - 40px);
`;

const StationInfo = ({ selectedStation, setSelectedStation }) => (
  <StationInfoWrapper>
    <Header>
      <StationName>{selectedStation.name}</StationName>
      <Close setSelectedStation={setSelectedStation} />
    </Header>
    <StationDetail>{`🔧 mechanical: ${selectedStation.mechanicalBikes}`}</StationDetail>
    <StationDetail>{`⚡️ electric: ${selectedStation.ebikes}`}</StationDetail>
    <StationDetail>{`🆓 spaces: ${selectedStation.availableDocks}`}</StationDetail>
  </StationInfoWrapper>
);

export default StationInfo;
