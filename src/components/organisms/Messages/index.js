import React from 'react';
import styled from 'styled-components';

import Message from '../../molecules/Message';
import MessageHeading from '../../molecules/MessageHeading';
import SentMessage from '../../molecules/SentMessage';
import WriteMessage from '../../molecules/WriteMessage';

import { PRACTIONER_ID } from '../../../utils/Constants';

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

const imgUrl =
  'https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg';

const Messages = ({ messages, room, onMessageSubmit }) => {
  return (
    <MessageContainer>
      <MessageHeading />
      <MessagesBody>
        {(messages || []).map((message, id) => {
          console.log('message', message);
          if (message.from === PRACTIONER_ID) {
            // TODO: Change Hardcode
            return (
              <SentMessage
                key={id}
                message={message.content.message}
                date={message.sent_ts}
              />
            );
          } else {
            return (
              <Message
                key={id}
                imageUrl={imgUrl}
                message={message.content.message}
                date={message.date}
              />
            );
          }
        })}
        <div id="messagesFooter" />
      </MessagesBody>
      <WriteMessage onMessageSubmit={onMessageSubmit} />
    </MessageContainer>
  );
};

export default Messages;
