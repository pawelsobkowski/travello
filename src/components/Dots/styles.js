import styled from 'styled-components';
import { motion } from 'framer-motion';

const DotsContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const DotsWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dot = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.grey_063};
`;

const Line = styled.div`
  width: 0.15rem;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.grey_063};
`;

const Styled = {
  DotsContainer,
  DotsWrapper,
  Dot,
  Line,
};

export default Styled;
