import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from '../Map/Map';
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
      <Map stations={stations} />
      <GlobalStyle />
    </>
  );
};

export default App;
