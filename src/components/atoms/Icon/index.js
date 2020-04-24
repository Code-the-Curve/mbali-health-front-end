// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fontSize = ({ width, height }) => {
  const size = width || height;
  return size ? `${size / 10}rem` : '1.25em';
};

const Wrapper = styled.span`
  display: block;
  font-size: ${fontSize};
  color: currentcolor
  width: 1em;
  height: 1em;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: none;
    pointer-events: none;
  }
`;

const Icon = React.forwardRef(
  ({ disabled, wrapped, icon, decorative, ...props }, ref) => {
    const svg = require(`!raw-loader!./icons/${icon}.svg`).default;

    if (wrapped) {
      return (
        <Wrapper {...props} aria-hidden={!!decorative} ref={ref}>
          <div dangerouslySetInnerHTML={{ __html: svg }} />
        </Wrapper>
      );
    }
    return (
      <Wrapper
        {...props}
        ref={ref}
        aria-hidden={!!decorative}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.number,
  icon: PropTypes.string.isRequired,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  width: PropTypes.number,
  wrapped: PropTypes.bool,
  decorative: PropTypes.bool,
};

export default Icon;
