import React, { useState } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import IconButton from '@material-ui/core/IconButton';
import { Picker } from 'emoji-mart';
import AttachFile from '@material-ui/icons/AttachFile';
import Send from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Face from '@material-ui/icons/Face';

const styles = {
  button: {
    margin: 2,
  },
};
const WriteMessageContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100% - 351px);
`;
const WriteMessage = styled.div`
  margin: 0 10px 10px 49px;
  position: relative;
`;
const EmojiButton = styled(IconButton)`
  position: absolute;
  top: 1px;
  right: 105px;
  z-index: 1;
`;
const UploadEmoji = styled(IconButton)`
  position: absolute;
  top: 1px;
  right: 55px;
  z-index: 1;
`;
const SendButton = styled(IconButton)`
  position: absolute;
  top: 1px;
  right: 0;
  z-index: 1;
`;
const StyledTextArea = styled(Textarea)`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  background: #f1f1f4;
  resize: none;
  line-height: 24px;
  overflow: auto;
  height: auto;
  font-size: 16px;
  padding: 20px;
  outline: none;
`;

const Write = ({ classes, onMessageSubmit }) => {
  const [emojiOpened, setEmojiOpened] = useState(false);

  const showEmoji = () => {
    setEmojiOpened(true);
  };
  const hideEmoji = () => {
    setEmojiOpened(false);
  };
  const emojiClick = (emoji) => {
    console.log('clicked', emoji);
  };
  const onKeyPress = (event) => {
    const msg = event.target.value;
    if (event.key === 'Enter' && msg !== '') {
      event.preventDefault();
      onMessageSubmit(msg);
      event.target.value = '';
    }
  };

  return (
    <WriteMessageContainer>
      <WriteMessage>
        <ClickAwayListener onClickAway={hideEmoji}>
          <div>
            <EmojiButton
              color="default"
              className={classes.button}
              onClick={(event) => showEmoji(event, emojiOpened)}
              component="span"
            >
              <Face />
              {emojiOpened ? (
                <Paper id="emojis">
                  <Picker onClick={emojiClick} />
                </Paper>
              ) : null}
            </EmojiButton>
          </div>
        </ClickAwayListener>
        <UploadEmoji
          color="default"
          className={classes.button}
          component="span"
        >
          <AttachFile />
        </UploadEmoji>
        <SendButton
          color="default"
          className={classes.button}
          component="span"
          onClick={() => console.log('clicked')}
        >
          <Send />
        </SendButton>
        <StyledTextArea
          placeholder="Write a message..."
          onKeyPress={onKeyPress}
        />
      </WriteMessage>
    </WriteMessageContainer>
  );
};

export default withStyles(styles)(Write);
