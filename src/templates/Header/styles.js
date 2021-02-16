import styled from 'styled-components';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 2rem;
  z-index: 10000;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    height: 70px;
    grid-template-columns: 1fr 150px;
  }
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Styled = {
  Header,
  ButtonsWrapper,
};

export default Styled;
