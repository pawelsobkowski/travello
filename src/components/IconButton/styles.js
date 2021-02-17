import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => hexToRgba(theme.colors.grey, '0.7')};
  color: ${({ theme }) => hexToRgba(theme.colors.white)};
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
