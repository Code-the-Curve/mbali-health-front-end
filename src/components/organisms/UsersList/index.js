import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import UserItem from '../../molecules/UserItem';

const styles = {
  List: {
    padding: 0,
    margin: 0,
  },
  ListItem: {
    padding: 0,
    margin: 0,
  },
};
const UsersListWrapper = styled.aside`
  height: calc(100% - 49px);
`;
const UsersListItems = styled.div`
  overflow: scroll;
  height: calc(100%);
`;
const UserSelected = styled(ListItem)`
  border-right: 3px solid #ccc;
  background: rgba(0, 0, 0, 0.08);
`;
const UserNotSelected = styled(ListItem)`
  border-right: 3px solid transparent;

  &:hover {
    border-right: 3px solid #ccc;
    background: rgba(0, 0, 0, 0.08);
  }
`;

const UsersList = ({ classes }) => {
  return (
    <UsersListWrapper>
      <UsersListItems>
        <List component="nav" className={classes.List}>
          <UserSelected
            button
            onClick={() => console.log('clicked')}
            className={classes.ListItem}
          >
            <UserItem />
          </UserSelected>
          <UserNotSelected
            button
            onClick={() => console.log('clicked')}
            className={classes.ListItem}
          >
            <UserItem />
          </UserNotSelected>
          <UserNotSelected
            button
            onClick={() => console.log('clicked')}
            className={classes.ListItem}
          >
            <UserItem />
          </UserNotSelected>
        </List>
      </UsersListItems>
    </UsersListWrapper>
  );
};

export default withStyles(styles)(UsersList);
