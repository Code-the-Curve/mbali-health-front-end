import React from 'react';
import styled from 'styled-components';

import ChatNavbar from './ChatNavbar';
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
      <ChatNavbar chat={chat} history={history} />
      <MessagesList />
      <MessageInput />
    </Container>
  );
};

const ChatRoom = () => {
  return <ChatRoomMessages />;
};

export default ChatRoom;
