import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Styled from './styles';
import IconButton from '../../components/IconButton';
import { ReactComponent as Search } from '../../assets/icon/search.svg';
import { ReactComponent as Close } from '../../assets/icon/close.svg';

const Header = ({ children, variant }) => {
  const [isLoggedIn] = useState(false);
  const { pathname } = useLocation();
  const baseUrl = ['home', 'details', 'dashboard'];
  const splitedPathname = pathname.split('/');

  return (
    <>
      <Styled.Header variant={variant}>
        <div />
        {variant === 'close' ? (
          <IconButton
            isLink
            to={`/${baseUrl.includes(splitedPathname[1]) && splitedPathname[1]}`}
            isOutlined
            icon={<Close />}
          />
        ) : (
          <>
            <Styled.ButtonsWrapper>
              <Styled.ButtonWrapper>
                <IconButton type="button" icon={<Search />} />
              </Styled.ButtonWrapper>
              {isLoggedIn ? (
                <Styled.ButtonWrapper side="left">
                  <IconButton isUser />
                </Styled.ButtonWrapper>
              ) : (
                <Styled.SignInButton
                  to={`/${
                    baseUrl.includes(splitedPathname[1]) ? splitedPathname[1] : 'home'
                  }/signin`}
                >
                  Sign in
                </Styled.SignInButton>
              )}
            </Styled.ButtonsWrapper>
          </>
        )}
      </Styled.Header>
      {children}
    </>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['default', 'close']),
};

Header.defaultProps = {
  variant: 'default',
};

export default Header;
