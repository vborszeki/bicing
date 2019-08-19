import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from '../Map/Map';
import Loader from '../Loader/Loader';
import useStations from './useStations';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  const [selectedStation, setSelectedStation] = useState({});
  const stations = useStations();
  const isLoading = stations.length === 0;

  const handleStationClick = stationInfo => {
    setSelectedStation(stationInfo);
    console.log(selectedStation);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Map stations={stations} onStationClick={handleStationClick} />
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
