import styled from 'styled-components';

export const StyledModalBody = styled.form`
  /* positioning */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  /* box-model */
  padding: 2rem;

  .btnGroup {
    /* positioning */
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-gap: 1rem;
    justify-content: end;

    /* box-model */
    margin-top: 1rem;
  }
`;

export const StyledFormGroup = styled.div`
  label {
    /* box-model */
    margin-bottom: 0.25rem;
  }
`;
