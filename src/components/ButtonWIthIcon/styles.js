import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary_blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 2.2rem;
    padding-left: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    font-size: 2.7rem;
  }

  ${({ isPrimary, theme }) =>
    !isPrimary &&
    css`
      background-color: ${hexToRgba(theme.colors.lightgrey, '0.6')};
    `}
`;

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 75% 25%;
  align-items: center;
`;

const Text = styled.span`
  justify-self: start;
`;

const Svg = styled.div`
  position: relative;
  height: 100%;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    transform: translate(-50%, -50%);
  }

  & > svg > * {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

const Styled = {
  Button,
  Wrapper,
  Text,
  Svg,
};

export default Styled;
