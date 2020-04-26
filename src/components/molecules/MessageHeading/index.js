import React, { useState } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close';
import Tune from '@material-ui/icons/Tune';
import Help from '@material-ui/icons/Help';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton/IconButton';

import { calendarStringsHeader } from '../../../utils/time';
import PhotoSmall from '../../molecules/PhotoSmall';

const styles = {
  icon: {
    margin: 0,
  },
  button: {
    margin: 0,
    padding: 5,
    outline: null,
  },
  avatar: {
    margin: 0,
    width: 35,
    height: 35,
  },
};

const Heading = styled.div`
  background: #fff;
  padding: 7px 10px 7px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 1;
  top: 0;
  height: 50px;
  width: 100%;
  cursor: default;
`;
const UserName = styled.div`
  flex: 2;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 3px;
  font-weight: 600;
  color: #43444f;
`;
const ActiveTime = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-top: 1px;
  color: #8a8d91;
`;
const TextSearch = styled.div`
  margin-right: 0;
  flex: 1;
  position: relative;

  & input {
    background: #f1f1f4;
    padding: 8px;
    border: 1px solid #eee;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    color: #666;
    padding-left: 33px;
    outline: none;

    &::placeholder {
      color: #aaa;
    }
  }
`;
const StyledSearchIcon = styled(Search)`
  position: absolute;
  color: #aaa;
  left: 10px;
  top: 9px;
  font-size: 17px;
`;
const ClearSearch = styled(Close)`
  position: absolute;
  color: #aaa;
  right: 10px;
  top: 9px;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #888;
  }
`;

const MessageHeading = ({ classes }) => {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const showMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const clearSearch = () => {
    setSearch('');
  };

  const onKeyUp = (event) => {
    if (event.key === 'Escape') {
      setSearch('');
    }
  };

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Heading>
      <PhotoSmall />
      <UserName>
        Mathias Angule
        <ActiveTime>
          <Moment calendar={calendarStringsHeader} date="04-23-2020" />
        </ActiveTime>
      </UserName>

      <TextSearch>
        <StyledSearchIcon />
        <input
          type="text"
          value={search}
          onKeyUp={onKeyUp}
          onChange={changeSearch}
          placeholder="Search in messages"
        />
        {search.length > 0 ? <ClearSearch onClick={clearSearch} /> : ''}
      </TextSearch>

      <IconButton
        id="profileInfo"
        className={classes.button}
        component="span"
        aria-label="Delete"
        aria-owns={anchorEl ? 'profileMenu' : undefined}
        aria-haspopup="true"
        onClick={showMenu}
      >
        <MoreVert />
      </IconButton>

      <Menu
        id="profileMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={() => console.log('clicked')}>
          <ListItemIcon className={classes.icon}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary="Profile"
          />
        </MenuItem>
        <MenuItem onClick={() => console.log('clicked')}>
          <ListItemIcon className={classes.icon}>
            <Tune />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary="Settings"
          />
        </MenuItem>
        <MenuItem onClick={() => console.log('clicked')}>
          <ListItemIcon className={classes.icon}>
            <Help />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} primary="Help" />
        </MenuItem>
        <MenuItem onClick={() => console.log('clicked')}>
          <ListItemIcon className={classes.icon}>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Sign Out"
          />
        </MenuItem>
      </Menu>
    </Heading>
  );
};

export default withStyles(styles)(MessageHeading);
