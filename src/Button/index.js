import styled from 'styled-components';

export default styled.button`
  ${({ theme }) => theme.typography.button }
  ${({ theme }) => theme.mixins.spacing('padding', 1, 3)}

  position: relative;
  border: none;
  border-radius: 4px;
  width: ${({ fullWidth }) => fullWidth? '100%' : 'auto'};
  ${({ theme }) => theme.mixins.transition('all', 'shortest', 'easeIn')}

  ${({ theme, guttertop }) => theme.mixins.spacing('margin-top', guttertop || 0)}
  ${({ theme, gutterbottom }) => theme.mixins.spacing('margin-bottom', gutterbottom || 0)}

  color: ${({ theme, loading, featured }) =>
    loading?
      'transparent' :
      featured?
        theme.palette.secondary.main :
        theme.palette.common.white
  };
  background: ${({ theme, featured }) =>
    featured?
      theme.palette.common.white :
      theme.palette.secondary.main
  };

  &:hover,
  &:focus {
    transform: translateY(1px);
  }

  &:before {
    display: ${({ loading }) => loading? 'block' : 'none'};
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    ${({ theme }) => theme.mixins.spacing('width', 2)}
    ${({ theme }) => theme.mixins.spacing('height', 2)}
    ${({ theme }) => theme.mixins.spacing('margin-top', -1)}
    ${({ theme }) => theme.mixins.spacing('margin-left', -1)}
    border-radius: 50%;
    border-top: 2px solid ${({ theme, featured }) =>
      featured?
        theme.palette.secondary.main :
        theme.palette.common.white
    };
    border-right: 2px solid transparent;
    ${({ theme }) => theme.mixins.animation('spinner', '.6s', 'linear', 'infinite')}
  }

  pointer-events: ${({ loading }) => loading? 'none' : 'all'};
`;