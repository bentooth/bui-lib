import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.white};
  ${({ theme }) => theme.mixins.spacing('padding', 1)}
  ${({ theme }) => theme.typography.button }

  ${({ theme }) => theme.mixins.transition('opacity', 'shortest', 'easeIn')}
  opacity: 0.8;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
