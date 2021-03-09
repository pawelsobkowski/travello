import PropTypes from 'prop-types';
import useDimensions from 'react-use-dimensions';
import Styled from './styles';
import Variants from '../../variants/home';
import { useSliderStateContext } from '../../context/sliderContext';
import { ReactComponent as Bookmark } from '../../assets/icon/bookmark.svg';
import IconButton from '../IconButton';

const SliderCard = ({ name, coordinates, background, cardNumber, isBookmarked }) => {
  const state = useSliderStateContext();
  const currentCard = state.order.findIndex((el) => el === cardNumber);

  const [card, cardDimensions] = useDimensions();

  return (
    <Styled.Wrapper
      initial="hidden"
      animate="visible"
      variants={Variants.nextSliderCard(
        state.previous,
        state.direction,
        currentCard,
        cardDimensions.width
      )}
      ref={card}
    >
      <Styled.PlaceName>{name}</Styled.PlaceName>
      <Styled.Coordinates>{coordinates}</Styled.Coordinates>
      <Styled.PhotoWrapper>
        <Styled.BookmarkWrapper isBookmarked={isBookmarked}>
          <IconButton tabIndex="-1" icon={<Bookmark />} />
        </Styled.BookmarkWrapper>
        <Styled.Photo src={background} alt={name} />
      </Styled.PhotoWrapper>
    </Styled.Wrapper>
  );
};

SliderCard.propTypes = {
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  cardNumber: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool,
};

SliderCard.defaultProps = {
  isBookmarked: false,
};

export default SliderCard;
