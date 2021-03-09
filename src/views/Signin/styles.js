import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: auto;
  padding: 1.2rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.white_063};
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.7rem;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white_063};
  font-size: 1rem;
  text-align: center;
  margin: 2.5rem 0;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.4rem;
  }
`;

const Styled = {
  Text,
  FormContainer,
  Description,
};

export default Styled;
