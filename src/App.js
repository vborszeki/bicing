import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from './Map';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => (
  <>
    <Map />
    <GlobalStyle />
  </>
);

export default App;
