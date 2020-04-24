import React from 'react';
import styled from 'styled-components';

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

const SignUpForm = () => {
  return (
    <SignForm>
      <FormBody>
        <FormHeading>Sign up</FormHeading>
        <div>sign up form content here</div>
      </FormBody>
    </SignForm>
  );
};

export default SignUpForm;
