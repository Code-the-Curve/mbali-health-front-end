import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';
import TextField from '../../atoms/TextField';

const AuthPage = styled.div`
  background: radial-gradient(rgb(34, 65, 67), rgb(17, 48, 50)),
    url(/assets/chat-background.jpg) no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  color: white;
`;
const Header = styled.div`
  height: 265px;
`;
const StyledIcon = styled(Icon)`
  width: 125px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
  display: block;
`;
const StyledHeading = styled(Heading)`
  width: 100%;
  text-align: center;
  color: white;
`;
const SignForm = styled.div`
  height: calc(100% - 265px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBody = styled.form`
  padding: 20px;
`;
const FormHeading = styled.legend`
  font-weight: bold;
  color: white;
`;
const Section = styled.div`
  padding-bottom: 35px;
  width: 100%;
`;

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const updateName = useCallback(({ target }) => {
    setError('');
    setName(target.value);
  }, []);

  const updateUsername = useCallback(({ target }) => {
    setError('');
    setUsername(target.value);
  }, []);

  const updatePassword = useCallback(({ target }) => {
    setError('');
    setPassword(target.value);
  }, []);

  const updatePasswordConfirm = useCallback(({ target }) => {
    setError('');
    setPasswordConfirm(target.value);
  }, []);

  return (
    <AuthPage>
      <Header>
        <StyledIcon icon="whatsapp" />
        <StyledHeading level={3}>WhatsApp</StyledHeading>
      </Header>
      <SignForm>
        <FormBody>
          <FormHeading>Sign up</FormHeading>
          <Section>
            <TextField
              label="Name"
              value={name}
              onChange={updateName}
              autoComplete="off"
              margin="normal"
            />
            <TextField
              label="Username"
              value={username}
              onChange={updateUsername}
              autoComplete="off"
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={updatePassword}
              autoComplete="off"
              margin="normal"
            />
            <TextField
              label="Confirm password"
              type="password"
              value={passwordConfirm}
              onChange={updatePasswordConfirm}
              autoComplete="off"
              margin="normal"
            />
          </Section>
          <Link to="/chats">
            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={() => console.log('sign up button clicked')}
            >
              Sign up
            </Button>
          </Link>
          <ErrorMessage>{error}</ErrorMessage>
        </FormBody>
      </SignForm>
    </AuthPage>
  );
};

export default SignUpForm;
