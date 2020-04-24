import React from 'react';
import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import SignOutIcon from '@material-ui/icons/PowerSettingsNew';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Link from '../../atoms/Link';

const Container = styled(Toolbar)`
  display: flex;
  background-color: #2c6157;
  color: white;
  font-size: 20px;
  line-height: 40px;
`;

const StyledHeading = styled(Heading)`
  flex: 1;
`;

const StyledButton = styled(Button)`
  color: white;
`;

const NavBar = () => {
  return (
    <Container>
      <StyledHeading>WhatsApp</StyledHeading>
      <Link to="/sign-in">
        <StyledButton onClick={() => console.log('sign out button clicked')}>
          <SignOutIcon />
        </StyledButton>
      </Link>
    </Container>
  );
};

export default NavBar;
