import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import Styled from './styles';

const Input = ({ label, name, ...rest }) => (
  <>
    <Styled.Label htmlFor={name}>{label}</Styled.Label>
    <Styled.Input placeholder={label} name={name} id={name} {...rest} />
    <Styled.ErrorMessage>
      <ErrorMessage name={name} />
    </Styled.ErrorMessage>
  </>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
