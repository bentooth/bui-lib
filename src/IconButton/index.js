import styled from 'styled-components';

export default styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;

  opacity: .5;
  ${({ theme }) => theme.mixins.transition('all', 'shortest', 'easeOut')}

  &:hover,
  &:focus {
    opacity: 1;
  }
`;