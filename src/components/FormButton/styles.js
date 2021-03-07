import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary_blue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  border: 0;
  transition: background 0.2s;

  & > svg {
    height: 70%;
    margin-right: 0.25rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryblue_087};
  }

  ${({ isSocial }) =>
    isSocial &&
    css`
      background-color: ${({ theme }) => theme.colors.lightblue_050};

      :hover {
        background-color: ${({ theme }) => theme.colors.lightblue_040};
      }
    `}
`;

const Styled = { Button };

export default Styled;
