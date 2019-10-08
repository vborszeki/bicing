import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Map from '../Map/Map';
import Loader from '../Loader/Loader';
import useStations from './useStations';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const StationInfoWrapper = styled.div`
  padding: 20px;
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
          <Drawer
            anchor="bottom"
            open={Boolean(selectedStation)}
            onClose={() => setSelectedStation(null)}
          >
            {selectedStation && (
              <StationInfoWrapper>
                <Typography variant="subtitle1" component="h1" gutterBottom>
                  {selectedStation.name}
                </Typography>
                <Typography component="p">
                  {`🔧 mechanical: ${selectedStation.mechanicalBikes}`}
                </Typography>
                <Typography component="p">
                  {`⚡️ electric: ${selectedStation.ebikes}`}
                </Typography>
                <Typography component="p">
                  {`🆓 spaces: ${selectedStation.capacity -
                    selectedStation.mechanicalBikes -
                    selectedStation.ebikes}`}
                </Typography>
              </StationInfoWrapper>
            )}
          </Drawer>
          <Map stations={stations} setSelectedStation={setSelectedStation} />
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
