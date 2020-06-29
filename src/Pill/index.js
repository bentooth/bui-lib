import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  text-align: center;

  ${({ theme }) => theme.mixins.spacing('padding', 1, 2)}
  ${({ theme }) => theme.mixins.spacing('border-radius', 2)}

  ${({ theme }) => theme.typography.body1}
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;

  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.common.grey};
`;
