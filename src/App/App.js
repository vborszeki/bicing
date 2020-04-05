import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from '../Map/Map';
import StationInfo from '../StationInfo/StationInfo';
import Loader from '../Loader/Loader';
import useStations from './useStations';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const stations = useStations();
  const isLoading = stations.length === 0;

  if (isLoading) return <Loader />;

  return (
    <>
      <Map stations={stations} setSelectedStation={setSelectedStation} />
      {selectedStation && (
        <StationInfo
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
        />
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
