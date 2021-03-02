import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundImg = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: url(${({ background }) => background}) no-repeat center;
  background-size: cover;
  z-index: -1;
`;

const Background = styled(BackgroundImg)`
  background: ${({ theme }) => theme.colors.profile_blue};
`;

const Styled = { Background, BackgroundImg };

export default Styled;
