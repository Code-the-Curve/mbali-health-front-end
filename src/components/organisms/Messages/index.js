import React from 'react';
import styled from 'styled-components';

import Message from '../../molecules/Message';
import MessageHeading from '../../molecules/MessageHeading';
import SentMessage from '../../molecules/SentMessage';
import WriteMessage from '../../molecules/WriteMessage';

const MessageContainer = styled.section`
  width: calc(100vw - 350px);
  background: #fff;
  position: relative;
`;
const MessagesBody = styled.div`
  padding-top: 20px;
  height: calc(100vh - 110px);
  position: relative;
  overflow: scroll;
`;

const Messages = () => {
  return (
    <MessageContainer>
      <MessageHeading />
      <MessagesBody>
        <Message />
        <SentMessage />
        <div id="messagesFooter" />
      </MessagesBody>
      <WriteMessage />
    </MessageContainer>
  );
};

export default Messages;
