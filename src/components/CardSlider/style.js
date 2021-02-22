import styled from 'styled-components';

const List = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  list-style-type: none;

  padding: 0;
`;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.black_087};
`;

const Title = styled.h1`
  width: 100%;
  margin: 0;

  font-size: 2.5rem;
  font-weight: 500;
`;

const Menu = styled(List)`
  margin: 0.4rem 0;
`;

const MenuElement = styled.li`
  width: fit-content;
  margin-right: 2rem;

  font-size: 1.6rem;
`;

const ListElement = styled.li`
  width: auto;
  margin: 0 1rem;
`;

const Section = styled.div`
  width: 100%;

  overflow-x: auto;
`;

const Styled = {
  Container,
  Title,
  Menu,
  MenuElement,
  Section,
  List,
  ListElement,
};

export default Styled;
