import reboot from 'styled-reboot';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Normalize app css */
  ${reboot}

   body {
    /* visual */
    color: ${({ theme }) => theme.black};
    background: ${({ theme }) => theme.white};
  }
`;

export default GlobalStyle;
