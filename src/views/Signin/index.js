import Styled from './styles';
import SignInForm from '../../forms/signin';
import Title from '../../components/SectionTitle';
import Button from '../../components/FormButton';
import FormMessage from '../../components/FormMessage';
import useCurrentLocation from '../../hooks/useCurrentLocation';

const Signin = () => {
  const [baseLocation] = useCurrentLocation();
  return (
    <Styled.FormContainer>
      <Title>Sign in</Title>
      <Styled.Description>Log in and explore the world.</Styled.Description>
      <Button isSocial>Sign in with Google</Button>
      <Styled.Text>or sign in with email</Styled.Text>
      <SignInForm />
      <FormMessage to={`${baseLocation}/signup`} linkLabel="Sign up">
        You don&apos;t have an account?
      </FormMessage>
    </Styled.FormContainer>
  );
};

export default Signin;
