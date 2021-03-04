import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import Styled from './styles';

const HomeBackground = ({ background }) => (
  <>
    <Styled.Background />
    <AnimatePresence initial={false}>
      <Styled.BackgroundImg
        background={background}
        key={background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </AnimatePresence>
  </>
);

HomeBackground.propTypes = {
  background: PropTypes.string.isRequired,
};

export default HomeBackground;
