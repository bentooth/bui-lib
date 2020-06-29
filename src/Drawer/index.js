import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  position: absolute;
  top: 0;

  ${({ anchor }) => anchor || 'left'}: 0;
  z-index: ${({ theme }) => theme.zIndex.drawer};
  color: ${({ theme, featured }) => featured? theme.palette.primary.contrast : theme.palette.common.greyDark};
  background: ${({ theme, featured }) => featured? theme.gradients['45deg'] : theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[2]};

  ${({ theme }) => theme.mixins.spacing('padding', 6, 4)}
  ${({ theme }) => theme.mixins.transition('transform', 'short', 'easeInOut', 'short')}

  transform: translateX(calc(-100% + ${({ theme }) => theme.spacing.unit*4}px));
  &:hover { transform: translateX(0); }
`;
