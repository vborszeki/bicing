import styled from 'styled-components';

const styles = {
  station: { color: '#fa424c', opacity: 0.4, zIndex: 1 },
  bike: { color: 'transparent', opacity: 1, zIndex: 0 },
  location: { color: '#694ffe', opacity: 1, zIndex: 2 },
};

const Marker = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.size / -2}px;
  top: ${(props) => props.size / -2}px;
  border: 1px solid
    ${(props) =>
      props.type === 'location' ? styles.location.color : styles.station.color};
  border-radius: ${(props) => props.size}px;
  background-color: ${(props) => styles[props.type].color};
  opacity: ${(props) => styles[props.type].opacity};
  z-index: ${(props) => styles[props.type].zIndex};
  cursor: pointer;
`;

export default Marker;
