import React from 'react';
import { List, ListItem } from '@material-ui/core';
import styled from 'styled-components';

const ChatContainer = styled.div`
  height: calc(100% - 56px);
  overflow-y: overlay;
`;

const StyledList = styled(List)`
  padding: 0;
`;

const StyledListItem = styled(ListItem)`
  height: 76px;
  padding: 0 15px;
  display: flex;
`;

const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const ChatInfo = styled.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;

const ChatName = styled.div`
  margin-top: 5px;
`;

const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;

const ChatsList = () => {
  return (
    <ChatContainer>
      <StyledList>
        <StyledListItem
          key="list-item-1"
          button
          onClick={() => console.log('chat item clicked')}
        >
          <ChatPicture
            src="https://image.shutterstock.com/image-illustration/head-iron-man-silhouette-stylized-600w-1458210668.jpg"
            alt="Profile"
          />
          <ChatInfo>
            <ChatName>User 1</ChatName>
            <>
              <MessageContent>This is a test message</MessageContent>
              <MessageDate>11:23 am</MessageDate>
            </>
          </ChatInfo>
        </StyledListItem>
        <StyledListItem
          key="list-item-1"
          button
          onClick={() => console.log('chat item clicked')}
        >
          <ChatPicture
            src="https://image.shutterstock.com/image-vector/abstract-woman-avatar-600w-797432380.jpg"
            alt="Profile"
          />
          <ChatInfo>
            <ChatName>Best Friend</ChatName>
            <>
              <MessageContent>Hey</MessageContent>
              <MessageDate>11:24 pm</MessageDate>
            </>
          </ChatInfo>
        </StyledListItem>
        <StyledListItem
          key="list-item-1"
          button
          onClick={() => console.log('chat item clicked')}
        >
          <ChatPicture
            src="https://image.shutterstock.com/image-vector/black-white-woman-avatar-260nw-469095035.jpg"
            alt="Profile"
          />
          <ChatInfo>
            <ChatName>Swt Mum</ChatName>
          </ChatInfo>
        </StyledListItem>
        <StyledListItem
          key="list-item-1"
          button
          onClick={() => console.log('chat item clicked')}
        >
          <ChatPicture
            src="https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg"
            alt="Profile"
          />
          <ChatInfo>
            <ChatName>Brother</ChatName>
            <>
              <MessageContent>How are you?</MessageContent>
              <MessageDate>2:00 pm</MessageDate>
            </>
          </ChatInfo>
        </StyledListItem>
      </StyledList>
    </ChatContainer>
  );
};

export default ChatsList;
