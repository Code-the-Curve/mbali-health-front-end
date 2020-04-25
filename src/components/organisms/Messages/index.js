import React from 'react';

import Message from './Message';
import Write from './Write';
import MessageHeading from '../../molecules/MessageHeading';
import styled from 'styled-components';

const MessageContainer = styled.section`
  width: calc(100vw - 350px);
  background: #fff;
  position: relative;
`;

const Messages = () => {
  return (
    <MessageContainer>
      <MessageHeading />
      <div id="messages">
        <Message />
        <div id="messagesFooter" />
      </div>
      <Write />
    </MessageContainer>
  );
};

export default Messages;
