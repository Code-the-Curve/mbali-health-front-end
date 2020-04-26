import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: 'relative';
`;
const StyledAvatar = styled(Avatar)`
  margin: 0;
  width: 60;
  height: 60;
`;

const Photo = ({ classes }) => {
  return (
    <Wrapper>
      <StyledAvatar src="https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg" />
    </Wrapper>
  );
};

export default Photo;
