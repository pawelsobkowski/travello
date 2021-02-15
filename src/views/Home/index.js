import Button from '../../components/ButtonWIthIcon';
import { ReactComponent as ArrowRight } from '../../assets/icon/arrow_right.svg';
import { ReactComponent as Compass } from '../../assets/icon/compass.svg';

const Home = () => (
  <>
    <Button type="button" icon={<ArrowRight />} isPrimary={false}>
      Read more
    </Button>
    <Button type="button" icon={<Compass />}>
      Explore
    </Button>
  </>
);

export default Home;
