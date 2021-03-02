/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Styled from './styles';
import Variants from '../../variants/home';

const Dot = ({ current, index }) => (
  <Styled.Dot
    variants={Variants.changeActiveDot}
    initial="hidden"
    animate={current === index - 1 ? 'visible' : ''}
  >
    <motion.span variants={Variants.changeActiveDotContent}>{index}</motion.span>
  </Styled.Dot>
);

Dot.propTypes = {
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Dot;
