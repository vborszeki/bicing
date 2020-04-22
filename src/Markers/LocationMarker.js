import React from 'react';
import { useSpring, animated } from 'react-spring';
import Marker from './Marker';

const LocationMarker = () => {
  const style = useSpring({
    config: { friction: 0, tension: 5 },
    transform: 'scale(1.1)',
    from: { transform: 'scale(1)' },
  });

  return (
    <animated.div style={style}>
      <Marker type="location" size="16" />
    </animated.div>
  );
};

export default LocationMarker;
