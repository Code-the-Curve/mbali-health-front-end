import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Heading from '../../atoms/Heading';

const NavBarContainer = styled(Toolbar)`
  display: flex;
  background-color: #2c6157;
  color: white;
  font-size: 20px;
  line-height: 40px;
`;

const BackButton = styled(Button)`
  svg {
    color: white;
  }
`;

const StyledHeading = styled(Heading)`
  flex: 1;
`;

const CreateChatNavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/chats">
        <BackButton onClick={() => console.log('clicked back button')}>
          <ArrowBackIcon />
        </BackButton>
      </Link>
      <StyledHeading level={4}>Create Chat</StyledHeading>
    </NavBarContainer>
  );
};

export default CreateChatNavBar;
