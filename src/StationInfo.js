import React from 'react';
import styled from 'styled-components';
import Close from './Close';

const StationInfoWrapper = styled.div`
  width: calc(100vw - 40px);
  padding: 20px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

const StationName = styled.h1`
  font-size: 16px;
  margin-top: 0;
`;

const StationDetail = styled.div`
  font-weight: 100;
`;

const DirectionsButton = styled.a`
  text-transform: uppercase;
  float: right;
  color: #00d390;
  cursor: pointer;
`;

const StationInfo = ({
  selectedStation,
  setSelectedStation,
  setShowTravelModeSelection,
}) => (
  <StationInfoWrapper>
    <Header>
      <StationName>{selectedStation.name}</StationName>
      <Close onClose={() => setSelectedStation(null)} />
    </Header>
    <StationDetail>{`🔧 mechanical: ${selectedStation.mechanicalBikes}`}</StationDetail>
    <StationDetail>{`⚡️ electric: ${selectedStation.ebikes}`}</StationDetail>
    <StationDetail>{`🆓 spaces: ${selectedStation.availableDocks}`}</StationDetail>
    <DirectionsButton
      onClick={() => setShowTravelModeSelection(true)}
      role="button"
    >
      directions
    </DirectionsButton>
  </StationInfoWrapper>
);

export default StationInfo;
