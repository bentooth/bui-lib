import styled from 'styled-components';

export default styled.span`
  user-select: none;
  overflow: hidden;
  color: inherit;

  & > svg {
    fill: currentColor;
    vertical-align: middle;
    ${({ theme, size }) => theme.mixins.spacing('height', size || 3)}
  }
`;