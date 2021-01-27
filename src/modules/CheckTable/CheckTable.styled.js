import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  /* positioning */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  /* box-model */
  max-width: 1000px;
  width: 100%;

  .tableTitle {
    /* typography */
    text-align: center;
  }
`;
