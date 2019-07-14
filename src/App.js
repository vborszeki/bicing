import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from './Map';
import useStations from './useStations';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  const stations = useStations();

  return (
    <>
      <Map />
      <GlobalStyle />
    </>
  );
};

export default App;
