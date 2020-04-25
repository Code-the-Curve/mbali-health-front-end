import React from 'react';

// import Message from '../../molecules/Message';
import WriteMessage from '../../molecules/WriteMessage';
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
        {/* <Message /> */}
        Messages here
        <div id="messagesFooter" />
      </div>
      <WriteMessage />
    </MessageContainer>
  );
};

export default Messages;
