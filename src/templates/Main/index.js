import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

const Main = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Main;
