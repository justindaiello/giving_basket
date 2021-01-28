import styled from 'styled-components';

export const StyledTable = styled.table`
  /* positioning */
  position: relative;
  border-spacing: 10px;
  border-collapse: separate;

  tbody {
    tr:nth-child(odd) {
      /* visual */
      background-color: ${({ theme }) => theme.secondary};
    }

    .hasBtn {
      /* visual */
      background: ${({ theme }) => theme.white};
    }
  }
`;

export const StyledHeaderItem = styled.th`
  /* typography */
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizeLg};
`;

export const StyledTableItem = styled.td`
  /* box-model */
  padding: 0.5rem 0.25rem;

  span {
    /* positioning */
    display: block;
  }
`;
