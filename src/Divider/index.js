import styled from 'styled-components';

export default styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.palette.common.grey };
  ${({ theme }) => theme.mixins.spacing('margin', 1, 0)}
`;