import React from 'react';
import Marker from './Marker';

const Station = ({ stationInfo }) => (
  <Marker type="station" size={stationInfo.capacity * 2} />
);

export default Station;
