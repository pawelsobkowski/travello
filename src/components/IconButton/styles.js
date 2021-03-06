import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.grey_063};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & > svg {
    width: 60%;
    height: 60%;
  }

  & > svg > * {
    stroke: ${({ theme }) => theme.colors.white};
    fill: none;
  }

  ${({ variant }) =>
    variant === 'outlined' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.grey_063};
      background: transparent;

      & > svg {
        width: 45%;
        height: 45%;
      }
    `}
`;

const AvatarBox = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ avatar }) => avatar}) center no-repeat;
  background-size: cover;
`;

const Styled = {
  Button,
  AvatarBox,
};

export default Styled;
