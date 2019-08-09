import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 50px;
`;

const Loader = () => {
  const style = useSpring({
    config: { friction: 0, tension: 60 },
    transform: 'scale(1.1)',
    from: { transform: 'scale(1)' }
  });

  return (
    <Wrapper style={style}>
      <span role="img" aria-label="bike">
        🚲
      </span>
    </Wrapper>
  );
};

export default Loader;
