import React from 'react';
import Icon from '../Icon';

const Circle = (props) =>
  <Icon { ...props }>
    <svg viewBox="0 0 24 28">
      <path d="M24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path>
    </svg>
  </Icon>;

export default Circle;
