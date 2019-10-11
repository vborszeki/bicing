import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StationInfoWrapper = styled.div`
  padding: 20px;
`;

const StationInfo = ({ selectedStation }) => (
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
      {`🆓 spaces: ${selectedStation.availableDocks}`}
    </Typography>
  </StationInfoWrapper>
);

export default StationInfo;
