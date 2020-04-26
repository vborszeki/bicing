import React from 'react';
import { useSpring, animated } from 'react-spring';
import Station from './Station';
import Bikes from './Bikes';

const StationMarker = ({
  station,
  selected,
  setSelectedStation,
  showElectricBikes
}) => {
  const style = useSpring({
    config: { friction: 3, tension: 200 },
    transform: 'scale(1.1)',
    from: { transform: 'scale(1)' }
  });

  return (
    <animated.div
      style={style}
      onClick={() => {
        setSelectedStation(station);
      }}
    >
      <Station
        selected={selected}
        stationInfo={station}
        showElectricBikes={showElectricBikes}
      />
      <Bikes
        selected={selected}
        stationInfo={station}
        showElectricBikes={showElectricBikes}
      />
    </animated.div>
  );
};

export default StationMarker;
