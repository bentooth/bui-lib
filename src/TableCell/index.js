import styled from 'styled-components';

export default styled.td`
  display: table-cell;
  max-width: 8vw;
  text-align: ${({ textAlign }) => textAlign || 'left'};

  ${({ theme }) => theme.mixins.transition('padding', 'shortest', 'sharp')}
  ${({ theme }) => theme.mixins.spacing('padding', 1)}

  ${({ theme }) => theme.mixins.media('medium')`
    max-width: 10vw;
    ${theme.mixins.spacing('padding', 2)}
  `}

  ${({ theme }) => theme.mixins.media('large')`
    max-width: 12vw;
    ${theme.mixins.spacing('padding', 3)}
  `}
`;