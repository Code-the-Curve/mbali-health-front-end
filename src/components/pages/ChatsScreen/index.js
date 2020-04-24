import React, {Fragment} from 'react';

import NewChatButton from '../../molecules/NewChatButton';
import ChatListItems from '../../organisms/ChatListItems'

import {Row, Container, Col} from 'reactstrap';
import DefaultLayout from '../../molecules/Layout/DefaultLayout';

const ChatsScreen = () => (

  <DefaultLayout>
    <ChatListItems/>
  </DefaultLayout>

);

export default ChatsScreen;
