import { Switch } from 'react-router-dom';
import { spring } from 'react-router-transition';
import styled from 'styled-components';

const glide = (val) => spring(val, { stiffness: 174, damping: 24 });

const mapStyles = (styles) => ({ transform: `translateX(${styles.offset}%)` });

const CustomSwitch = styled(Switch).attrs(() => ({
  atEnter: { offset: 100 },
  atLeave: { offset: glide(-100) },
  atActive: { offset: glide(0) },
  mapStyles,
}))`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;

  > div {
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
`;

export default CustomSwitch;
