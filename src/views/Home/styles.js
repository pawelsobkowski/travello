import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  padding-top: 60px;
  overflow: hidden;
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

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    grid-template-columns: 45% 55%;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.desktop}) and (orientation: portrait) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
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
    grid-gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.large_desktop}) {
    max-width: 600px;
    height: 80px;
    grid-gap: 30px;
  }
`;

const SliderWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 80% 20%;
  position: relative;
  align-self: center;
  min-height: 250px;

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    max-height: 480px;
    grid-template-rows: 85% 15%;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    max-height: 550px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.very_large_desktop}) {
    max-height: 650px;
  }
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
  padding-left: 0.8rem;
`;

const Styled = {
  Main,
  Wrapper,
  Content,
  ButtonsWrapper,
  TextContainer,
  SliderWrapper,
  Slider,
  Controls,
  ControlsWrapper,
};

export default Styled;
