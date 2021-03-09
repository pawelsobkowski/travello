import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  background: ${({ theme, isBackground }) =>
    isBackground ? theme.colors.grey_063 : 'transparent'};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.2s;
  outline: none;

  & > svg {
    width: 60%;
    height: 60%;
  }

  & > svg > * {
    stroke: ${({ theme }) => theme.colors.white};
    fill: ${({ $isIconFilled, theme }) => ($isIconFilled ? theme.colors.white : 'none')};
  }

  :hover,
  :focus {
    background: ${({ theme, isBackground }) =>
      isBackground ? theme.colors.grey_040 : theme.colors.grey_087};
  }

  ${({ avatar }) =>
    avatar &&
    css`
      background: url(${avatar}) center no-repeat;
      background-size: cover;

      & > svg > * {
        stroke: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ $isOutlined }) =>
    $isOutlined &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.grey_063};
      background: transparent;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => theme.colors.grey_020};
      }

      & > svg {
        width: 45%;
        height: 45%;
      }
    `}
`;

const Styled = {
  Button,
};

export default Styled;
