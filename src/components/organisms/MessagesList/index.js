import React from 'react';
import styled, { css } from 'styled-components';

const MessageContainer = styled.div`
  position: relative;
  display: block;
  flex: 2;
  overflow-y: overlay;
  padding: 0 15px;
`;

const LoadingMore = styled.div`
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`;

const MessageItem = styled.div`
  display: inline-block;
  position: relative;
  max-width: 100%;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 10px;
  clear: both;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 3px;
    width: 12px;
    height: 19px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }

  ${(props) =>
    props.isMine
      ? css`
          float: right;
          background-color: #dcf8c6;

          &::before {
            right: -11px;
            background-image: url(/assets/message-mine.png);
          }
        `
      : css`
          float: left;
          background-color: #fff;

          &::before {
            left: -11px;
            background-image: url(/assets/message-other.png);
          }
        `}
`;

const Contents = styled.div`
  padding: 5px 7px;
  word-wrap: break-word;

  &::after {
    content: ' \\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0';
    display: inline;
  }
`;

const Timestamp = styled.div`
  position: absolute;
  bottom: 2px;
  right: 7px;
  color: gray;
  font-size: 12px;
`;

const MessagesList = () => {
  return (
    <MessageContainer>
      <LoadingMore>Loading more messages...</LoadingMore>
      <MessageItem isMine={true}>
        <Contents>Hi, how are you?</Contents>
        <Timestamp>3:07 PM</Timestamp>
      </MessageItem>
      <MessageItem isMine={false}>
        <Contents>Hi, I am okay, doing great. How about you?</Contents>
        <Timestamp>3:08 PM</Timestamp>
      </MessageItem>
      <MessageItem isMine={true}>
        <Contents>Doing great as well</Contents>
        <Timestamp>3:09 PM</Timestamp>
      </MessageItem>
      <MessageItem isMine={true}>
        <Contents>Was only checking up on you</Contents>
        <Timestamp>3:10 PM</Timestamp>
      </MessageItem>
      <MessageItem isMine={false}>
        <Contents>Well appreciated.</Contents>
        <Timestamp>3:12 PM</Timestamp>
      </MessageItem>
      <MessageItem isMine={true}>
        <Contents>Alright, goodbye</Contents>
        <Timestamp>3:12 PM</Timestamp>
      </MessageItem>
      <MessageItem isMine={false}>
        <Contents>Thanks, goodbye</Contents>
        <Timestamp>3:20 PM</Timestamp>
      </MessageItem>
    </MessageContainer>
  );
};

export default MessagesList;
