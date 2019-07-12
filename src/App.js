import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => (
  <>
    <Wrapper>
      <h1>
        <span role="img" aria-label="bike">
          🚲
        </span>
      </h1>
    </Wrapper>
    <GlobalStyle />
  </>
);

export default App;
