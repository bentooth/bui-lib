import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import FlexBox from '../FlexBox';
import Pill from '../Pill';

const Label = styled.label`
  ${({ theme }) => theme.typography.label}
  line-height: 2em;
  color: inherit;
`;

const Error = styled(Pill)`
  ${({ theme }) => theme.typography.body2}
  line-height: normal;

  position: absolute;
  right: 0;

  ${({ theme }) => theme.mixins.spacing('margin-right', 1)}
  color: ${({ theme }) => theme.palette.common.redDark};
  background-color: ${({ theme }) => theme.palette.common.redLight};
`;

const InputContainer = styled(FlexBox)`
  position: relative;
`;

const Container = styled.div`
  ${({ theme, guttertop }) => theme.mixins.spacing('margin-top', guttertop || 2)}
  ${({ theme, gutterbottom }) => theme.mixins.spacing('margin-bottom', gutterbottom || 2)}

  & ${Label}:after {
    ${({ theme }) => theme.mixins.spacing('margin-left', 1)}
    content: "${({ theme, error, correct }) => error? '✖' : correct? '✔' : ''}";
  }
`;

export default class TextField extends Component {
  render() {
    const { label, ...other } = this.props;
    const inputId = `input-${Date.now()}`;

    return (
      <Container correct={other.correct} error={other.error}>
        { label && <Label htmlFor={inputId}>{ label }</Label> }
        <InputContainer align="center">
          <Input id={inputId} { ...other } />
          {other.error && <Error>{other.error.message}</Error>}
        </InputContainer>
      </Container>
    );
  }
}
