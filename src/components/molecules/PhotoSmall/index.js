import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  profilePhoto: {
    position: 'relative',
  },
  avatar: {
    margin: 0,
    width: 35,
    height: 35,
  },
};

const PhotoSmall = () => {
  return (
    <div className={classes.profilePhoto}>
      <Avatar
        src="https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg"
        onClick={() => console.log('clicked')}
        className={`user ${classes.avatar}`}
      />
    </div>
  );
};

export default withStyles(styles)(PhotoSmall);
