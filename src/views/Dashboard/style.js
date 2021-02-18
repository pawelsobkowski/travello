import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin-top: calc(70px - 1em);
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.black_087};
  margin: 0;
`;

const Styled = {
  Container,
  Title,
};

export default Styled;
