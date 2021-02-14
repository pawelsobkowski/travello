import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import GlobalStyles from '../../theme/GlobalStyles';

const Main = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Main;
