import PropTypes from 'prop-types';
import Styled from './styles';

const SliderCard = ({ primary, name, coordinates, background }) => (
  <Styled.Wrapper primary={primary}>
    <Styled.PlaceName>{name}</Styled.PlaceName>
    <Styled.Coordinates>{coordinates}</Styled.Coordinates>
    <Styled.Photo src={background} />
  </Styled.Wrapper>
);

SliderCard.propTypes = {
  primary: PropTypes.bool,
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  sliderStatus: PropTypes.shape({
    currentPlace: PropTypes.number,
    previousPlace: PropTypes.number,
    direction: PropTypes.number,
  }).isRequired,
};

SliderCard.defaultProps = {
  primary: false,
};

export default SliderCard;
