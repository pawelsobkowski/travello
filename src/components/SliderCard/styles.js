import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  width: 45%;
  height: 80%;
  flex-shrink: 0;
  padding: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: 220px;
  max-height: 310px;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    max-width: 250px;
    max-height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    height: 90%;
    max-width: 300px;
    max-height: 420px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    max-height: 500px;
    padding: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.very_large_desktop}) {
    max-width: 330px;
    max-height: 550px;
  }
`;

const PlaceName = styled.h2`
  font-size: 1.4rem;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.9rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.large_desktop}) {
    font-size: 2.2rem;
  }
`;

const Coordinates = styled.p`
  font-size: 1.1rem;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.large_desktop}) {
    font-size: 1.6rem;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  overflow: hidden;
`;

const BookmarkWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  & svg > * {
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ isBookmarked }) =>
    isBookmarked &&
    css`
      & svg > * {
        stroke: ${({ theme }) => theme.colors.primary_blue};
        fill: ${({ theme }) => theme.colors.primary_blue};
      }
    `}
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: fill;
`;

const Styled = {
  Wrapper,
  PlaceName,
  Coordinates,
  PhotoWrapper,
  Photo,
  BookmarkWrapper,
};

export default Styled;
