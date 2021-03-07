import PropTypes from 'prop-types';
import Styled from './styles';
import { ReactComponent as GoogleIcon } from '../../assets/icon/google.svg';

const FormButton = ({ children, isSocial, socialIcon, ...rest }) => (
  <Styled.Button isSocial={isSocial} {...rest}>
    {isSocial && socialIcon}
    {children}
  </Styled.Button>
);

FormButton.propTypes = {
  children: PropTypes.string.isRequired,
  isSocial: PropTypes.bool,
  socialIcon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

FormButton.defaultProps = { isSocial: false, socialIcon: <GoogleIcon /> };

export default FormButton;
