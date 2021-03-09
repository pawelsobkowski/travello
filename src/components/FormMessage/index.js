import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from './styles';

const FormMessage = ({ children, to, linkLabel }) => (
  <Styled.Message>
    {children}&nbsp;
    <Styled.Link as={Link} to={to}>
      {linkLabel}
    </Styled.Link>
  </Styled.Message>
);

FormMessage.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};

export default FormMessage;
