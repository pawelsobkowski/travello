import { Formik } from 'formik';
import Styled from './styles';
import Input from '../components/Controls/input';
import Button from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

const SignInForm = () => {
  const initial = { email: '', password: '' };

  return (
    <Formik
      initialValues={initial}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Styled.Form autoComplete="off" noValidate>
        <Styled.InputWrapper>
          <Input name="email" type="email" label="Email" required />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Input name="password" type="password" label="Password" required />
        </Styled.InputWrapper>
        <Styled.Link to="/home/signin">forgot password?</Styled.Link>
        <Styled.ErrorWrapper>
          <ErrorMessage>{/* Invalid email or password! */}</ErrorMessage>
        </Styled.ErrorWrapper>
        <Button type="submit">Sign in</Button>
      </Styled.Form>
    </Formik>
  );
};

export default SignInForm;
