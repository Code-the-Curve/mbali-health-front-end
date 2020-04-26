import io from 'socket.io-client';

import { PRACTIONER_ID } from '../Constants.js'

const BACKEND_URL = 'localhost:8081';

const WebsocketUtil = {
  getSocket: () => {
    const socket = io.connect(BACKEND_URL);
    socket.emit('join', { uid: PRACTIONER_ID }) // TODO: Change Hardcode
    return socket ;
  },

  leave: (socket, room, cb) => {
    socket.emit('leave', room, cb);
  },

  send: (socket, room, message) => {
    console.log(`Sending ${message}`);
    socket.emit('message', { 
      room, 
      message,
      sent_ts: new Date(),
      from: PRACTIONER_ID, // TODO: Change Hardcode 
    });
  },

  addMessageListener: (socket, cb) => {
    socket.on('message', cb);
  },

  removeMessageListener: (socket) => {
    socket.off('message');
  },
};

export default WebsocketUtil;
