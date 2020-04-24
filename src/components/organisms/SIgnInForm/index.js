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

const SignInForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const nameChange = useCallback(({ target }) => {
    setError('');
    setName(target.value);
  }, []);

  const passwordChange = useCallback(({ target }) => {
    setError('');
    setPassword(target.value);
  }, []);

  return (
    <AuthPage>
      <Header>
        <StyledIcon icon="whatsapp" />
        <StyledHeading level={3}>WhatsApp</StyledHeading>
      </Header>
      <SignForm>
        <FormBody>
          <FormHeading>Sign in</FormHeading>
          <Section>
            <TextField
              label="Username"
              value={name}
              onChange={nameChange}
              margin="normal"
              placeholder="Enter username"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={passwordChange}
              margin="normal"
              placeholder="Enter password"
            />
          </Section>
          <Link to="/chats">
            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={() => console.log('sign in button clicked')}
            >
              Sign in
            </Button>
          </Link>
          <ErrorMessage>{error}</ErrorMessage>
        </FormBody>
      </SignForm>
    </AuthPage>
  );
};

export default SignInForm;
