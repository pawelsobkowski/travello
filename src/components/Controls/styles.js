import styled from 'styled-components';
import { Field } from 'formik';

const Label = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const Input = styled(Field)`
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  padding: 0 1rem;
  font-size: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.lightgrey_087};
  background: ${({ theme }) => theme.colors.lightgrey_063};
  outline: none;
  transition: background 0.2s;

  :focus,
  :hover {
    background: ${({ theme }) => theme.colors.grey_063};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.white_063};
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.colors.white_063};
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ShowPasswordWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
`;

const ErrorMessage = styled.div`
  font-size: 1.3rem;
  margin-top: 0.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
`;

const Styled = { Input, Label, ErrorMessage, InputWrapper, ShowPasswordWrapper };

export default Styled;
