import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Rooms from './Room/Rooms';
import Heading from './Room/Heading';

const styles = (theme) => ({
  sideNav: {
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    width: '350px',
    height: '100vh',
    position: 'relative',
    paddingTop: '1px',
  },
  tabsRoot: {
    marginLeft: 0,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
  tabsIndicator: {
    background: '#fafafa',
  },
  tabSelected: {
    background: '#43444f',
  },
  tabRoot: {
    color: '#43444f',
    marginRight: 0,
    marginLeft: 0,
    minWidth: 110,
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const SideNav = () => {
  return (
    <aside className={classes.sideNav}>
      <Heading />
      <Rooms />
    </aside>
  );
};

export default withStyles(styles)(SideNav);
