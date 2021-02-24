import styled from 'styled-components';
import { motion } from 'framer-motion';

const Main = styled.main`
  height: 100vh;
  padding-top: 60px;
  overflow: hidden;
  background: url(${({ background }) => background}) center no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    padding-top: 70px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    padding: 5px;
    grid-template-columns: 10% 90%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    grid-template-rows: 100%;
    grid-template-columns: 55% 45%;
  }
`;

const TextWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  text-transform: uppercase;
  line-height: 100%;
  position: absolute;
  top: 100%;
  left: 0;

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
`;

const DescriptionWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin: 20px 0;
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  position: absolute;
  top: 100%;
  left: 0;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.7rem;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  height: 45px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    max-width: 450px;
    height: 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    max-width: 500px;
    height: 70px;
  }
`;

const DotsWrapper = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    display: block;
  }
`;

const SliderWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 80% 20%;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
`;

const ControlsWrapper = styled(Slider)`
  justify-content: space-between;
`;

const Controls = styled.div`
  width: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
`;

const Styled = {
  Main,
  Wrapper,
  Content,
  ButtonsWrapper,
  TextWrapper,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Description,
  DotsWrapper,
  SliderWrapper,
  Slider,
  Controls,
  ControlsWrapper,
};

export default Styled;
