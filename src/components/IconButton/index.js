import PropTypes from 'prop-types';
import Styled from './styles';
import { ReactComponent as Avatar } from '../../assets/icon/avatar.svg';

const IconButton = ({ icon, avatar, variant, isLink, ...rest }) => (
  <Styled.Button type="button" variant={variant} {...rest}>
    {avatar ? <Styled.AvatarBox avatar={avatar} alt="" /> : icon}
  </Styled.Button>
);

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  avatar: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  isLink: PropTypes.bool,
};

IconButton.defaultProps = {
  icon: <Avatar />,
  avatar: '',
  variant: 'filled',
  isLink: false,
};

export default IconButton;
