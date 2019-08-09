import React from 'react';
import Marker from './Marker';

const Bikes = ({ stationInfo }) => (
  <Marker
    type="bike"
    size={(stationInfo.mechanicalBikes + stationInfo.ebikes) * 1.5}
  />
);

export default Bikes;
