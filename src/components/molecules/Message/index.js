import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Moment from 'react-moment';

import { calendarStringsMessage } from '../../../utils/time';

const styles = {
  icon: {
    fontSize: 14,
    margin: 0,
  },
  avatar: {
    margin: 0,
    width: 35,
    height: 35,
  },
};
const MessageItem = styled.div`
  margin: 1px 20px;
  color: black;
  display: flex;
`;
const MessageDetails = styled.div`
  margin-left: 10px;
  float: left;
  display: flex;
`;
const MessageItemStatus = styled.div`
  font-size: 11px;
  color: #8a8d91;
  padding: 5px;
  display: flex;
  margin-left: 5px;
`;
const MessageBody = styled.div`
  max-width: 450px;
  font-size: 14px;
  background: #2d7cc1;
  color: #fff;
  padding: 12px 15px;
  border-radius: 15px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const Message = ({ classes, imageUrl, message, date }) => {
  return (
      <MessageItem>
        <Avatar
          src={imageUrl}
          className={classes.avatar}
        />
        <MessageDetails>
          <MessageBody>
            {message}
          </MessageBody>
          <MessageItemStatus>
            <Moment calendar={calendarStringsMessage} date={date} />
          </MessageItemStatus>
        </MessageDetails>
      </MessageItem>
  );
};

export default withStyles(styles)(Message);
