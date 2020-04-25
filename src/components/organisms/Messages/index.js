import React from 'react';
import styled from 'styled-components';

// import Message from '../../molecules/Message';
import WriteMessage from '../../molecules/WriteMessage';
import MessageHeading from '../../molecules/MessageHeading';

const MessageContainer = styled.section`
  width: calc(100vw - 350px);
  background: #fff;
  position: relative;
`;
const MessagesBody = styled.div`
  padding-top: 65px;
  height: calc(100vh - 110px);
  position: relative;
  overflow: scroll;
`;

const Messages = () => {
  return (
    <MessageContainer>
      <MessageHeading />
      <MessagesBody>
        {/* <Message /> */}
        Messages here
        <div id="messagesFooter" />
      </MessagesBody>
      <WriteMessage />
    </MessageContainer>
  );
};

export default Messages;
