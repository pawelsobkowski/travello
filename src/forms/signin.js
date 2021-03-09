import { useState } from 'react';
import { Formik } from 'formik';
import Styled from './styles';
import Input from '../components/Controls/input';
import Button from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import SignInSchema from '../schemas/SignIn';

const SignInForm = () => {
  const initial = { email: '', password: '' };
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={initial}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Styled.Form autoComplete="off" noValidate>
        <Styled.InputWrapper>
          <Input name="email" type="email" label="Email" required />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            isPassword
            changeType={handleClick}
            required
          />
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
