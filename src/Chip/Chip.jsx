import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import FlexBox from '../FlexBox';
import Text from '../Text';
import TableCell from '../TableCell';

const Container = styled(FlexBox)`
  background-color: ${({ theme }) => theme.palette.common.grey};
  ${({ theme }) => theme.mixins.spacing('border-radius', 4)}
  ${({ theme, avatar }) => avatar? '' : theme.mixins.spacing('padding', 1)}

  ${TableCell} & {
    border-radius: 0;
    background: transparent;
  }
`;

const Picture = styled(Avatar)`
  ${({ theme }) => theme.mixins.spacing('margin-right', 1)}
`;

const Label = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default class Chip extends Component {
  render() {
    const { avatar, label } = this.props;

    return (
      <Container align="center" { ...this.props }>
        { avatar && <Picture image={avatar} size="4"/> }
        <Label type="subheading">{ label }</Label>
      </Container>
    );
  }
}
