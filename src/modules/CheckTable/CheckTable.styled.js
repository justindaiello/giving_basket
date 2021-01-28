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

export const StyledButtonGroup = styled.div`
  display: block;
`;

export const StyledPageButton = styled.button`
  /* box-model */
  border: none;

  /* visual */
  cursor: pointer;
  background: transparent;

  /* typography */
  color: ${({ theme }) => theme.black};
  font-size: 25px;
  transition: color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:active {
    /* typography */
    color: ${({ theme }) => theme.primary};
  }

  &:focus {
    /* box-model */
    outline: ${({ theme }) => `1px solid ${theme.primary}`};
  }

  &:disabled,
  &:disabled:hover {
    /* visual */
    opacity: 0.45;
    cursor: not-allowed !important;
  }
`;
