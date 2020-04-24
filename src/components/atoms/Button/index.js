import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components';

const Button = styled(MaterialButton)`
  width: 100px;
  display: block;
  margin: auto;
  background-color: #6fd056;

  &[disabled] {
    color: #38a81c;
  }

  &:not([disabled]) {
    color: white;
  }
`;

export default Button;
