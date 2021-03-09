import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding: 0 1rem;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    height: 8rem;
    padding: 0 2rem;
  }
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
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
  background-color: ${({ theme }) => theme.colors.grey_063};
  color: ${({ theme }) => theme.colors.white};
  transition: background 0.2s;
  outline: none;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.grey_040};
  }
`;

const Styled = {
  Header,
  ButtonsWrapper,
  SignInButton,
};

export default Styled;
