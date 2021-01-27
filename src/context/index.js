import React from 'react';
import { element } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle.styled';

/**
 * @description
 * App provider component wraps the app in important context
 * Here we're wrapping the app with context for Styled Components, ToastContainer & injecting our global styling
 * This is also where we can add a redux store provider or react router browser router
 */
function AppProviders({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
        <ToastContainer autoClose={2000} position="top-right" />
      </ThemeProvider>
    </React.Fragment>
  );
}

AppProviders.propTypes = {
  children: element.isRequired,
};

export default AppProviders;
