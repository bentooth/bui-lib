import React, { Component } from 'react';
import styled from 'styled-components';

const typeMapping = {
  select: 'select',
  textarea: 'textarea',
};

const Field = styled(({ children, ...props }) =>
  React.createElement(typeMapping[props.type] || 'input', props, children)
)`
  ${({ theme }) => theme.typography.subheading}
  ${({ theme }) => theme.mixins.spacing('line-height', 4.5)}
  ${({ theme }) => theme.mixins.spacing('padding', 0, 1)}

  width: ${({ width }) => width || '100%'};
  border-radius: 4px;
  border: 2px solid transparent;

  border-color: ${({ theme, error, correct }) =>
    error ?
      theme.palette.common.redDark :
      correct ?
        theme.palette.common.greenDark :
        'transparent'
  };

  color: ${({ theme, error, correct }) =>
    error ?
      theme.palette.common.redDark :
      correct ?
        theme.palette.common.greenDark :
        theme.palette.secondary.contast
  };

  background-color: ${({ theme }) => theme.palette.common.greyLight};
  opacity: ${({ disabled }) => disabled? .5 : 1};
  ${({ theme }) => theme.mixins.transition('all', 'short', 'easeInOut')}

  select& {
    ${({ theme }) => theme.mixins.spacing('height', 5)}
  }
`;

export default class Input extends Component {
  render() {
    const { error, correct, ...other } = this.props;

    return (
      <Field
        error={error? error : undefined}
        correct={correct? correct : undefined}
        autoComplete='off'
        {...other}
      />
    );
  }
}
