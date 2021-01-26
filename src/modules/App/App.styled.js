import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  /* positioning */
  display: flex;
  position: relative;
  flex-flow: column nowrap;

  /* box-model */
  height: 100vh;
`;

export const StyledContentWrapper = styled.div`
  /* positioning */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  /* box-model */
  padding: 2rem;
`;
