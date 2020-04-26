import React, { useState } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    margin: 2,
  },
};
const WriteMessageContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 351px);
`;
const WriteMessage = styled.div`
  margin: 0 10px 10px 49px;
  position: relative;
  & textarea {
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    background: #f1f1f4;
    resize: none;
    line-height: 24px;
    overflow: auto;
    height: auto;
    font-size: 16px;
    padding: 20px;
    outline: none;
  }
`;

const Write = ({ onMessageSubmit }) => {
  const onKeyPress = (event) => {
    const msg = event.target.value;
    if (event.key === 'Enter' && msg !== '') {
      event.preventDefault();
      onMessageSubmit(msg);
      event.target.value = '';
    }
  };

  return (
    <WriteMessageContainer>
      <WriteMessage>
        <Textarea placeholder="Write a message..." onKeyPress={onKeyPress} />
      </WriteMessage>
    </WriteMessageContainer>
  );
};

export default withStyles(styles)(Write);
