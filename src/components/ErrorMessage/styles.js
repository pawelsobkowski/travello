import styled from 'styled-components';

const Message = styled.p`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.8rem;
  }
`;

const Styled = { Message };

export default Styled;
