import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  color: ${({ theme, featured }) => theme.palette[featured? 'primary' : 'secondary'].contrast};
  background: ${({ theme }) => theme.gradients['229deg']};
  ${({ theme, size }) => theme.mixins.spacing('width', size || 5)}
  ${({ theme, size }) => theme.mixins.spacing('height', size || 5)}

  > img {
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  }
`;


export default class Avatar extends Component {
  onError(e) {
    e.target.style.display='none';
  }

  render() {
    const { image, children, ...other } = this.props;

    return (
      <Container { ...other }>
        {
          image && typeof image === 'string'?
            <img alt="avatar" draggable="false" src={image} onError={this.onError.bind(this)}/> : image
        }
        { children }
      </Container>
    );
  }
}
