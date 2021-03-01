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
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const MechanicalBikeWrapper = styled.div`
  transform: translate(10px);
`;

const ElectricBikeWrapper = styled.div`
  transform: translate(-10px);
`;

const BikeTypeToggle = ({ showElectricBikes, setShowElectricBikes }) => {
  const toggleBikeType = () => {
    setShowElectricBikes(!showElectricBikes);
  };

  const MechanicalBikeIcon = () => (
    <span role="img" aria-label="mechanical">
      🔧
    </span>
  );

  const ElectricBikeIcon = () => (
    <span role="img" aria-label="electric">
      ⚡️
    </span>
  );

  return (
    <Wrapper role="button" onClick={toggleBikeType}>
      {showElectricBikes ? (
        <ElectricBikeIcon />
      ) : (
        <>
          <MechanicalBikeWrapper>
            <MechanicalBikeIcon />
          </MechanicalBikeWrapper>
          <ElectricBikeWrapper>
            <ElectricBikeIcon />
          </ElectricBikeWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default BikeTypeToggle;
