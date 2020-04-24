import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import Link from '../../atoms/Link';
import TextField from '../../atoms/TextField';

const SignForm = styled.div`
  height: calc(100% - 265px);
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
    <SignForm>
      <FormBody>
        <FormHeading>Sign in</FormHeading>
        <Section style={{ width: '100%' }}>
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
  );
};

export default SignInForm;
