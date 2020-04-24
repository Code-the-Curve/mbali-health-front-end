import React from 'react';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';

const ChatNavBarContainer = styled(Toolbar)`
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: #2c6157;
  color: white;
`;

const BackButton = styled(Button)`
  svg {
    color: white;
  }
`;

const Delete = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Picture = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 3px;
  margin-left: -22px;
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
`;

const Name = styled.div`
  line-height: 56px;
`;

const DeleteButton = styled(Button)`
  color: white;
`;

const ChatNavbar = () => {
  return (
    <ChatNavBarContainer>
      <Link to="/chats">
        <BackButton onClick={() => console.log('clicked back button')}>
          <ArrowBackIcon />
        </BackButton>
      </Link>
      <Picture src="https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg" />
      <Name>Test User</Name>
      <Delete>
        <Link to="/chats">
          <DeleteButton onClick={() => console.log('clicked delete')}>
            <DeleteIcon />
          </DeleteButton>
        </Link>
      </Delete>
    </ChatNavBarContainer>
  );
};

export default ChatNavbar;
