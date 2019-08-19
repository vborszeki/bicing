import React from 'react';
import { useSpring, animated } from 'react-spring';
import Station from './Station';
import Bikes from './Bikes';

const StationInfo = ({ station, onStationClick }) => {
  const style = useSpring({
    config: { friction: 3, tension: 200 },
    transform: 'scale(1.1)',
    from: { transform: 'scale(1)' }
  });

  return (
    <animated.div style={style} className="kiskutya">
      <Station stationInfo={station} onStationClick={onStationClick} />
      <Bikes stationInfo={station} />
    </animated.div>
  );
};

export default StationInfo;
