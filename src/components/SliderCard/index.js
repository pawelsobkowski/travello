import { useRef } from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';
import Variants from '../../variants/home';
import { useSliderStateContext } from '../../context/sliderContext';

const getTranslateX = (element) => {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
};

const SliderCard = ({ name, coordinates, background, sliderStatus, cardNumber }) => {
  const state = useSliderStateContext();
  const currentCard = state.order.findIndex((el) => el === cardNumber);
  const card = useRef(null);
  const trans = useRef(0);

  return (
    <Styled.Wrapper
      initial="hidden"
      animate="visible"
      custom={trans.current}
      variants={Variants.nextSliderCard(sliderStatus.previousPlace, state.direction, currentCard)}
      onAnimationComplete={() => {
        trans.current = getTranslateX(card.current);
      }}
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
