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

  /* Custom modal overrides */
  .addressModal {
    /* box-model */
    border: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSm};
    max-width: 750px;
    width: 100%;
		overflow: auto;

    /* visual */
    background: ${({ theme }) => theme.white};
    
    /* positioning */
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translateX(-50%);
  }

  .ReactModal__Overlay {
    /* positioning */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;

    /* visual */
		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity 300ms;
		opacity: 0;
	}

	.ReactModal__Overlay--after-open {
    /* visual */
		opacity: 1;
	}

	.ReactModal__Overlay--before-close {
    /* visual */
		opacity: 0;
	}

  /* Custom toast override */
  .Toastify__toast--info {
    background: ${({ theme }) => theme.primary};
  }
`;

export default GlobalStyle;
