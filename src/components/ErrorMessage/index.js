import PropTypes from 'prop-types';
import Styled from './styles';

const ErrorMessage = ({ children }) => <Styled.Message>{children}</Styled.Message>;

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

ErrorMessage.defaultProps = { children: '' };

export default ErrorMessage;
