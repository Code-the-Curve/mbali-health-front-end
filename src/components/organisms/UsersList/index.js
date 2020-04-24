import React from 'react';
import styled from 'styled-components';

import MaterialList from '@material-ui/core/List';
import MaterialItem from '@material-ui/core/ListItem';

const ListContainer = styled(MaterialList)`
  padding: 0;
`;

const UserItem = styled(MaterialItem)`
  position: relative;
  padding: 7.5px 15px;
  display: flex;
  cursor: pinter;
`;

const ProfilePicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.div`
  padding-left: 15px;
  font-weight: bold;
`;

const UsersList = () => {
  return (
    <ListContainer>
      <UserItem onClick={() => console.log('clicked on user 1')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-illustration/head-iron-man-silhouette-stylized-600w-1458210668.jpg" />
          <Name>Test User 1</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 2')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-vector/abstract-woman-avatar-600w-797432380.jpg" />
          <Name>Test User 2</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 3')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg" />
          <Name>Test User 3</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 4')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-vector/abstract-woman-avatar-600w-797432380.jpg" />
          <Name>Test User 4</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 5')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-illustration/head-iron-man-silhouette-stylized-600w-1458210668.jpg" />
          <Name>Test User 5</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 6')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-photo/german-shepherd-dog-on-forest-260nw-164440220.jpg" />
          <Name>Test User 6</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 7')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-vector/abstract-woman-avatar-600w-797432380.jpg" />
          <Name>Test User 7</Name>
        </>
      </UserItem>
      <UserItem onClick={() => console.log('clicked on user 8')} button>
        <>
          <ProfilePicture src="https://image.shutterstock.com/image-illustration/head-iron-man-silhouette-stylized-600w-1458210668.jpg" />
          <Name>Test User 8</Name>
        </>
      </UserItem>
    </ListContainer>
  );
};

export default UsersList;
