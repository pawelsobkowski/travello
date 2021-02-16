import PropTypes from 'prop-types';
import Styled from './styles';
import IconButton from '../../components/IconButton';
import { ReactComponent as Search } from '../../assets/icon/search.svg';

const Header = ({ children }) => (
  <>
    <Styled.Header>
      <div />
      <Styled.ButtonsWrapper>
        <IconButton icon={<Search />} />
        <IconButton avatar="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </Styled.ButtonsWrapper>
    </Styled.Header>
    {children}
  </>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Header;
