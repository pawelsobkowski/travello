import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <>
    <header>Header</header>
    {children}
  </>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Header;
