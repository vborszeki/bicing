import React from 'react';
import Marker from './Marker';

const Bikes = ({ stationInfo }) => (
  <Marker
    type="bike"
    size={(stationInfo.mechanicalBikes + stationInfo.ebikes) * 2}
  />
);

export default Bikes;
