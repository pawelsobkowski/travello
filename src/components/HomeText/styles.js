import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const TextWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;

  ${({ isDescription }) =>
    isDescription &&
    css`
      margin: 0.5rem 0 1rem;
    `}
`;

const Text = styled(motion.p)`
  font-size: 1.3rem;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.7rem;
  }

  ${({ isTitle }) =>
    isTitle &&
    css`
      font-size: 4rem;
      text-transform: uppercase;
      line-height: 100%;

      @media (min-width: ${({ theme }) => theme.breakingPoints.mobile}) {
        font-size: 6rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
        font-size: 7.8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
        font-size: 6rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
        font-size: 7rem;
      }
    `}

  ${({ isHidden }) =>
    isHidden &&
    css`
      z-index: -1;
      visibility: hidden;
      position: relative;
    `}
`;
const Styled = { TextWrapper, Text };

export default Styled;
