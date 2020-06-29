import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  ${({ theme }) => theme.mixins.spacing('right', 2)}

  & > * {
    ${({ theme }) => theme.mixins.spacing('margin-left', 1)}
  }
`;
