import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from './styles';
import { ReactComponent as Avatar } from '../../assets/icon/avatar.svg';

const IconButton = ({ icon, isUser, isLink, isIconFilled, isOutlined, ...rest }) => {
  const avatar = null;

  return (
    <Styled.Button
      as={isLink ? Link : 'button'}
      avatar={isUser ? avatar : null}
      $isOutlined={isOutlined}
      $isIconFilled={isUser || isIconFilled}
      {...rest}
    >
      {(!isUser || (isUser && !avatar)) && icon}
    </Styled.Button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isUser: PropTypes.bool,
  isLink: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isIconFilled: PropTypes.bool,
};

IconButton.defaultProps = {
  icon: <Avatar />,
  isUser: false,
  isLink: false,
  isOutlined: false,
  isIconFilled: false,
};

export default IconButton;
