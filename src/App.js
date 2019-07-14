import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from './Map';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    try {
      const stationInfoResponse = await fetch(
        'https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information'
      );
      const stationInfoData = await stationInfoResponse.json();
      const stationInfo = stationInfoData.data.stations.map(station => ({
        id: station.station_id,
        name: station.name,
        lat: station.lat,
        lon: station.lon,
        capacity: station.capacity
      }));

      const stationStatusResponse = await fetch(
        'https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_status'
      );
      const stationStatusData = await stationStatusResponse.json();
      const stationStatus = stationStatusData.data.stations.map(station => ({
        id: station.station_id,
        mechanicalBikes: station.num_bikes_available_types.mechanical,
        ebikes: station.num_bikes_available_types.ebike,
        status: station.status
      }));

      const stations = stationInfo
        .map(info => ({
          ...stationStatus.find(status => status.id === info.id),
          ...info
        }))
        .filter(station => station.status === 'IN_SERVICE');

      setStations(stations);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Map />
      <GlobalStyle />
    </>
  );
};

export default App;
