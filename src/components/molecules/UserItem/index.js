import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem/ListItem';

import { calendarStringsUsers } from '../../../utils/time';
import Photo from '../../molecules/Photo';

const styles = {
  icon: {
    fontSize: 14,
    margin: 0,
  },
  avatar: {
    margin: 0,
    width: 60,
    height: 60,
  },
};
const User = styled(ListItem)`
  padding: 10px;
`;
const UserStatus = styled.div`
  position: absolute;
  color: #8a8d91;
  right: 10px;
  top: 10px;
  font-size: 11px;
`;
const UserDetails = styled.div`
  padding-left: 10px;
  overflow: hidden;
  margin-top: 5px;
`;
const UserName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #43444f;
`;
const UserLastMessage = styled.p`
  font-size: 14px;
  color: #8a8d91;
  width: 1000px;
`;

const UserItem = () => {
  return (
    <User button>
      <Photo />
      <UserStatus>
        <Moment calendar={calendarStringsUsers} date="01-28-2020" />
      </UserStatus>
      <UserDetails>
        <UserName>John Doe</UserName>
        <UserLastMessage>
          This is a users last message This is a users last message
        </UserLastMessage>
      </UserDetails>
    </User>
  );
};

export default withStyles(styles)(UserItem);
