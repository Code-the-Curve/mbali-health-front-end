import React , {Component}from 'react';
import DefaultLayout from '../../molecules/Layout/DefaultLayout';

import ChatNavbar from '../../molecules/ChatNavbar';
import MessageInput from '../../molecules/MessageInput';
import MessagesList from '../../organisms/MessagesList';

class ChatRoom extends Component {

  render() {
    return (
      <DefaultLayout>
        <ChatNavbar/>
        <MessagesList/>
        <MessageInput/>
      </DefaultLayout>
    );
  }
}

export default ChatRoom;
