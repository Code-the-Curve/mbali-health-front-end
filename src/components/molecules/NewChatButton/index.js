import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import React from 'react';
import styled from 'styled-components';
import Link from '../../atoms/Link';

const ButtonContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;

  button {
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background-color: #2c6157;
    color: white;
  }
`;

const NewChatButton = () => {
  return (
    <ButtonContainer>
      <Link to="/new-chat">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => console.log('new chat button clicked')}
        >
          <ChatIcon />
        </Button>
      </Link>
    </ButtonContainer>
  );
};

export default NewChatButton;
