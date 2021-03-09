import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import Styled from './styles';
import { ReactComponent as Eye } from '../../assets/icon/eye.svg';
import { ReactComponent as EyeOff } from '../../assets/icon/eye-off.svg';
import IconButton from '../IconButton';

const Input = ({ label, name, isPassword, type, changeType, ...rest }) => (
  <>
    <Styled.Label htmlFor={name}>{label}</Styled.Label>
    <Styled.InputWrapper>
      <Styled.Input placeholder={label} name={name} id={name} type={type} {...rest} />
      {isPassword && (
        <Styled.ShowPasswordWrapper>
          <IconButton
            aria-controls={name}
            aria-expanded={type !== 'password'}
            type="button"
            onClick={changeType}
            isBackground={false}
            icon={type === 'password' ? <Eye /> : <EyeOff />}
          />
        </Styled.ShowPasswordWrapper>
      )}
    </Styled.InputWrapper>
    <Styled.ErrorMessage>
      <ErrorMessage name={name} />
    </Styled.ErrorMessage>
  </>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  changeType: PropTypes.func,
};

Input.defaultProps = {
  isPassword: false,
  changeType: () => {},
};

export default Input;
