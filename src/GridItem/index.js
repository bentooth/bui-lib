import styled from 'styled-components';

export default styled.div`
  grid-column: ${({ col }) => col || 'unset'};
  grid-row: ${({ row }) => row || 'unset'};
  overflow: auto;
`;
