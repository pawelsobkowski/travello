import Button from '../../components/ButtonWIthIcon';
import Styled from './styles';
import { ReactComponent as ArrowRight } from '../../assets/icon/arrow_right.svg';
import { ReactComponent as Compass } from '../../assets/icon/compass.svg';

const Home = () => (
  <Styled.Wrapper>
    <Button type="button" icon={<ArrowRight />} isPrimary={false}>
      Read more
    </Button>
    <Button type="button" icon={<Compass />}>
      Explore
    </Button>
  </Styled.Wrapper>
);

export default Home;
