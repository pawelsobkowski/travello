import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary_blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    width: 240px;
    height: 50px;
    font-size: 24px;
    border-radius: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    width: 270px;
    height: 60px;
    font-size: 30px;
  }

  ${({ isPrimary, theme }) =>
    !isPrimary &&
    css`
      background-color: ${hexToRgba(theme.colors.lightgrey, '0.6')};
    `}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;

const Text = styled.span`
  justify-self: start;
  padding-left: 10px;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    padding-left: 15px;
  }
`;

const Svg = styled.div`
  display: flex;
  justify-content: center;

  & > svg {
    width: 22px;
    height: 22px;

    @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
      width: 32px;
      height: 32px;
    }

    @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
      width: 37px;
      height: 37px;
    }
  }

  & > svg > * {
    stroke: ${({ theme }) => theme.colors.white};
    stroke-width: 1px;
  }
`;

const Styled = {
  Button,
  Wrapper,
  Text,
  Svg,
};

export default Styled;
