import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`;

const LocationButton = ({ setLocation, setZoom, setShowLocation }) => {
  const getLocation = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

  const handleClick = async () => {
    try {
      const {
        coords: { latitude: lat, longitude: lng }
      } = await getLocation();
      const location = { lat, lng };

      setLocation(location);
      setZoom(17);
      setShowLocation(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper onClick={handleClick} role="button">
      <span role="img" aria-label="locate">
        📌
      </span>
    </Wrapper>
  );
};

export default LocationButton;
