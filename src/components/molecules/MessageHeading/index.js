import React, { useState } from 'react';
import Moment from 'react-moment';

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
import PhotoSmall from '../User/PhotoSmall';

const styles = {
  icon: {
    margin: 0,
  },
  button: {
    margin: 0,
    padding: 5,
  },
  avatar: {
    margin: 0,
    width: 35,
    height: 35,
  },
};

const MessageHeading = () => {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  closeMenu = () => {
    setAnchorEl(null);
  };

  showMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  clearSearch = () => {
    setSearch('');
  };

  onKeyUp = (event) => {
    if (event.key === 'Escape') {
      setSearch('');
    }
  };

  changeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="heading">
      <PhotoSmall />

      <div className="name">
        Name
        <p className="activeAt">
          <Moment
            calendar={calendarStringsHeader}
            date="March 8, 2020 at 1:00 PM"
          />
        </p>
      </div>

      <div id="textSearch" className="search __dark">
        <Search className="searchIcon" />
        <input
          className="searchInput"
          type="text"
          value={search}
          onKeyUp={onKeyUp}
          onChange={changeSearch}
          placeholder="Search in messages"
        />
        {search.length > 0 ? (
          <Close className="clearIcon" onClick={clearSearch} />
        ) : (
          ''
        )}
      </div>

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
    </div>
  );
};

export default withStyles(styles)(MessageHeading));
