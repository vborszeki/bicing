import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import secretKeys from '../secrets.json';
import mapStyles from './mapStyles.json';
import StationInfo from '../Markers/StationInfo';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  clickableIcons: false
};

const Map = props => {
  const { center, zoom, stations, setSelectedStation } = props;

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: secretKeys.apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={mapOptions}
      >
        {stations &&
          stations.map((station, i) => (
            <StationInfo
              key={i}
              station={station}
              lat={station.lat}
              lng={station.lon}
              setSelectedStation={setSelectedStation}
            />
          ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

Map.defaultProps = {
  center: {
    lat: 41.39,
    lng: 2.17
  },
  zoom: 13.5
};

export default Map;
