import PropTypes from 'prop-types';
import useDimensions from 'react-use-dimensions';
import { motion, AnimatePresence } from 'framer-motion';
import Styled from './styles';
import Variants from '../../variants/home';
import { useSliderStateContext } from '../../context/sliderContext';

const HomeText = ({ children, isTitle, id }) => {
  const state = useSliderStateContext();
  const [dimensionsEl, dimensions] = useDimensions();

  return (
    <Styled.TextWrapper isDescription={!isTitle}>
      <Styled.Text ref={dimensionsEl} isTitle={isTitle} isHidden>
        {children}
      </Styled.Text>
      <AnimatePresence custom={state.direction} initial={false}>
        <Styled.Text
          variants={dimensions.height && Variants.changeText(dimensions.height)}
          custom={state.direction}
          key={id}
          initial="enter"
          animate="center"
          exit="exit"
          isTitle={isTitle}
          as={isTitle ? motion.h1 : motion.p}
        >
          {children}
        </Styled.Text>
      </AnimatePresence>
    </Styled.TextWrapper>
  );
};

HomeText.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isTitle: PropTypes.bool,
};

HomeText.defaultProps = {
  isTitle: false,
};

export default HomeText;
