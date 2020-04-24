import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { NavLink } from 'react-router-dom';

const styles = css`
  text-decoration: none;
  color: currentColor;

  &:hover {
    text-decoration: none;
  }

  ${ifProp(
    'disabled',
    css`
      cursor: not-allowed;
    `
  )};
`;

const StyledText = styled.span`
  ${styles};
`;

const StyledNavLink = styled(NavLink)`
  ${styles};
`;

const Anchor = styled.a`
  ${styles};
`;

const Link = ({ disabled, to, ...props }) => {
  if (disabled) {
    return <StyledText {...props} disabled={disabled} />;
  }

  if (to) {
    return <StyledNavLink {...props} to={to} />;
  }

  return <Anchor {...props} />;
};

Link.propTypes = {
  disabled: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Link;
