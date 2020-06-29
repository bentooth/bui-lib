import styled from 'styled-components';

export default styled.div`
  display: grid;

  grid-template-columns: ${({ cols }) => cols || 'auto'};
  grid-template-rows: ${({ rows }) => rows || 'auto'};

  ${({ theme, colGap }) => theme.mixins.spacing('grid-column-gap', colGap || 0)}
  ${({ theme, rowGap }) => theme.mixins.spacing('grid-row-gap', rowGap || 0)}

  justify-content: ${({ justify }) => justify || 'unset'};
  align-content: ${({ align }) => align || 'unset'};
`;
