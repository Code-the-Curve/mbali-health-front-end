import React from 'react';

// import Message from '../../molecules/Message';
// import Write from '../../molecules/Write';
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
      {/* <Write /> */}
    </MessageContainer>
  );
};

export default Messages;
