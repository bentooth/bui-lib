import styled from 'styled-components';
import CardActions from '../CardActions';

export default styled.div`
  position: relative;
  color: ${({ theme, featured }) => featured? theme.palette.primary.contrast : theme.palette.common.greyDark};
  background: ${({ theme, featured }) => featured? theme.gradients['229deg'] : 'transparent'};
  border-radius: 4px;
  box-shadow: ${({ theme, featured }) => theme.shadows[featured? 12 : 0]};
  ${({ theme }) => theme.mixins.spacing('margin-bottom', 3)}
  ${({ theme, featured }) => featured && theme.mixins.spacing('padding', 3)}

  & ${CardActions} {
    ${({ theme, featured }) => featured && theme.mixins.spacing('padding', 3)}
  }
`;
