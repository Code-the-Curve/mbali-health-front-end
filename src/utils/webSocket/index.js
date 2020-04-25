import io from 'socket.io-client';

const BACKEND_URL = 'http://api.mbalihealth.com/';

var room = '';

const WebsocketUtil = {
  getSocket: () => {
    return io.connect(BACKEND_URL);
  },

  join: (socket, chatroomName, cb) => {
    socket.emit('join', chatroomName, (res) => {
      room = res.room;
      cb(res);
    });
  },

  leave: (socket, cb) => {
    socket.emit('leave', room, cb);
  },

  send: (socket, msg) => {
    console.log(`Sending ${msg}`);
    socket.emit('message', { room, message: msg });
  },

  addMessageListener: (socket, cb) => {
    socket.on('message', cb);
  },

  removeMessageListener: (socket) => {
    socket.off('message');
  },
};

export default WebsocketUtil;
