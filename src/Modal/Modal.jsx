import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton';
import IconClose from '../icons/Close';

const Layer = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0,.4);
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const Container = styled.div`
  position: relative;
  min-width: 25vw;
  border-radius: 4px;

  ${({ theme }) => theme.mixins.spacing('padding', 3)}
  color: ${({ theme, featured }) => featured? theme.palette.primary.contrast : theme.palette.common.greyDark};
  background: ${({ theme, featured }) => featured? theme.gradients['229deg'] : theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[2]};
`;

const CloseButton = styled(IconButton)`
  z-index: 1;
  position: absolute;
  ${({ theme }) => theme.mixins.spacing('top', 2)}
  ${({ theme }) => theme.mixins.spacing('right', 2)}
  ${({ theme }) => theme.mixins.spacing('padding', 0)}
`;

export default class Modal extends Component {
  render() {
    const { children, onClose, open, ...other } = this.props;

    if (open) {
      return (
        <Layer onClick={onClose}>
          <Container
            onClick={e => e.stopPropagation()}
            { ...other }
          >
            <CloseButton onClick={onClose}>
              <IconClose size="4"/>
            </CloseButton>
            { children }
          </Container>
        </Layer>
      );
    }
    return null;
  }
}
