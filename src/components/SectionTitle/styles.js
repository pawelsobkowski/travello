import styled from 'styled-components';

const Title = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 4.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 5.8rem;
  }
`;

const Styled = { Title };

export default Styled;
