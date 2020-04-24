import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import CustomSwitch from '../../../utils/customSwitch';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import SignInForm from '../../organisms/SIgnInForm';
import SignUpForm from '../../organisms/SignUpForm';

const AuthPage = styled.div`
  background: radial-gradient(rgb(34, 65, 67), rgb(17, 48, 50)),
    url(/assets/chat-background.jpg) no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  color: white;
`;
const SwitchRoute = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;

  label {
    color: #6fd056;
  }
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

const LoginPage = ({ history, location }) => {
  const switchRoute = useMemo(() => {
    if (location && location.pathname === '/sign-in') {
      const signUpUser = () => {
        history.replace('/sign-up');
      };

      return (
        <SwitchRoute>
          Don't have an account yet?{' '}
          <label onClick={signUpUser}>Sign up!</label>
        </SwitchRoute>
      );
    } else {
      const signInUser = () => {
        history.replace('/sign-in');
      };

      return (
        <SwitchRoute>
          Already have an account? <label onClick={signInUser}>Sign in!</label>
        </SwitchRoute>
      );
    }
  }, [history, location.pathname]);

  return (
    <AuthPage>
      <Header>
        {/* <StyledIcon icon="whatsapp" /> */}
        <StyledHeading level={3}>WhatsApp</StyledHeading>
      </Header>
      <CustomSwitch>
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
      </CustomSwitch>
    </AuthPage>
  );
};

LoginPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default LoginPage;
