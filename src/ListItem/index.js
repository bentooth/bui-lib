import styled from 'styled-components';

export default styled.li`
  ${({ theme }) => theme.mixins.spacing('padding', 1)}
  ${({ theme }) => theme.mixins.spacing('margin-bottom', 1)}

  cursor: ${({ onClick }) => onClick? 'pointer' : 'auto'};
  border: 1px solid ${({ theme }) => theme.palette.common.grey };

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.greyLight};
  }

  ${({ theme }) => theme.mixins.animation('fadeInSlide', '.5s')}
`;