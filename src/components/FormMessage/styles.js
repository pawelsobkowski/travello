import styled from 'styled-components';

const Message = styled.p`
  color: ${({ theme }) => theme.colors.white_063};
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.6rem;
  }
`;

const Link = styled(Message)`
  color: ${({ theme }) => theme.colors.primary_blue};
  display: inline;
  font-weight: bold;
`;

const Styled = { Message, Link };

export default Styled;
