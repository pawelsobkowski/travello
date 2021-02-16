import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 150px;
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

const SignInButton = styled(Link)`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 1.7rem;
  text-decoration: none;
  font-weight: 500;
  background-color: ${({ theme }) => hexToRgba(theme.colors.grey, '0.9')};
  color: ${({ theme }) => theme.colors.white};

  /* & > a {
    width: 100%;
    height: 100%;
    } */
`;

const Styled = {
  Header,
  ButtonsWrapper,
  SignInButton,
};

export default Styled;
