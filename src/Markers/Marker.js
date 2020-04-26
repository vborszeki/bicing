import styled from 'styled-components';

const styles = {
  station: { color: '#fa424c', opacity: 0.4, zIndex: 1 },
  bike: { color: 'transparent', opacity: 1, zIndex: 0 },
  location: { color: '#694ffe', opacity: 1, zIndex: 2 },
  search: { color: '#1fbaf6' },
  selected: { color: '#ffbe30' }
};

const Marker = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.size / -2}px;
  top: ${props => props.size / -2}px;
  border: 1px solid
    ${props => {
      if (props.selected) {
        return styles.selected.color;
      } else if (props.type === 'search') {
        return styles.search.color;
      } else if (props.type === 'location') {
        return styles.location.color;
      } else {
        return styles.station.color;
      }
    }}
      
  border-radius: ${props => props.size}px;
  background-color: ${props =>
    props.selected ? styles.selected.color : styles[props.type].color};
  opacity: ${props => styles[props.type].opacity};
  z-index: ${props => styles[props.type].zIndex};
  cursor: pointer;
`;

export default Marker;
