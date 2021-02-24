import Styled from './style';
import CardsSection from '../../components/CardSlider';

const Dashboard = () => (
  <Styled.Container>
    <CardsSection title="Discover" />
    <CardsSection title="Popular" />
  </Styled.Container>
);

export default Dashboard;
