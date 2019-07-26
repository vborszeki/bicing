import React from 'react';
import Station from './Station';
import Bikes from './Bikes';

const StationInfo = ({ station }) => (
  <>
    <Station stationInfo={station} />
    <Bikes stationInfo={station} />
  </>
);

export default StationInfo;
