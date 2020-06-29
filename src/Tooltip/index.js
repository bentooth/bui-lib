import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => theme.mixins.spacing('margin-top', 2)}
  ${({ theme }) => theme.mixins.spacing('padding', 2)}

  position: fixed;
  top: ${({ theme, top }) => top || 0}px;
  left: ${({ theme, left }) => left || 0}px;

  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.palette.background.tooltip};
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  border-radius: 4px;
  text-transform: initial;
  transform: translateX(-50%);

  &:after {
    content: '';
    width: 0; height: 0;
    position: absolute;
    top: 0; left: 50%;
    border: 0 solid transparent;
    border-bottom-color: ${({ theme }) => theme.palette.background.tooltip};
    ${({ theme }) => theme.mixins.spacing('border-width', 1)}
    ${({ theme }) => theme.mixins.spacing('margin', -2, 0, 0, -1)}
  }
`;

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorRect: {}
    };
  }

  componentWillReceiveProps({ anchor }) {
    if (anchor) {
      anchor.onmouseenter = () => this.setState({ open: true, anchorRect: anchor.getBoundingClientRect() });
      anchor.onmouseleave = () => this.setState({ open: false });
    }
  }

  render() {
    const { open, anchorRect } = this.state;

    return open?
      <Container
        top={anchorRect.y+anchorRect.height}
        left={anchorRect.x+(anchorRect.width/2)}
        { ...this.props }
      /> : null;
  }
}