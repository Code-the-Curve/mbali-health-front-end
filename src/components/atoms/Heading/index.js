import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSize = ({ level }) => {
  const levelFontSize = {
    1: 3,
    2: 2.4,
    3: 2,
    4: 1.6,
    5: 1.2,
    6: 1,
    default: 1,
  };

  const size = levelFontSize[level] || levelFontSize.default;
  return `${size}rem`;
};

const adjustMargins = css`
  ${({ noMargin }) => (noMargin ? 'margin: 0;' : undefined)};
`;

const styles = css`
  font-weight: 400;
  font-size: ${fontSize};

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

const Heading = styled(
  ({ level, children, reverse, palette, theme, noMargin, ...props }) =>
    React.createElement(`h${level}`, props, children)
)`
  ${styles};
  ${adjustMargins};
`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  noMargin: PropTypes.bool,
  reverse: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
};

export default Heading;
