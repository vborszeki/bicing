import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import secretKeys from '../secrets.json';
import mapStyles from './mapStyles.json';
import StationMarker from '../Markers/StationMarker';
import LocationMarker from '../Markers/LocationMarker';
import SearchResultMarker from '../Markers/SearchResultMarker';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  clickableIcons: false,
  gestureHandling: 'greedy'
};

const Map = ({
  center,
  zoom,
  stations,
  selectedStation,
  setSelectedStation,
  showLocation,
  location,
  searchLocation,
  showElectricBikes
}) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: secretKeys.apiKey }}
      center={center}
      zoom={zoom}
      options={mapOptions}
    >
      {stations &&
        stations.map((station, i) => (
          <StationMarker
            key={i}
            station={station}
            lat={station.lat}
            lng={station.lng}
            selected={station === selectedStation}
            setSelectedStation={setSelectedStation}
            showElectricBikes={showElectricBikes}
          />
        ))}
      {showLocation && <LocationMarker lat={location.lat} lng={location.lng} />}
      {searchLocation && (
        <SearchResultMarker lat={searchLocation.lat} lng={searchLocation.lng} />
      )}
    </GoogleMapReact>
  </Wrapper>
);

export default Map;
