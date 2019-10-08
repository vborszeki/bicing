import React from 'react';
import Marker from './Marker';

const Station = ({ stationInfo }) => (
  <Marker type="station" size={stationInfo.capacity * 1.5} />
);

export default Station;
