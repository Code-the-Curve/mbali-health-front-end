import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

const LoadingWrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingPage = () => (
  <LoadingWrapper>
    <Icon icon="spinner" height={64} />
  </LoadingWrapper>
);

export default LoadingPage;
