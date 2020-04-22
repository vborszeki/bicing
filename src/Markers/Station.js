import React from 'react';
import Marker from './Marker';

const Station = ({ stationInfo, selected }) => (
  <Marker
    type="station"
    size={stationInfo.capacity * 1.5}
    selected={selected}
  />
);

export default Station;
