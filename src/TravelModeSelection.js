import styled from 'styled-components';
import Close from './Close';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  background-color: #fff;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ButtonContainer = styled.div`
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.a`
  font-size: 60px;
  margin-right: ${props => (props.spacer ? '52px' : '0')};
  text-decoration: none;
  cursor: pointer;
`;

const TravelModeSelection = ({
  selectedStation: { lat, lng },
  setShowTravelModeSelection
}) => {
  const getUrl = mode =>
    `https://www.google.com/maps/dir/?api=1&destination=${lat}%2C${lng}&travelmode=${mode}`;

  return (
    <Wrapper>
      <CloseButtonWrapper>
        <Close onClose={() => setShowTravelModeSelection(false)} />
      </CloseButtonWrapper>
      <ButtonContainer>
        <Button href={getUrl('walking')} spacer>
          <span role="img" aria-label="walking">
            🚶🏻‍♂
          </span>
        </Button>
        <Button href={getUrl('bicycling')}>
          <span role="img" aria-label="biking">
            🚴🏻‍♂️
          </span>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default TravelModeSelection;
