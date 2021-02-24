import PropTypes from 'prop-types';
import Styled from './style';
import Card from '../Card';

const CardsSection = ({ title }) => (
  <Styled.Container>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Menu>
      <Styled.MenuElement key={1}>All</Styled.MenuElement>
      <Styled.MenuElement key={2}>Cities</Styled.MenuElement>
      <Styled.MenuElement key={3}>Places</Styled.MenuElement>
      <Styled.MenuElement key={4}>Nature</Styled.MenuElement>
    </Styled.Menu>
    <Styled.Section>
      <Styled.List>
        <Styled.ListElement key={5}>
          <Card />
        </Styled.ListElement>
        <Styled.ListElement key={6}>
          <Card />
        </Styled.ListElement>
        <Styled.ListElement key={7}>
          <Card />
        </Styled.ListElement>
      </Styled.List>
    </Styled.Section>
  </Styled.Container>
);

CardsSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardsSection;
