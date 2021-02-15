import PropTypes from 'prop-types';
import Styled from './styles';

const Button = ({ children, isPrimary, icon, ...rest }) => (
  <Styled.Button isPrimary={isPrimary} {...rest}>
    <Styled.Wrapper>
      <Styled.Text>{children}</Styled.Text>
      <Styled.Svg>{icon}</Styled.Svg>
    </Styled.Wrapper>
  </Styled.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isPrimary: PropTypes.bool,
};

Button.defaultProps = {
  isPrimary: true,
};

export default Button;
