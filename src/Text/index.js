import React from 'react';
import styled from 'styled-components';

const typeMapping = {
  display4:   'h1',
  display3:   'h1',
  display2:   'h1',
  display1:   'h1',
  headline:   'h1',
  title:      'h2',
  subheading: 'h3',
  body2:      'aside',
  body1:      'p',
};

export default styled(({ type, children, ...props }) =>
  React.createElement(typeMapping[type] || 'span', props, children)
)`
  margin: 0;
  display: block;
  ${({ theme, type }) => theme.typography[type || 'body1']}
  color: ${({ theme, color }) => color? theme.palette[color].contrast : 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  ${({ theme, guttertop }) => theme.mixins.spacing('margin-top', guttertop || 0)}
  ${({ theme, gutterbottom }) => theme.mixins.spacing('margin-bottom', gutterbottom || 0)}
`;
