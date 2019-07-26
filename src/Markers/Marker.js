import styled from 'styled-components';

const Marker = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.size / -2}px;
  top: ${props => props.size / -2}px;
  border: 1px solid #e91e63;
  border-radius: ${props => props.size}px;
  background-color: ${props =>
    props.type === 'station' ? '#e91e63' : 'transparent'};
  opacity: ${props => (props.type === 'station' ? 0.4 : 1)};
  z-index: ${props => (props.type === 'station' ? 0 : 1)};
`;

export default Marker;
