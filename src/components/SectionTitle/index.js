import PropTypes from 'prop-types';
import Styled from './styles';

const SectionTitle = ({ children }) => <Styled.Title>{children}</Styled.Title>;

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
