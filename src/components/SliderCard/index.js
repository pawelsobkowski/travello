import { useRef } from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';
import Variants from '../../variants/home';
import { useSliderStateContext } from '../../context/sliderContext';

const SliderCard = ({ name, coordinates, background, sliderStatus, cardNumber }) => {
  const state = useSliderStateContext();
  const currentCard = state.order.findIndex((el) => el === cardNumber);
  const card = useRef(null);

  return (
    <Styled.Wrapper
      initial="hidden"
      animate="visible"
      variants={Variants.nextSliderCard(sliderStatus.previousPlace, state.direction, currentCard)}
      ref={card}
    >
      <Styled.PlaceName>{name}</Styled.PlaceName>
      <Styled.Coordinates>{coordinates}</Styled.Coordinates>
      <Styled.Photo src={background} alt={name} />
    </Styled.Wrapper>
  );
};

SliderCard.propTypes = {
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  cardNumber: PropTypes.number.isRequired,
  sliderStatus: PropTypes.shape({
    currentPlace: PropTypes.number,
    previousPlace: PropTypes.number,
    direction: PropTypes.number,
  }).isRequired,
};

export default SliderCard;
