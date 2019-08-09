import React from 'react';
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
  const stations = useStations();

  if (stations.length === 0) return <Loader />;

  return (
    <>
      <Map stations={stations} />
      <GlobalStyle />
    </>
  );
};

export default App;
