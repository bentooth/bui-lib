import React, { Component } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: inherit;
`;

export default class ExternalLink extends Component {
  open(e) {
    const { href } = this.props

    e.preventDefault();

    if (nw && href) {
      nw.Shell.openExternal(href);
    }
  }

  render() {
    return <Link { ...this.props } onClick={this.open.bind(this)} />;
  }
}
