import React, { useState, useEffect } from 'react';
import DefaultLayout from '../../templates/DefaultLayout';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Input,
} from 'reactstrap';
import classnames from 'classnames';

// import ChatNavbar from '../../molecules/ChatNavbar';
// import MessageInput from '../../molecules/MessageInput';
// import MessagesList from '../../organisms/MessagesList';
import websockets from '../../../utils/webSocket';
// import usePrevious from '../../../hooks/usePrevious';

const ChatRoom = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [room, setRoom] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);

  const socket = websockets.getSocket();

  const switchActiveTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const joinChatRoom = () => {
    websockets.join(socket, '<room id>', (res) => {
      const { room, user } = res;
      setRoom(room);
      setUsername(user);
    });
  };

  const handleChatInput = ({ key, target }) => {
    if (key === 'Enter' && target.value !== '') {
      const message = target.value;
      websockets.send(socket, message);
      target.value = '';
    }
  };

  const handleMessageReceive = (data) => {
    const { message, from } = data;
    setMessages(...messages, { message, from });
  };

  websockets.addMessageListener(socket, handleMessageReceive);

  return (
    // <DefaultLayout>
    //   <ChatNavbar />
    //   <MessagesList />
    //   <MessageInput />
    // </DefaultLayout>
    <DefaultLayout>
      <Col sm={4}>
        <Nav tabs className={'nav-fill'}>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === '1',
              })}
              onClick={() => {
                switchActiveTab('1');
              }}
            >
              Sent Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === '2',
              })}
              onClick={() => {
                switchActiveTab('2');
              }}
            >
              Incomming Messages
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Button onClick={joinChatRoom}>Join Chat</Button>
                {!!room ? `|   Joined ${room} as ${username}` : ''}
              </Col>
            </Row>

            <Row>
              <Col sm="12">
                <Input placeholder="type" onKeyDown={handleChatInput} />
              </Col>
            </Row>
            {messages.map((msg, i) => {
              return <Row key={i}>{`${msg.from} -- ${msg.content}`} </Row>;
            })}
          </TabPane>
          <TabPane tabId="2"></TabPane>
        </TabContent>
      </Col>
    </DefaultLayout>
  );
};

export default ChatRoom;
