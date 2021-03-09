import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Link as RouterLink } from 'react-router-dom';

const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin: 0.4rem 0;
`;

const ErrorWrapper = styled.div`
  margin: 2rem 0;
`;

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.primary_blue};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;

  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.desktop}) {
    font-size: 1.6rem;
  }
`;

const Styled = { Form, InputWrapper, ErrorWrapper, Link };

export default Styled;
