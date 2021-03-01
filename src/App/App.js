import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from '../Map/Map';
import StationInfo from '../StationInfo';
import Search from '../Search';
import LocationButton from '../LocationButton';
import SearchButton from '../SearchButton';
import BikeTypeToggle from '../BikeTypeToggle';
import Loader from '../Loader';
import TravelModeSelection from '../TravelModeSelection';
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
  const [showSearch, setShowSearch] = useState(false);
  const [showTravelModeSelection, setShowTravelModeSelection] = useState(false);
  const [center, setCenter] = useState({
    lat: 41.39,
    lng: 2.17
  });
  const [location, setLocation] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);
  const [showElectricBikes, setShowElectricBikes] = useState(false);
  const [zoom, setZoom] = useState(13.5);
  const isLoading = stations.length === 0;

  useEffect(() => {
    if (location) {
      setCenter(location);
    }
  }, [location]);

  useEffect(() => {
    if (searchLocation) {
      setCenter(searchLocation);
    }
  }, [searchLocation]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Map
        stations={stations}
        selectedStation={selectedStation}
        setSelectedStation={setSelectedStation}
        center={center}
        zoom={zoom}
        showLocation={showLocation}
        location={location}
        searchLocation={searchLocation}
        showElectricBikes={showElectricBikes}
      />
      <BikeTypeToggle
        showElectricBikes={showElectricBikes}
        setShowElectricBikes={setShowElectricBikes}
      />
      <SearchButton setShowSearch={setShowSearch} />
      <LocationButton
        setLocation={setLocation}
        setZoom={setZoom}
        setShowLocation={setShowLocation}
      />
      {selectedStation && (
        <StationInfo
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
          setShowTravelModeSelection={setShowTravelModeSelection}
        />
      )}
      {showSearch && (
        <Search
          setShowSearch={setShowSearch}
          setSearchLocation={setSearchLocation}
          setZoom={setZoom}
        />
      )}
      {showTravelModeSelection && (
        <TravelModeSelection
          selectedStation={selectedStation}
          setShowTravelModeSelection={setShowTravelModeSelection}
        />
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
