import React from 'react';
import styled from 'styled-components';

import ChatNavbar from '../../molecules/ChatNavbar';
import MessageInput from './MessageInput';
import MessagesList from './MessagesList';

const Container = styled.div`
  background: url(/assets/chat-background.jpg);
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const ChatRoomMessages = () => {
  return (
    <Container>
      <ChatNavbar />
      <MessagesList />
      <MessageInput />
    </Container>
  );
};

const ChatRoom = () => {
  return <ChatRoomMessages />;
};

export default ChatRoom;
