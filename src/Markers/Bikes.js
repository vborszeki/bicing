import React from 'react';
import Marker from './Marker';

const Bikes = ({ stationInfo, selected, showElectricBikes }) => {
  const numberOfBikes = showElectricBikes
    ? stationInfo.ebikes
    : stationInfo.mechanicalBikes + stationInfo.ebikes;
  const hasBikes = numberOfBikes > 0;

  if (!hasBikes) return null;

  return <Marker type="bike" size={numberOfBikes * 1.5} selected={selected} />;
};

export default Bikes;
