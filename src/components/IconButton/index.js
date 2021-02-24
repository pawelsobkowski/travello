import PropTypes from 'prop-types';
import Styled from './styles';
import { ReactComponent as Avatar } from '../../assets/icon/avatar.svg';

const IconButton = ({ icon, avatar, ...rest }) => (
  <Styled.Button type="button" {...rest}>
    {avatar ? <Styled.AvatarBox avatar={avatar} alt="" /> : icon}
  </Styled.Button>
);

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  avatar: PropTypes.string,
};

IconButton.defaultProps = {
  icon: <Avatar />,
  avatar: '',
};

export default IconButton;
