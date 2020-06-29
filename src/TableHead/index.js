import styled from 'styled-components';
import TableCell from '../TableCell';

export default styled.thead`
  display: table-header-group;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => `${theme.palette.common.greyDark}55`};

  & ${TableCell} {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.palette.background.default};
    box-shadow: 0px 1px ${({ theme }) => theme.palette.common.grey };
  }
`;