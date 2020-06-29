import React from 'react';
import Icon from '../Icon';

const QRcode = (props) =>
  <Icon { ...props }>
    <svg viewBox="0 0 22 28">
      <path d="M6 18v2h-2v-2h2zM6 6v2h-2v-2h2zM18 6v2h-2v-2h2zM2 21.984h6v-5.984h-6v5.984zM2 10h6v-6h-6v6zM14 10h6v-6h-6v6zM10 14v10h-10v-10h10zM18 22v2h-2v-2h2zM22 22v2h-2v-2h2zM22 14v6h-6v-2h-2v6h-2v-10h6v2h2v-2h2zM10 2v10h-10v-10h10zM22 2v10h-10v-10h10z"></path>
    </svg>
  </Icon>;

export default QRcode;
