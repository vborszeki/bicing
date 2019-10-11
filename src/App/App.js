import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from '../Map/Map';
import Drawer from '@material-ui/core/Drawer';
import StationInfo from '../StationInfo/StationInfo';
import Loader from '../Loader/Loader';
import useStations from './useStations';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const stations = useStations();
  const isLoading = stations.length === 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Map stations={stations} setSelectedStation={setSelectedStation} />
          {selectedStation && (
            <Drawer
              anchor="bottom"
              open={Boolean(selectedStation)}
              onClose={() => setSelectedStation(null)}
            >
              <StationInfo selectedStation={selectedStation} />
            </Drawer>
          )}
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
