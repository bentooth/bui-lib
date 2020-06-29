import styled from 'styled-components';
import TableBody from '../TableBody';

export default styled.tr`
  color: inherit;
  display: table-row;
  outline: none;
  vertical-align: middle;

  ${TableBody} & {
    ${({ theme }) => theme.mixins.animation('fadeInSlide', '.5s')}
    box-shadow: 0px -1px ${({ theme }) => theme.palette.common.grey };
  }
`;