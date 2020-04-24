import React from 'react';
import DefaultLayout from '../../templates/DefaultLayout';

import ChatNavbar from '../../molecules/ChatNavbar';
import MessageInput from '../../molecules/MessageInput';
import MessagesList from '../../organisms/MessagesList';

const ChatRoom = () => (
  <DefaultLayout>
    <ChatNavbar/>
    <MessagesList/>
    <MessageInput/>
  </DefaultLayout>
);
export default ChatRoom;
