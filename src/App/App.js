import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from '../Map/Map';
import StationInfo from '../StationInfo/StationInfo';
import LocationButton from '../LocationButton';
import Loader from '../Loader';
import useStations from './useStations';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  const stations = useStations();
  const [selectedStation, setSelectedStation] = useState(null);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState({
    lat: 41.39,
    lng: 2.17,
  });
  const [zoom, setZoom] = useState(13.5);
  const isLoading = stations.length === 0;

  if (isLoading) return <Loader />;

  return (
    <>
      <Map
        stations={stations}
        setSelectedStation={setSelectedStation}
        center={location}
        zoom={zoom}
        showLocation={showLocation}
        location={location}
      />
      <LocationButton
        setLocation={setLocation}
        setZoom={setZoom}
        setShowLocation={setShowLocation}
      />
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
