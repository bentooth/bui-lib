import React, { Component } from 'react';
import styled from 'styled-components';
import FlexBox from '../FlexBox';
import IconButton from '../IconButton';
import IconClose from '../icons/Close';

const Container = styled(FlexBox)`
  position: fixed;

  top: ${({ theme, vertical }) =>
    vertical === 'center'? '50%' :
    vertical === 'bottom'? 'auto' :
    '0'
  };
  bottom: ${({ theme, vertical }) =>
    vertical === 'bottom'? '0' : 'auto'
  };

  left: ${({ theme, horizontal }) =>
    horizontal === 'center'? '50%' :
    horizontal === 'right'? 'auto' :
    '0'
  };
  right: ${({ theme, horizontal }) =>
    horizontal === 'right'? '0' : 'auto'
  };

  transform: translate(${
    ({ theme, horizontal, vertical }) => `${
      horizontal === 'center'? '-50%' : '0'
    },${
      vertical === 'center'? '-50%' : '0'
    }`
  });

  ${({ theme, horizontal, vertical }) => theme.mixins.spacing(
    'margin',
    vertical !== 'center'? 3 : 0,
    horizontal !== 'center'? 3 : 0
  )}

  ${({ theme }) => theme.mixins.spacing('padding', 2)}
  ${({ theme }) => theme.mixins.animation('fadeIn', '1s')}

  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary.contrast};
  background: ${({ theme }) => theme.palette.background.tooltip};
  z-index: ${({ theme }) => theme.zIndex.snackbar};
  box-shadow: ${({ theme }) => theme.shadows[5]};
`;

const CloseButton = styled(IconButton)`
  color: inherit;
  ${({ theme }) => theme.mixins.spacing('margin-left', 2)}
`;

export default class Snackbar extends Component {
  render() {
    const { children, onClose, ...other } = this.props;

    return (
      <Container align="flex-start" { ...other }>
        { children }
        {
          onClose &&
          <CloseButton onClick={onClose}>
            <IconClose size={2}/>
          </CloseButton>
        }
      </Container>
    );
  }
}
