import React from 'react';
import Marker from './Marker';

const Station = ({ stationInfo, onStationClick }) => (
  <Marker
    type="station"
    size={stationInfo.capacity * 1.5}
    onClick={() =>
      onStationClick({
        name: stationInfo.name,
        capacity: stationInfo.capacity,
        mechanicalBikes: stationInfo.mechanicalBikes,
        ebikes: stationInfo.ebikes
      })
    }
  />
);

export default Station;
