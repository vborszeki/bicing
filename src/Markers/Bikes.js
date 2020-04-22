import React from 'react';
import Marker from './Marker';

const Bikes = ({ stationInfo, selected }) => {
  const hasBikes = stationInfo.mechanicalBikes + stationInfo.ebikes > 0;

  return hasBikes ? (
    <Marker
      type="bike"
      size={(stationInfo.mechanicalBikes + stationInfo.ebikes) * 1.5}
      selected={selected}
    />
  ) : null;
};

export default Bikes;
