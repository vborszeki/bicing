import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;
  font-size: 60px;
`;

const Loader = () => {
  const style = useSpring({
    config: { friction: 0, tension: 5 },
    opacity: 0.5,
    from: { opacity: 1 }
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
