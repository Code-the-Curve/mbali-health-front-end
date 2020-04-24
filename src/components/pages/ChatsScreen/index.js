import React from 'react';
import styled from 'styled-components';

import NavBar from '../../molecules/NavBar';

const Main = styled.div`
  height: 100vh;
`;

const ChatsScreen = () => (
  <Main>
    <NavBar />
    {/* <ChatListItems />
    <NewChatButton /> */}
  </Main>
);

export default ChatsScreen;
