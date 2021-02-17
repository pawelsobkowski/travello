import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 45px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    max-width: 500px;
    height: 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.laptop}) {
    max-width: 600px;
    height: 70px;
  }
`;

const Styled = {
  Wrapper,
};

export default Styled;
