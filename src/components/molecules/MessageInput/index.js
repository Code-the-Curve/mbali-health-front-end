import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

import Button from '../../atoms/Button';

const MessageInputContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 5px;
  width: calc(100% - 10px);
`;

const TextInput = styled.input`
  width: calc(100% - 50px);
  border: none;
  border-radius: 999px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  outline: none;
  box-shadow: 0 1px silver;
  font-size: 18px;
  line-height: 45px;
`;

const SendButton = styled(Button)`
  min-width: 50px;
  width: 50px;
  border-radius: 999px;
  background-color: #2c6157;
  margin: 0 5px;
  margin-right: 0;
  color: white;
  padding-left: 20px;

  svg {
    margin-left: -3px;
  }
`;

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const onChange = ({ target }) => {
    setMessage(target.value);
  };

  return (
    <MessageInputContainer>
      <TextInput
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={onChange}
      />
      <SendButton
        variant="contained"
        color="primary"
        onClick={() => console.log('clicked submit message')}
      >
        <SendIcon />
      </SendButton>
    </MessageInputContainer>
  );
};

export default MessageInput;
