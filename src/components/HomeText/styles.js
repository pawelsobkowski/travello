import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const TextWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;

  ${({ isDescription }) =>
    isDescription &&
    css`
      max-width: 600px;
      margin-bottom: 3rem;

      @media (min-width: ${({ theme }) => theme.breakingPoints.mobile}) {
        margin-bottom: 6rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.large_desktop}) {
        max-width: 700px;
      }
    `}
`;

const Text = styled(motion.p)`
  font-size: 1.3rem;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.large_desktop}) {
    font-size: 2.3rem;
  }

  ${({ isTitle }) =>
    isTitle &&
    css`
      font-size: 3.8rem;
      text-transform: uppercase;
      line-height: 100%;
      white-space: nowrap;

      @media (min-width: ${({ theme }) => theme.breakingPoints.mobile}) {
        font-size: 6rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
        font-size: 7.8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
        font-size: 5.8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.large_desktop}) {
        font-size: 7rem;
      }

      @media (min-width: ${({ theme }) => theme.breakingPoints.very_large_desktop}) {
        font-size: 8.5rem;
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
