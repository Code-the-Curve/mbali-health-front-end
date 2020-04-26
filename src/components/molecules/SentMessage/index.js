import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { calendarStringsMessage } from '../../../utils/time';

const MessageWrapper = styled.div`
  margin: 1px 25px;
  font-size: 14px;
  color: black;
  display: flex;
  flex-direction: row-reverse;
`;
const MessageBody = styled.div`
  float: right;
  display: flex;
`;
const MessageStatus = styled.div`
  font-size: 11px;
  color: #8a8d91;
  padding: 5px;
  display: flex;
  margin-right: 5px;
`;
const MessageText = styled.div`
  max-width: 450px;
  background: #343a40;
  color: #f1f1f4;
  font-size: 14px;
  padding: 12px 15px;
  border-radius: 15px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

const SentMessage = () => {
  return (
    <>
      <MessageWrapper>
        <MessageBody>
          <MessageStatus>
            <Moment calendar={calendarStringsMessage} date="12-12-2019" />
          </MessageStatus>
          <MessageText>
            This is a message I have sent to the patient This is a message I
            have sent to the patient This is a message I have sent to the
            patient This is a message I have sent to the patient This is a
            message I have sent to the patient This is a message I have sent to
            the patient This is a message I have sent to the patient This is a
            message I have sent to the patient This is a message I have sent to
            the patient
          </MessageText>
        </MessageBody>
      </MessageWrapper>
      <MessageWrapper>
        <MessageBody>
          <MessageStatus>
            <Moment calendar={calendarStringsMessage} date="12-12-2019" />
          </MessageStatus>
          <MessageText>😇☝</MessageText>
        </MessageBody>
      </MessageWrapper>
      <MessageWrapper>
        <MessageBody>
          <MessageStatus>
            <Moment calendar={calendarStringsMessage} date="04-19-2020" />
          </MessageStatus>
          <MessageText>
            This is a message I have sent to the patient This is a message I
            have sent to the patient This is a message I have sent to the
            patient
          </MessageText>
        </MessageBody>
      </MessageWrapper>
      <MessageWrapper>
        <MessageBody>
          <MessageStatus>
            <Moment calendar={calendarStringsMessage} date="04-25-2020" />
          </MessageStatus>
          <MessageText>This 💪🏾</MessageText>
        </MessageBody>
      </MessageWrapper>
      <MessageWrapper>
        <MessageBody>
          <MessageStatus>
            <Moment calendar={calendarStringsMessage} date="04-26-2020" />
          </MessageStatus>
          <MessageText>
            This is a message I have sent to the patient This is a message I
            have sent to the patient This is a message I have sent to the
            patient
          </MessageText>
        </MessageBody>
      </MessageWrapper>
    </>
  );
};

export default SentMessage;
