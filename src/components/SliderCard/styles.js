import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  width: 40%;
  height: 80%;
  flex-shrink: 0;
  margin: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const PlaceName = styled.h2`
  font-size: 1.4rem;
`;

const Coordinates = styled.p`
  font-size: 1.1rem;
`;

const Photo = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: fill;
`;

const Styled = {
  Wrapper,
  PlaceName,
  Coordinates,
  Photo,
};

export default Styled;
